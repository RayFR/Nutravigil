from flask import Blueprint, jsonify, request
from nutravigil.models import db, User
from flask_login import login_required, logout_user, login_user, current_user

auth = Blueprint("auth", __name__)

@auth.route("/get_user/<int:id>", methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify({
        "userId": user.id,
        "username": user.username,
        "email": user.email,
        "password": user.password
    })

@auth.route("/signup", methods=['POST'])
def signup():
    username = request.json.get("username")
    email = request.json.get("email")
    password = request.json.get("password")

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "user exists"}), 409
    
    new_user = User(email=email, username=username)
    new_user.set_password(password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"success": "Added user to DB"}), 201
    except Exception:
        db.session.rollback()
        return jsonify({"error": "internal server error"})

@auth.route("/login", methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "user does not exist"}), 401
    
    if not user.check_password(password):
        return jsonify({"error": "password does not match"}), 401

    if current_user:
        logout_user()

    login_user(user, remember=True)

    return jsonify({"success": "successful login"}), 201

@auth.route("/logout", methods=['GET'])
@login_required
def logout():
    logout_user()
    return jsonify({"success -> user logged out": True}), 201

@auth.route("/is_authenticated", methods=['GET'])
@login_required
def is_authenticated():
    return jsonify(True), 200

