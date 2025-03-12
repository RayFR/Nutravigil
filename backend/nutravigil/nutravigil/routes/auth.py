from flask import Blueprint, jsonify, request
from nutravigil.models import db

auth = Blueprint("auth", __name__)

@auth.route("/")
def home():
    return "FLASK APP WORKING"

