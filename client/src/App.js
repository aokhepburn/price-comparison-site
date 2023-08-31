import React, {useEffect, useState} from "react";
import {Outlet, Link} from 'react-router-dom'
import Navbar from './Components/Static/Navbar';
import CreateAccountPage from './Routes/CreateAccountPage';
import { Routes, Route } from 'react-router-dom';
import DisplayProducts from "./Components/Pieces/DisplayProducts";
import DisplayWishlistProducts from "./Components/Pieces/WishlistProducts";
import Products from "./Components/Pieces/Products";
import FeaturedProduct from "./Components/Pieces/FeaturedProduct";


// The main app page, pareant. landing page, idk // 

export default function App () {

    const [currentUser, setCurrentUser] = useState(null)
    const [searchInput, setSearchInput] = useState("")
    const [products, setProductsList] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState ([])

//PRODUCT SEARCH
    function handleSearch(userentry){
        setSearchInput(userentry)

        fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({userentry})
        }) 
        .then(response => response.json())
        .then(data => setProductsList(data));
    }

// curl -X POST -H "Content-Type: application/json" -d '{ "query": "shirt"}' localhost:5555/search

//FEATURED PRODUCT 
    function handleFeaturedProduct(clickedProduct) {
        setFeaturedProduct(clickedProduct)
}

//WISHLIST 
    function handleAddToWishlist(productToAdd) {
        // fetch ("/wishlist", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/JSON",
        //     },
        //     body: JSON.stringify(productToAdd),
        // });

            setWishlist([...wishlist, productToAdd])
        }

//LOGING + SIGNUP 
    useEffect(() => {
        fetch('/check_session')
        .then(res => {
            res.json()
            .then(user => setCurrentUser(user))
        })
    }, [])

    function createAccount(userInfo){
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }) 
        .then(response => response.json())
        .then(data => setCurrentUser(data))};

    function attemptLogin(userInfo){
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }) 
        .then(response => response.json())
        .then(data => setCurrentUser(data))};

    function logout(){
        fetch('/logout', {method: 'DELETE'})
        .then(res => {
            if(res.ok){
                setCurrentUser(null)
            }
        })
    }
    console.log(handleAddToWishlist)

    return ( 
        <div>
            <Navbar searchInput={searchInput} handleSearch={handleSearch}/> 
            <Products searchInput={searchInput} products={products} handleAddToWishlist={handleAddToWishlist} handleFeaturedProduct= {handleFeaturedProduct}/> 
            <FeaturedProduct featuredProduct={featuredProduct} handleAddToWishlist={handleAddToWishlist}/>
            <CreateAccountPage createAccount={createAccount}/> 
            <LoginPage attemptLogin={attemptLogin} /> 
            <WishlistProducts setWishlist={setWishlist} wishlist={wishlist} />
        </div>
        
        
        );
    }
