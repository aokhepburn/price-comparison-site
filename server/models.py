from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)


#ALICE'S INTITAL TABLES

#an item can belong to many wishlists
class Item(db.Model):
    __tablename__="item_table"
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
        #data[0]title
    brand = db.Column(db.String)
        #data[0]["brand"]
    description = db.Column(db.String)
        #data[0]description
    size = db.Column(db.String)
        #data[0]inventory.size_quantities[0]display_with_size_system
    price = db.Column(db.Float)
        #data[0]price_amount.val
    image = db.Column(db.String)
        #data[0]picture_url

#a wishlist can have many items but will belong to only ONE user
class Wishlist(db.Model):
    __tablename__="wishlist_table"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey())
    item_id = db.Column(db.Integer, db.ForeignKey("item_table.id"))

    items = db.relationship()

#a user can have many wishlists
class User(db.Model):
    __tablename__="user_table"
    id = db.Column(db.Integer, primary_key = True)
    password = db.Column(db.Integer)
    username = db.Column(db.String, nullable = False, unique = True)
