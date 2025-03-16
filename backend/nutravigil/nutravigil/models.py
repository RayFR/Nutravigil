from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from flask_login import UserMixin

import bcrypt


db = SQLAlchemy()

# CREATE A UUID 
def get_uuid():
    return uuid4.hex

class User(UserMixin, db.Model):
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    username =  db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(300), nullable=False)
    password = db.Column(db.Text)

    def get_id(self):
        return str(self.id)
    
    def set_password(self, password):
        self.password = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode(
            "utf-8"
        )

    def check_password(self, password):
        hashed_password = self.password.encode("utf-8")
        return bcrypt.checkpw(password.encode(), hashed_password)