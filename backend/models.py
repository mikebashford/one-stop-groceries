from config import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), unique=False, nullable=False)
    last_name = db.Column(db.String(40), unique=False, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    role = db.Column(db.String(80), unique=False, nullable=False)
      
    def to_json(self):
        return{
          "id": self.id,
          "firstName": self.first_name,
          "lastName": self.last_name,
          "email": self.email,
          "password": self.password,
          "role": self.role,
        }      