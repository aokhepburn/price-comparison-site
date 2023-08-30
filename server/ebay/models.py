from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    
    wishlists = db.relationship("Wishlist", back_populates="user")

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"<User {self.username}>"

class Wishlist(db.Model):
    __tablename__ = "wishlist_table"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    item_id = db.Column(db.Integer, db.ForeignKey("item.id"))
    
    user = db.relationship("User", back_populates="wishlists")
    item = db.relationship("Item", back_populates="wishlists")


item_wishlist_association = db.Table(
    "item_wishlist_association",
    db.Column("item_id", db.Integer, db.ForeignKey("item.id")),
    db.Column("wishlist_id", db.Integer, db.ForeignKey("wishlist_table.id"))
)

class Item(db.Model):
    __tablename__ = 'item'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    price = db.Column(db.String)
    image = db.Column(db.String, unique=True)
    url = db.Column(db.String)

    wishlists = db.relationship("Wishlist", secondary=item_wishlist_association, back_populates="item")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'image': self.image,
            'url': self.url
        }
