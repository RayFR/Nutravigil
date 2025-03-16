from flask import Blueprint, jsonify, request
from nutravigil.models import db

auth = Blueprint("auth", __name__)

@auth.route("/get_user/<int:id>", methods['GET'])
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
    pass

@auth.route("/login", methods=['POST'])
def login():
    pass

@auth.route("/logout", methods=['GET'])
@login_required
def logout():
    logout_user()
    return jsonify({"success -> user logged out": True}), 201

