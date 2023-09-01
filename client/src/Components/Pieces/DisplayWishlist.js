import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

// this is the individal card that the product will be displayed in 

export default function DisplayWishlist ({ product, wishlist}) {
    
    console.log("product")

    return (
        <div className="product-item">
            <h1>{wishlist?.title}</h1>
            <p>{wishlist?.brand}</p>
                <div className="image">
                    <img src={wishlist?.image} />
                </div>
                <div className="details">
                    {/* <p>{product?.description}</p>
                    <p>${product?.price}.00</p> */}
                    {/* <button onClick={(e) => handleClick(e)}>Add to wishlist</button>  */}
                </div> 
        </div>
    )
}