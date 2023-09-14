import React, {useState, useEffect} from "react";
import {Link, useOutletContext} from 'react-router-dom';
import DisplayProduct from '../Pieces/DisplayProduct'
import loadingGif from '../assets/loadinggif.gif';


// Displays all of the products that are searched //

export default function Products({ products, setCurrentUser, handleAddToWishlist}){

useEffect(() => {
    fetch('/check_session')
    .then(response => {
        if(response.ok) {
        response.json()
        .then(user => setCurrentUser(user))
        }
    })
    }, [])

    console.log("Hi from products")
    return (
            <div className="products-display-card">
            {products.map((product) => (
                <DisplayProduct
                    key={product.id}
                    product={product}
                    handleAddToWishlist={handleAddToWishlist}
                    />
                ))}
                <img src={loadingGif} />
            </div>
            )

            }
