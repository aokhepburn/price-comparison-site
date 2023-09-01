import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

// this is the individal card that the product will be displayed in 

export default function DisplayProducts ({key, product, image, title, brand, description, handleAddToWishlist, handleFeaturedProduct}) {

    function handleClick (e) {
        handleAddToWishlist(product)
    }

    function handleClickedProduct (e) {
        handleFeaturedProduct(product)
        
    }

    return (
        <div className="product-item">
            <h1>{title}</h1>
            <img></img>
            <p>{description}</p>
                <div className="image">
                    <img src={image} />
                </div>
                <div className="details">
                    <p>{brand}</p>
                    <button onClick={(e) => handleClick(e)}>Add to wishlist</button> 
                </div> 
        </div>
    )
}