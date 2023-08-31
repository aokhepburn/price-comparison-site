import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

// this is the individal card that the product will be displayed in 

export default function DisplayFeaturedProduct ({key, featuredProduct, image, name, brand, price, description, handleAddToWishlist, handleFeaturedProduct}) {
    return (
        <div>
            <li className="product-card">
                <p>{name}</p>
                <p>{brand}</p>
                <p>{description}</p>
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="details">
                    {/* <p>{product.price}</p> */}
                    {/* <p>{product.brand}</p> */}
                    {/* <span>{product.description}</span> */}
                    <button onClick={() => handleAddToWishlist(featuredProduct)}>Add to wishlist</button> 
                </div> 
            </li>
        </div>
    )
}
