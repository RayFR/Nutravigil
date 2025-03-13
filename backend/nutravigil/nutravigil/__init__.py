# KEY IMPORTS
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from nutravigil.models import db
from nutravigil.routes import routes 
from nutravigil.config import ApplicationConfig

app = Flask(__name__)
app.config.from_object(ApplicationConfig)
CORS(app)

db.init_app(app)