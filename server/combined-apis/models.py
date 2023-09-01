from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
#from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)
db = SQLAlchemy(metadata=metadata)

class User(db.Model):
    __tablename__ = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    
    wishlists = db.relationship("Wishlist", back_populates="user")

    def to_dict(self):
        return {"user_id": self.id, "username":self.username}

class Wishlist(db.Model):
    __tablename__ = "wishlist_table"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    
    user = db.relationship("User", back_populates="wishlists")
    
    wishlist_for_items = db.relationship("Item_Wishlist_Association", back_populates="wishlist_object")

    def to_dict(self):
        return {"user_id":self.user_id, "items":self.wishlist_for_items}

class Item_Wishlist_Association(db.Model):
    __tablename__ = "item_wishlist_association"
    id = db.Column(db.Integer, primary_key = True)
    item_id = db.Column(db.Integer, db.ForeignKey("item.id"))
    wishlist_id = db.Column("wishlist_id", db.Integer, db.ForeignKey("wishlist_table.id"))

    wishlist_object = db.relationship("Wishlist", back_populates="wishlist_for_items")
    item_object = db.relationship("Item", back_populates="items_in_wishlist")

    def to_dict (self):
        return {"item_id":self.item_id, "wishlist_id":self.wishlist_id}

class Item(db.Model):
    __tablename__ = 'item'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    price = db.Column(db.String, nullable=False)
    image = db.Column(db.String, unique = True)
    #for ebay only
    url = db.Column(db.String)
    #for poshmark only
    brand = db.Column(db.String)
    size = db.Column(db.String)
    description = db.Column(db.String)

    items_in_wishlist = db.relationship("Item_Wishlist_Association", back_populates="item_object")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "image": self.image,
            "url": self.url,
            "brand": self.brand,
            "size": self.size,
            "description": self.description,
        }