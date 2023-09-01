import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Header from "./Components/Static/Header";
import Welcome from "./Components/Routes/Welcome";
import Products from "./Components/Pieces/Products";
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Components/Static/Navbar';
import CreateAccountPage from './Components/Routes/CreateAccountPage';
import DisplayProduct from "./Components/Pieces/DisplayProduct";
import DisplayWishlistProducts from "./Components/Pieces/WishlistProducts";
import FeaturedProduct from "./Components/Pieces/FeaturedProduct";
import LoginPage from "./Components/Routes/LoginPage";
import WishlistProducts from "./Components/Pieces/WishlistProducts";

// The main app page, pareant. landing page, idk //

function App() {

    const [currentUser, setCurrentUser] = useState(null)
    // const [searchInput, setSearchInput] = useState("")
    const [products, setProductsList] = useState([])
    console.log("HERE'S MY SHIT:   ", products)
    const [wishlist, setWishlist] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])

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
        console.log("\n > useEffect triggering upon page (re)load.")
        fetch('/check_session')
            // .then(response => response.json())
            .then(user => setCurrentUser(user))
            .then(() => console.log("\n > useEffect completed."))
    }, []);

    function createAccount(userInfo) {
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

    function attemptLogin(userInfo) {
        fetch('/login', {
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
        fetch('/logout', { method: 'DELETE' })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                }
            })
    }
    return (
        <Router>
            <div className="Header">
                <Header setProductsList={setProductsList} />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Welcome />
                        </Route>
                        <Route path="/products" >
                            <Products products={products}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}


export default App;



    // console.log(wishlist)

    // const random = "constant"

    // return (
    //     <div>
    //         <Header setProductsList={setProductsList}/>

    //         <Outlet context={[ 
    //                         handleAddToWishlist,
    //                         handleFeaturedProduct,
    //                         wishlist,
    //                         products
    //                     ]}
    //                         // searchInput,  
    //                         // handleFeaturedProduct ]}
    //         />
    //         {/* <Navbar searchInput={searchInput} handleSearch={handleSearch}/>  */}
    //         {/* <Products products={products}/> */}
    //         {/* <Products searchInput={searchInput} products={products} handleAddToWishlist={handleAddToWishlist} handleFeaturedProduct= {handleFeaturedProduct}/>  */}
    //         {/* <FeaturedProduct featuredProduct={featuredProduct} handleAddToWishlist={handleAddToWishlist}/>
    //         <CreateAccountPage createAccount={createAccount}/> 
    //         <LoginPage attemptLogin={attemptLogin} /> 
    //         <WishlistProducts setWishlist={setWishlist} wishlist={wishlist} /> */}

    //     </div>


    // );

