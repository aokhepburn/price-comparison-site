from flask import Flask, request, redirect, url_for, flash, make_response, jsonify
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_bcrypt import Bcrypt
import requests
from flask_migrate import Migrate
from models import db, Item, User
from dotenv import load_dotenv 
import os

load_dotenv()

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SECRET_KEY"] = "your_secret_key"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"


# AUTHENTICATION ROUTES

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route("/")
def index():
    return "Auth routes"

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]

        hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

        new_user = User(username=username, email=email, password_hash=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        flash("Account created successfully. You can now log in.", "success")
        return redirect(url_for("login"))

    return """
    <form method="POST" action="/signup">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="email" name="email" placeholder="Email" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Sign Up</button>
    </form>
    """

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        user = User.query.filter_by(email=email).first()
        if user and user.check_password(password):  # Using the check_password method
            login_user(user)
            return redirect(url_for("index"))
        else:
            flash("Login failed. Check your credentials and try again.", "danger")

    return """
    <form method="POST" action="/login">
        <input type="email" name="email" placeholder="Email" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Log In</button>
    </form>
    """

@app.route("/logout")
@login_required
def logout():
    logout_user()
    flash("You have been logged out.", "info")
    return redirect(url_for("index"))

@app.route("/protected")
@login_required
def protected():
    return "This is a protected route."


@app.route('/search')
def hello():
    return "Hello"


@app.route("/wishlist")
@login_required
def wishlist():
    user = current_user
    wishlist_items = user.wishlist_items

    wishlist_data = []
    for item in wishlist_items:
        wishlist_data.append({
            "id": item.id,
            "title": item.title,
            "price": item.price,
            "image": item.image,
            "url": item.url
        })

    return jsonify(wishlist_data)


@app.post("/add_to_wishlist/<int:item_id>")
@login_required
def add_to_wishlist(item_id):
    user = current_user
    item = Item.query.get(item_id)

    if not item:
        flash("Item not found.", "danger")
        return redirect(url_for("index"))

    if Wishlist.query.filter_by(user_id=user.id, item_id=item.id).first():
        flash("Item is already in your wishlist.", "info")
    else:
        new_wishlist_item = Wishlist(user_id=user.id, item_id=item.id)
        db.session.add(new_wishlist_item)
        db.session.commit()
        flash("Item added to your wishlist.", "success")

    return redirect(url_for("index"))

@app.route('/search/<search_query>')
def search(search_query):
    rapidapi_key = os.getenv('EBAY_RAPIDAPI_KEY') 

    url = f"https://ebay-search-result.p.rapidapi.com/search/{search_query.replace(' ', '%20')}"

    headers = {
        "X-RapidAPI-Key": rapidapi_key,
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
                db.session.add(item)
                db.session.commit()
                added_items.append(item)
            except Exception as e:
                db.session.rollback()


        return make_response(jsonify([i.to_dict() for i in added_items]), 200)

    else:
        return "API request failed: " + str(response.status_code)

if __name__ == '__main__':
    app.run(debug=True)
