# KEY IMPORTS
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from nutravigil.models import db
from nutravigil.routes import routes 

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1144@localhost/nutravigil_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)