from flask import Flask, render_template, make_response, jsonify
import requests
import pandas as pd
from flask_migrate import Migrate
from models import db, Item
from dotenv import load_dotenv 
import os

load_dotenv()

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def index():
    return "Hello"

@app.route('/search/<search_query>')
def search(search_query):
    rapidapi_key = os.getenv('EBAY_RAPIDAPI_KEY')  # Get the API key from environment variables

    url = f"https://ebay-search-result.p.rapidapi.com/search/{search_query.replace(' ', '%20')}"

    headers = {
        "X-RapidAPI-Key": rapidapi_key,  # Use the API key variable
        "X-RapidAPI-Host": "ebay-search-result.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        results = data.get('results', [])
        added_items = []
        # items_data = []
        for item in results:
            # print(item)
            title = item.get('title', '')
            price = item.get('price', '')
            image = item.get('image', '')
            url = item.get('url', '')
            item = Item(title=title, price = price, image = image, url= url)
            
            try:
                # instance = Item.query.filter(Item.url == url).first()
                
                # if instance is None:
                    # print(item.to_dict())
                db.session.add(item)
                db.session.commit()
                added_items.append(item)
            except Exception as e:
                db.session.rollback()
                print (e)
                print('duplicate')


        return make_response(jsonify([i.to_dict() for i in added_items]), 200)

    else:
        return "API request failed: " + str(response.status_code)

if __name__ == '__main__':
    app.run(debug=True)
