from flask import Flask, render_template, request, jsonify, session, redirect, url_for, flash, make_response
import pyrebase
from datetime import datetime
from flask_login import UserMixin


def create_app():
    app = Flask(__name__, 
                static_url_path='/static',
                static_folder='static')
    
    app.secret_key = 'your-secret-key-here'  # Change this to a secure secret key

    # Initialize Firebase
    firebaseConfig = {
        'apiKey': "AIzaSyBI5Wn2facCepNhZe8Rq5SzuWrUfEWLlhE",
        'authDomain': "web-prog-4c5f4.firebaseapp.com",
        'projectId': "web-prog-4c5f4",
        'storageBucket': "web-prog-4c5f4.firebasestorage.app",
        'messagingSenderId': "534208802480",
        'appId': "1:534208802480:web:a6b74ab8303c7c87e4d575",
        'measurementId': "G-MBJ9SDBRTE",
        'databaseURL': "https://web-prog-4c5f4-default-rtdb.firebaseio.com/"
    }

    firebase = pyrebase.initialize_app(firebaseConfig)
    auth = firebase.auth()
    db = firebase.database()

    class User(UserMixin):
        def __init__(self, uid, username, email, bananos=0):
            self.uid = uid
            self.username = username
            self.email = email
            self.bananos = bananos

        @staticmethod
        def get(uid):
            try:
                user_data = db.child("users").child(uid).get().val()
                if user_data:
                    return User(
                        uid=uid,
                        username=user_data.get('username'),
                        email=user_data.get('email'),
                        bananos=user_data.get('bananos', 0)
                    )
            except Exception as e:
                print(f"Error getting user: {str(e)}")
            return None

    @app.route('/')
    def home():
        if 'user' in session:
            try:
                # Get fresh user data from Firebase to ensure current bananos count
                user_id = session['user']['uid']
                user_data = db.child("users").child(user_id).get().val()
                
                # Update session user data with current values
                session['user'].update({
                    'bananos': user_data.get('bananos', 0)
                })
                
                response = make_response(render_template('home.html', user=session['user']))
            except Exception as e:
                print(f"Error getting user data: {str(e)}")
                response = make_response(render_template('home.html', user=session.get('user')))
        else:
            response = make_response(render_template('home.html', user=None))
            
        # Set cache control headers
        response.headers['Cache-Control'] = 'private, no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response

    @app.route('/leaderboards')
    def leaderboards():
        return render_template('leaderboards.html')

    @app.route('/api/leaderboard')
    def get_leaderboard():
        try:
            # Get all users from Firebase
            users_ref = db.child("users").get()
            
            if not users_ref:
                return jsonify({
                    'success': False,
                    'error': 'No users found'
                })

            # Convert Firebase response to list and sort by bananos
            users_list = []
            for user in users_ref.each():
                user_data = user.val()
                if user_data and 'username' in user_data and 'bananos' in user_data:
                    users_list.append({
                        'username': user_data['username'],
                        'bananos': user_data.get('bananos', 0)
                    })

            # Sort users by bananos in descending order
            users_list.sort(key=lambda x: x['bananos'], reverse=True)

            return jsonify({
                'success': True,
                'users': users_list
            })
        except Exception as e:
            print(f"Error fetching leaderboard data: {str(e)}")
            return jsonify({
                'success': False,
                'error': str(e)
            }), 500

    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if 'user' in session:
            return redirect(url_for('home'))

        if request.method == 'POST':
            try:
                identifier = request.form.get('identifier')  # Email or username
                password = request.form.get('password')

                # First, check if identifier is a username
                email_to_use = identifier
                users_ref = db.child("users")
                users = users_ref.get()
                
                if users:
                    for user in users.each():
                        if user.val().get('username') == identifier:
                            email_to_use = user.val().get('email')
                            break

                # Authenticate with Firebase
                user = auth.sign_in_with_email_and_password(email_to_use, password)
                
                # Get user data from database
                user_data = db.child("users").child(user['localId']).get().val()
                
                # Store in session
                session['user'] = {
                    'email': user_data['email'],
                    'username': user_data['username'],
                    'uid': user['localId']
                }

                response = redirect(url_for('home'))
                response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
                response.headers['Pragma'] = 'no-cache'
                response.headers['Expires'] = '0'
                return response

            except Exception as e:
                print(f"Login error: {str(e)}")
                flash('Invalid credentials', 'error')
                return redirect(url_for('login'))

        response = make_response(render_template('login.html'))
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response

    @app.route('/signup', methods=['GET', 'POST'])
    def signup():
        if request.method == 'POST':
            try:
                email = request.form.get('email')
                username = request.form.get('username')
                password = request.form.get('password')

                # Basic validation
                if not email or not username or not password:
                    flash('All fields are required', 'error')
                    return redirect(url_for('signup'))

                # Check if username exists
                users_ref = db.child("users")
                existing_users = users_ref.get()
                
                if existing_users:
                    for user in existing_users.each():
                        if user.val().get('username') == username:
                            flash('Username already exists', 'error')
                            return redirect(url_for('signup'))

                # Create user in Firebase Authentication
                user = auth.create_user_with_email_and_password(email, password)
                
                # Store user data in Realtime Database
                user_data = {
                    'email': email,
                    'username': username,
                    'bananos': 0, 
                    'created_at': str(datetime.now())
                }
                db.child("users").child(user['localId']).set(user_data)

                # Automatically log the user in
                session['user'] = {
                    'email': email,
                    'username': username,
                    'uid': user['localId']
                }

                flash('Account created successfully!', 'success')
                return redirect(url_for('home'))

            except Exception as e:
                error_message = str(e)
                print(f"Signup error: {error_message}")  # For debugging
                
                if 'EMAIL_EXISTS' in error_message:
                    flash('Email already exists', 'error')
                elif 'WEAK_PASSWORD' in error_message:
                    flash('Password should be at least 6 characters', 'error')
                else:
                    flash('Error creating account. Please try again.', 'error')
                
                return redirect(url_for('signup'))

        return render_template('signup.html')

    @app.route('/logout')
    def logout():
        session.clear()
        return redirect(url_for('home'))

    @app.route('/quiz/<category>')
    def quiz(category):
        # Pass the quiz category to the template
        return render_template('quiz.html', quiz={'category': category})

    @app.route('/quiz-interface/<category>')
    def quiz_interface(category):
        # Check if user is logged in
        if 'user' not in session:
            flash('Please login to take the quiz!', 'error')
            return redirect(url_for('login'))
        
        # Pass the quiz category to the template
        return render_template('quiz-interface.html', quiz={'category': category})

    @app.route('/quiz-results')
    def quiz_results():
        if 'user' not in session:
            flash('Please login to view results!', 'error')
            return redirect(url_for('login'))
        return render_template('quiz-results.html')

    @app.route('/submit-quiz', methods=['POST'])
    def submit_quiz():
        if 'user' not in session:
            return jsonify({'error': 'Not logged in'}), 401
        
        try:
            data = request.json
            user_id = session['user']['uid']  # Get user ID from session
            score = data.get('score', 0)
            
            print(f"Processing quiz submission for user {user_id} with score {score}")  # Debug log
            
            # Calculate bananos earned (10 per correct answer)
            bananos_earned = score * 10
            
            try:
                # Get current user data
                user_ref = db.child("users").child(user_id)
                user_data = user_ref.get().val()
                
                print(f"Current user data: {user_data}")  # Debug log
                
                if user_data is None:
                    print(f"No user data found for ID {user_id}")  # Debug log
                    return jsonify({'error': 'User not found'}), 404
                
                # Get current bananos or default to 0
                current_bananos = int(user_data.get('bananos', 0))
                new_bananos = current_bananos + bananos_earned
                
                print(f"Updating bananos: {current_bananos} + {bananos_earned} = {new_bananos}")  # Debug log
                
                # Update user's bananos in database
                db.child("users").child(user_id).update({
                    'bananos': new_bananos
                })
                
                print(f"Successfully updated bananos for user {user_id}")  # Debug log
                
                # Store quiz results
                quiz_result = {
                    'user_id': user_id,
                    'category': data.get('category'),
                    'score': score,
                    'bananos_earned': bananos_earned,
                    'time_taken': data.get('timeTaken'),
                    'completed_at': str(datetime.now())
                }
                
                # Add to quiz_results collection
                db.child("quiz-results").push(quiz_result)
                
                return jsonify({
                    'success': True,
                    'message': 'Quiz submitted successfully',
                    'bananos_earned': bananos_earned,
                    'total_bananos': new_bananos
                })
                
            except Exception as e:
                print(f"Firebase error: {str(e)}")  # Debug log
                raise e
                
        except Exception as e:
            print(f"Error in submit_quiz: {str(e)}")  # Debug log
            return jsonify({'error': str(e)}), 400

    @app.route('/user/profile')
    def user_profile():
        if 'user' not in session:
            flash('Please login to view profile!', 'error')
            return redirect(url_for('login'))
        
        try:
            user_id = session['user']['localId']
            
            # Get user data
            user_data = db.child("users").child(user_id).get().val()
            
            # Get user's quiz history
            quiz_history = db.child("quiz_results")\
                .order_by_child("user_id")\
                .equal_to(user_id)\
                .limit_to_last(10)\
                .get()
            
            history = [result.val() for result in quiz_history.each()] if quiz_history.each() else []
            
            return render_template('profile.html', user=user_data, history=history)
        except Exception as e:
            flash('Error loading profile!', 'error')
            return redirect(url_for('home'))

    @app.route('/test-static')
    def test_static():
        return """
        <html>
            <head>
                <link rel="stylesheet" href="/static/css/homestyle.css">
            </head>
            <body>
                <div class="login-container">
                    <h1>Test Static Files</h1>
                </div>
            </body>
        </html>
        """

    @app.route('/check-login-status')
    def check_login_status():
        return jsonify({'logged_in': 'user' in session})

    @app.route('/aboutus')
    def about_us():
        return render_template('aboutus.html')

    @app.route('/faq')
    def faq():
        return render_template('faq.html')

    @app.route('/debug-session')
    def debug_session():
        return jsonify({
            'session': dict(session),
            'user': session.get('user', None)
        })

    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('error.html', error_message='Page not found'), 404

    @app.errorhandler(500)
    def internal_server_error(e):
        return render_template('error.html', error_message='Internal server error'), 500

    return app

