from flask import Flask, make_response, jsonify, request, session
import requests
from flask_migrate import Migrate
from models import db, Item, User, Wishlist
import os
import requests
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = os.getenv('SECRET_KEY')
app.json.compact = False

migrate = Migrate(app, db)
bcrypt=Bcrypt(app)
db.init_app(app)

#function for retrieving ebay api data
def get_data_from_ebay_api(userInput):
    print("WHERE AM IIIIIII", userInput)
    rapidapi_key_ebay = os.getenv('EBAY_RAPIDAPI_KEY')
    url = f"https://ebay-search-result.p.rapidapi.com/search/{userInput.replace(' ', '%20')}"

    headers = {
        "X-RapidAPI-Key": rapidapi_key_ebay,  # Use the API key variable
        "X-RapidAPI-Host": "ebay-search-result.p.rapidapi.com"
    }

    ebay_response = requests.get(url, headers=headers)

    if ebay_response.status_code == 200:
        ebay_data = ebay_response.json()
        return ebay_data
    else:
        raise Exception("eBay api request failed")

#function for retrieving poshmark api data
def get_data_from_poshmark_api(userInput):
    rapidapi_key_poshmark = os.getenv('POSHMARK_RAPIDAPI_KEY')

    url = "https://poshmark.p.rapidapi.com/search"
    querystring = { "query":userInput,"domain":"com"}
    headers = {
        "Accept-Encoding": "gzip, deflate",
        "X-RapidAPI-Key": rapidapi_key_poshmark,
        "X-RapidAPI-Host": "poshmark.p.rapidapi.com"
    }
    poshmark_response = requests.get(url, headers=headers, params=querystring)
    if poshmark_response.status_code == 200:
        poshmarkData = poshmark_response.json()
        return poshmarkData
    else:
        raise Exception("Poshmark api request failed")


@app.route('/')
def index():
    return "Hello"

#route for searching through full databases
#Question for group: 
#       are we wanting to assign these searches to an individual user?
@app.post('/search')
def search():
    Item.query.delete()

    post_data = request.get_json()
    ebay_data = get_data_from_ebay_api(post_data["query"])
    poshmark_data = get_data_from_poshmark_api(post_data["query"])

    items = []

# {"query": data}

    try:

        for item in poshmark_data["data"]:
            poshmarkItem = Item(
                title=item["title"],
                brand=item["brand"],
                description=item["description"],
                size=item["inventory"]["size_quantities"][0]["size_obj"]["display_with_size_system"],
                price=item["price_amount"]["val"],
                image=item["picture_url"]
            )
            items.append(poshmarkItem)

        for item in ebay_data["results"]:
            ebayItem = Item(
                title=item["title"],
                price = item["price"],
                image=item["image"],
                url=item["url"]
                )
            items.append(ebayItem)

        db.session.add_all(items)
        db.session.commit()

        return make_response(jsonify([item.to_dict() for item in items]), 201) 
    except:
        return {"error":'dinnae work'}  
    
# AUTHENTICATION ROUTES
#user signup route
# tested in backend development
@app.post('/users')
def create_user():
    data = request.json
    password_hash = bcrypt.generate_password_hash(data["password"]).decode("utf-8")

    new_user = User(
        username=data["username"],
        email=data["email"],
        password_hash=password_hash
        )
    
    db.session.add(new_user)
    db.session.commit()
    session["user_id"] = new_user.id

    return new_user.to_dict(), 201

#user login route
# tested in backend development
@app.post('/login')
def login():
    data = request.json
    user = User.query.filter(User.username == data['username']).first()

    if user and bcrypt.check_password_hash(user.password_hash, data['password']):
        session['user_id']=user.id

        #is return needed if we are setting the session
        return user.to_dict(), 200
    
    else:
        return {"error" : "Invalid username or password"}, 401

