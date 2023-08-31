import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

// this is the individal card that the product will be displayed in 

export default function DisplayProducts ({key, product, image, title, brand, price, description, handleAddToWishlist, handleFeaturedProduct}) {
    return (
        <div>
            <li className="product-card">
                <div className="image">
                    <strong>{title}</strong>
                    <Link to='/featuredproduct'> 
                        <img 
                        onClick={() => handleFeaturedProduct(product)} // when you click on the image, it will take you to '/featuredproduct' => will only display the product you clicked 
                        src={image} alt={title} />
                    </Link>
                </div>
                <div className="details">
                    <p>{price}</p>
                    <p>{brand}</p>
                    <span>{description}</span>
                    <button onClick={() => handleAddToWishlist(product)}>Add to wishlist</button> 
                </div> 
            </li>
        </div>
    )
}