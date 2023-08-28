from models import db, Item
import json
from app import app

import requests

# ▼▼▼▼ to open a static db
# with open("nike-air-max-poshmark-test.json") as f:
    # data: dict = json.load(f)

url = "https://poshmark.p.rapidapi.com/search"

userInput = ""

querystring = {"query":"puma sneakers","domain":"com"}

headers = {
	"Accept-Encoding": "gzip, deflate",
	"X-RapidAPI-Key": "wheeeeee",
	"X-RapidAPI-Host": "poshmark.p.rapidapi.com"
}

poshmark_response = requests.get(url, headers=headers, params=querystring)
#print(response.json.stringify())
data = poshmark_response.json()

def create_items():
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
    return items

items = create_items()

print(items[0].brand)

with app.app_context():
    db.session.add_all(items)
    db.session.commit()
