# KEY IMPORTS
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager

from nutravigil.models import db
from nutravigil.routes import routes 
from nutravigil.config import ApplicationConfig

app = Flask(__name__)
app.config.from_object(ApplicationConfig)
CORS(app)

login_manager = LoginManager(app)
db.init_app(app)
migrate = Migrate(app, db)
app.register_blueprint(routes)