@app.get('/check_session')
def check_session():
    CHECK_USER_ID_MATCH = User.id == session.get('user_id')
    user = User.query.filter(CHECK_USER_ID_MATCH).first()
    if user:
        return user.to_dict(), 200
    else:
        return {"message": "No user logged in"}, 401

#user logout
# tested in backend development
@app.delete('/logout')
def logout():
    session.pop('user_id')
    return {"message": "Logged out"}, 200

#WISHLIST ROUTES

# #accessing user's wishlist
# @app.get("/wishlist")
# def get_wishlist():
#     user = User.query.filter(User.id == session['user_id']).first()
#     if not user:
#         return { "error": "You don't have access to this page" }, 401
#     wishlist_items = user.wishlist_items

#     wishlist_data = []
#     #change to to_dict
#     for item in wishlist_items:
#         wishlist_data.append({
#             "id": item.id,
#             "title": item.title,
#             "brand": item.brand,
#             "price": item.price,
#             "image": item.image,
#             "url": item.url,
#             "description": item.description
#         })

#     return jsonify(wishlist_data)

       #     wishlist_data = []
#     #change to to_dict
#     for item in wishlist_items:
#         wishlist_data.append({
#             "id": item.id,
#             "title": item.title,
#             "brand": item.brand,
#             "price": item.price,
#             "image": item.image,
#             "url": item.url,
#             "description": item.description
#         })

#     return jsonify(wishlist_data)

# @app.post("/wishlist")
# def add_wishlist():
#     #for actual set front end
#     # post_data = request.json

# #accessing user's wishlist
@app.get("/wishlist")
def get_wishlist():
    user = User.query.filter(User.id == session['user_id']).first()
    if not user:
        return { "error": "You don't have access to this page" }, 401
    wishlist_items = user.wishlist_items
    wishlist_data = []
#     #change to to_dict
#     for item in wishlist_items:
#         wishlist_data.append({
#             "id": item.id,
#             "title": item.title,
#             "brand": item.brand,
#             "price": item.price,
#             "image": item.image,
#             "url": item.url,
#             "description": item.description
#         })

#     return jsonify(wishlist_data)

# @app.post("/wishlist")
# def add_wishlist():
#     #for actual set front end
#     # post_data = request.json
#     # new_wishlist = Wishlist(user_id=session['user_id'])
    
#     #for testing back end
#     post_data = request.get_json()
#     new_wishlist = Wishlist(user_id=post_data["user_id"])
#     db.session.add(new_wishlist)
#     db.session.commit()
#     return make_response(jsonify(Wishlist.to_dict()), 201)

 # @app.post("/wishlist")
# # def add_to_wishlist():
# #     item_data = request.json
# #     user = User.query.filter(User.id == session['user_id']).first()
# #     if not user:
# #         return { "error": "You don't have access to this page" }, 401
    
# #     item = Item.query.get(item_data["id"])
# #     #if above doesn't work replace with Item.query.filter(Item.id == item_data["id"]).first()
    # if not item:
    #     return {"error" : "Item not found"}, 401

    # if Wishlist.query.filter(Wishlist.user_id==user.id, Wishlist.item_id==item.id).first():
    #         return {"error": "Item already in your wishlist"}, 401
    # else:
    #     new_wishlist_item = Wishlist(user_id=user.id, item_id=item.id)
    #     db.session.add(new_wishlist_item)
    #     db.session.commit()
    #     return Wishlist.to_dict(), 201

# #     if Item_Wishlist_Association.query.filter(Item_Wishlist_Association.user_id==user.id, Wishlist.item_id==item.id).first():
# #         return {"error": "Item already in your wishlist"}, 401
# #     else:
# #         new_wishlist_item = Wishlist(user_id=user.id, item_id=item.id)
# #         db.session.add(new_wishlist_item)
# #         db.session.commit()
# #         return Wishlist.to_dict(), 201

if __name__ == '__main__':
    app.run(port=5555, debug=True)