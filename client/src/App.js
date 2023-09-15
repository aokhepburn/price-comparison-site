import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Header from "./Components/Static/Header";
import Welcome from "./Components/Routes/Welcome";
import Products from "./Components/Routes/Products";
import CreateAccountPage from './Components/Routes/CreateAccountPage';
import LoginPage from "./Components/Routes/LoginPage";
import UserDetails from "./Components/Pieces/UserDetails";
import WishlistProducts from "./Components/Routes/WishlistProducts";

import { Outlet, Link } from 'react-router-dom'
import Navbar from './Components/Static/Navbar';
import DisplayProduct from "./Components/Pieces/DisplayProduct";
import DisplayWishlistProducts from "./Components/Routes/WishlistProducts";
import FeaturedProduct from "./Components/Pieces/FeaturedProduct";


// The main app page, pareant. landing page, idk //

function App() {

    const [currentUser, setCurrentUser] = useState(null)
    const [products, setProductsList] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])


    //check_session 
    useEffect(() => {
        fetch('/check_session')
        .then(response => {
            if(response.ok) {
            response.json()
            .then(user => setCurrentUser(user))
            }
        })
        }, [])

    //create account function
    function createAccount(userInfo) {
        console.log(userInfo)
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => setCurrentUser(data))
    };


    function logout() {
        fetch('/logout', {method: 'DELETE'})
        .then(response => {if (response.ok) {setCurrentUser(null)}})
        console.log("logout")
    }  

    //FEATURED PRODUCT 
    function handleFeaturedProduct(clickedProduct) {
        setFeaturedProduct(clickedProduct)
    }

    //WISHLIST 
    function handleAddToWishlist(productToAdd) {
        fetch ("/add_to_wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify({"item_id": productToAdd}),
        })
        .then(res=>res.json())
        .then(data=> setWishlist(data));
    
        // setWishlist = ([...wishlist, data])
        console.log(wishlist)

    }

    return (
        <Router>
            <div className="Header">
                <Header setProductsList={setProductsList} currentUser={currentUser} logout={logout}/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Welcome />
                        </Route>
                        <Route path="/products" >
                            <Products products={products} setCurrentUser={setCurrentUser} handleAddToWishlist={handleAddToWishlist}/>
                        </Route>
                        <Route path="/signup">
                            <CreateAccountPage createAccount={createAccount} />
                        </Route>
                        <Route path="/login">
                            <LoginPage setCurrentUser={setCurrentUser} currentUser={currentUser} />
                        </Route>
                        <Route path="/wishlist">
                            <WishlistProducts setCurrentUser={setCurrentUser} wishlist={wishlist} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}


export default App;
