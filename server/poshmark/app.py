from models import db, Item
#from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
import os
import requests
from dotenv import load_dotenv 


load_dotenv()

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

# userInput = input("Enter search query:")

#function for retrieving poshmark api data
def get_data_from_poshmark_api(userInput):
    rapidapi_key = os.getenv('POSHMARK_RAPIDAPI_KEY')

    url = "https://poshmark.p.rapidapi.com/search"
    querystring = { "query":userInput,"domain":"com"}
    headers = {
        "Accept-Encoding": "gzip, deflate",
        "X-RapidAPI-Key": rapidapi_key,
        "X-RapidAPI-Host": "poshmark.p.rapidapi.com"
    }
    poshmark_response = requests.get(url, headers=headers, params=querystring)
    data = poshmark_response.json()
    return data

@app.route('/')
def home():
    return "This is the home page"

#post request to intialize new search posts
@app.post('/items')
def post_new_search_querys():
    post_data = request.get_json()
    data = get_data_from_poshmark_api(post_data['query'])
    items = []
    for el in data["data"]:
        item = Item(
            title=el["title"],
            brand=el["brand"],
            description=el["description"],
            size=el["inventory"]["size_quantities"][0]["size_obj"]["display_with_size_system"],
            price=el["price_amount"]["val"],
            image=el["picture_url"],
        )
        items.append(item)
    db.session.add_all(items)
    db.session.commit()
    return "items posted successfully"

#when a user creates a new wishlist, a new wishlist will be created with the first item
# @app.post('/wishlists')
# def create_new_wishlist():
#     pass


if __name__ == '__main__':
    app.run(port=5555, debug=True)
