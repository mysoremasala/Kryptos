from flask import Flask

def create_app():
    app = Flask(__name__)
    app.secret_key = 'temporary-secret-key'
    
    # Register blueprints
    from .routes import main
    app.register_blueprint(main)
    
    return app 