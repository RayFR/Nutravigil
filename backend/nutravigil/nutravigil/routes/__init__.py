from flask import Blueprint
from .auth import auth
from .foods import foods

routes = Blueprint("routes", __name__)

routes.register_blueprint(auth)
routes.register_blueprint(foods)
