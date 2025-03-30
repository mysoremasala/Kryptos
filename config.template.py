# Template for config.py - Copy this file to config.py and fill in your values
FIREBASE_CONFIG = {
    "type": "service_account",
    "project_id": "YOUR_PROJECT_ID",
    "private_key_id": "YOUR_PRIVATE_KEY_ID",
    "private_key": "YOUR_PRIVATE_KEY",
    "client_email": "YOUR_CLIENT_EMAIL",
    "client_id": "YOUR_CLIENT_ID",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "YOUR_CERT_URL"
}

FLASK_CONFIG = {
    "SECRET_KEY": "your-secret-key-here",
    "DEBUG": True
}

DB_CONFIG = {
    "FIREBASE_PROJECT_ID": "your-project-id"
} 