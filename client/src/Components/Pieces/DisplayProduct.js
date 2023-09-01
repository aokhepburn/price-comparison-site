import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

// this is the individal card that the product will be displayed in 

export default function DisplayProduct ({ product, handleAddToWishlist, handleFeaturedProduct}) {
    console.log(product)
    
    function handleClick (e) {
        handleAddToWishlist(product)
    }

    function handleClickedProduct (e) {
        handleFeaturedProduct(product)   
    }

    return (
        <div className="product-item">
            <h1>{product?.title}</h1>
            <p>{product?.brand}</p>
                <div className="image">
                    <img src={product?.image} />
                </div>
                <div className="details">
                    <p>{product?.description}</p>
                    <p>${product?.price}.00</p>
                    <button onClick={(e) => handleClick(e)}>Add to wishlist</button> 
                </div> 
        </div>
    )
}