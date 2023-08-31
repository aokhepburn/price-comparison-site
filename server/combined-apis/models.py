from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
import string


metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)
db = SQLAlchemy(metadata=metadata)


# db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    
    wishlists = db.relationship("Wishlist", back_populates="user")

    # def set_password(self, password):
    #     self.password_hash = generate_password_hash(password)

    # def check_password(self, password):
    #     return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {"user_id": self.id, "username":self.username}

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
    price = db.Column(db.String, nullable=False)
    image = db.Column(db.String, unique = True)
    #for ebay only
    url = db.Column(db.String)
    #for poshmark only
    brand = db.Column(db.String)
    size = db.Column(db.String)
    description = db.Column(db.String)

    wishlists = db.relationship("Wishlist", secondary=item_wishlist_association, back_populates="item")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'image': self.image,
            'url': self.url
        }








# class Item(db.Model):
#     __tablename__ = 'item_table'
    
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String, nullable=False)
#     price = db.Column(db.String)
#     image = db.Column(db.String, unique = True)
#     #for ebay only
#     url = db.Column(db.String)
#     #for poshmark only
#     brand = db.Column(db.String)
#     size = db.Column(db.String)
#     description = db.Column(db.String)

#     #an item wil belong to many wishlists
#     #wishlists = db.relationship("Wishlist", back_populates="item")

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'title': self.title,
#             'price': self.price,
#             'image': self.image,
#             'url': self.url
#         }
    

# class User(db.Model):
#     __tablename__ = 'user_table'
    
#     id = db.Column(db.Integer, primary_key=True); print(f"HELP: {id}")
#     username = db.Column(db.String(50), unique=True, nullable=False)
#     email = db.Column(db.String(100), unique=True, nullable=False)
#     password_hash = db.Column(db.String(128), nullable=False)
    
#     #wishlists = db.relationship("Wishlist", back_populates="user")

#     # def set_password(self, password):
#     #     self.password_hash = generate_password_hash(password)

#     # def check_password(self, password):
#     #     return check_password_hash(self.password_hash, password)

#     def __repr__(self):
#         return f"<User {self.username}>"
#     def to_dict(self):
#         return {"id":self.id, "username":self.username, "email":self.email}

# # class Wishlist(db.Model):
# #     __tablename__ = "wishlist_table"
# #     id = db.Column(db.Integer, primary_key=True)
# #     user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    
# #     #must have multiple items
# #     #items = db.Relationship(something)
# # #need to add an association table with tracks wishlist and items

# # class WishlistItemRelationship(db.Model):
# #     __tablename__="wishlist_item_relationship"
# #     id = db.Column(db.Integer, primary_key=True)
# #     wishlist_id = db.Column(db.Integer, db.ForeignKey("wishlist_table.id"))
# #     item_id = item_id = db.Column(db.Integer, db.ForeignKey("item_table.id"))



