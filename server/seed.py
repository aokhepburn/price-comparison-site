from models import db, Item
import json
from app import app

with open("nike-air-max-poshmark-test.json") as f:
    data: dict = json.load(f)


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
