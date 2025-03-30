from flask import Blueprint, render_template, request, redirect, url_for, session, flash, jsonify
from flask_login import login_required, current_user
from firebase import db
from app.models import User

main = Blueprint('main', __name__)

# Temporary user storage (DO NOT USE IN PRODUCTION)
TEMP_USERS = {
    'test@test.com': {'password': 'test123', 'username': 'Test User'}
}

@main.route('/')
@login_required
def home():
    # Refresh user data to get current bananos
    user = User.get(current_user.uid)
    return render_template('home.html', user=user)



@main.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        if email in TEMP_USERS and TEMP_USERS[email]['password'] == password:
            session['user'] = TEMP_USERS[email]['username']
            flash('Login successful!', 'success')
            return redirect(url_for('main.home'))
        
        flash('Invalid credentials!', 'error')
        return redirect(url_for('main.login'))
    
    return render_template('login.html')

@main.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        username = request.form.get('username')
        
        if email in TEMP_USERS:
            flash('Email already exists!', 'error')
            return redirect(url_for('main.signup'))
        
        TEMP_USERS[email] = {
            'password': password,
            'username': username
        }
        flash('Account created successfully!', 'success')
        return redirect(url_for('main.login'))
    
    return render_template('signup.html')

@main.route('/logout')
def logout():
    session.pop('user', None)
    flash('Logged out successfully!', 'success')
    return redirect(url_for('main.home'))

@main.route('/quiz/<category>')
def quiz(category):
    if 'user' not in session:
        flash('Please login to take the quiz!', 'error')
        return redirect(url_for('main.login'))
    return render_template('quiz.html', category=category)

@main.route('/quiz-interface')
def quiz_interface():
    if 'user' not in session:
        flash('Please login to take the quiz!', 'error')
        return redirect(url_for('main.login'))
    return render_template('quiz-interface.html')

@main.route('/quiz-results')
def quiz_results():
    if 'user' not in session:
        flash('Please login to view results!', 'error')
        return redirect(url_for('main.login'))
    return render_template('quiz-results.html')

@main.route('/submit_quiz', methods=['POST'])
@login_required
def submit_quiz():
    try:
        data = request.get_json()
        score = int(data.get('score', 0))
        
        # Calculate bananos (10 per correct answer)
        bananos_earned = score * 10
        
        # Get user reference from Firebase
        user_ref = db.child("users").child(current_user.uid)
        
        # Get current bananos (default to 0 if None)
        current_bananos = user_ref.child("bananos").get().val()
        if current_bananos is None:
            current_bananos = 0
            
        # Calculate new total
        new_bananos = current_bananos + bananos_earned
        
        # Update the database with new bananos amount
        user_ref.update({
            "bananos": new_bananos
        })
        
        print(f"User {current_user.username} earned {bananos_earned} bananos. New total: {new_bananos}")  # Debug print
        
        return jsonify({
            'success': True,
            'score': score,
            'bananos_earned': bananos_earned,
            'total_bananos': new_bananos
        })
        
    except Exception as e:
        print(f"Error in submit_quiz: {str(e)}")  # Debug print
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@main.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        username = request.form.get('username')
        
        if email in TEMP_USERS:
            flash('Email already exists!', 'error')
            return redirect(url_for('main.signup'))
        
        TEMP_USERS[email] = {
            'password': password,
            'username': username,
            'bananos': 0  # Initialize bananos for new users
        }
        flash('Account created successfully!', 'success')
        return redirect(url_for('main.login'))
    
    return render_template('signup.html') 