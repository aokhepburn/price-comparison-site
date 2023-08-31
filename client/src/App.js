import React, {useEffect, useState} from "react";
import {Outlet, Link} from 'react-router-dom'
import Navbar from './Components/Static/Navbar';
import CreateAccountPage from './Routes/CreateAccountPage';
import { Routes, Route } from 'react-router-dom';
import DisplayProducts from "./Components/Pieces/DisplayProducts";
import DisplayWishlistProducts from "./Components/Pieces/DisplayWishlistProducts";

// The main app page, pareant. landing page, idk // 

export default function App () {

    const [currentUser, setCurrentUser] = useState(null)
    const [searchInput, setSearchInput] = useState("")
    const [products, setProductsList] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState (products[0])

//PRODUCT SEARCH
    function handleSearch(userentry){
        setSearchInput(userentry)}
        fetch('/items', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(userentry)
        }) 
        .then(response => response.json())
        .then(data => setProductsList(data))};

    function handleFeaturedProduct(clickedProduct) {
        setFeaturedProduct(clickedProduct)
    }



//WISHLIST 
    function handleAddToWishlist(productToAdd) {
        fetch ("/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(productToAdd),
        });

        setWishlist([...wishlist, productToAdd])}


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
 
    return ( 
        <div>
            <Navbar searchInput={searchInput} handleSearch={handleSearch}/> 
            <DisplayProducts searchInput={searchInput} products={products} handleAddToWishlist={handleAddToWishlist} handleFeaturedProduct= {handleFeaturedProduct}/> 
            <FeaturedProduct featuredProduct={featuredProduct} handleAddToWishlist={handleAddToWishlist}/>
            <CreateAccountPage createAccount={createAccount}/> 
            <LoginPage attemptLogin={attemptLogin} /> 
            <DisplayWishlistProducts setWishlist={setWishlist} wishlist={wishlist} />
        </div>
        
        
        );
};




   // useEffect(() => {
    //     fetch('http://localhost:3000/clothingItems')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    // }, [])