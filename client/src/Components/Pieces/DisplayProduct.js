import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

// this is the individal card that the product will be displayed in 

export default function DisplayProducts ({key, product, image, name, brand, price, description, handleAddToWishlist, handleFeaturedProduct}) {

    function handleClick (e) {
        // console.log(handleAddToWishlist)
        console.log(product.name)
        handleAddToWishlist(product)
    }

    console.log(handleAddToWishlist)

    return (
        <div>
            <li className="product-card">
                <p>{name}</p>
                <p>{brand}</p>
                <p>{description}</p>
                <div className="image">
                <Link to='/featuredproduct'> 
                        <img 
                        onClick={() => handleFeaturedProduct(product)} // when you click on the image, it will take you to '/featuredproduct' => will only display the product you clicked 
                        src={product.image} alt={product.name} />
                    </Link> */
                </div>
                <div className="details">
                    {/* <p>{product.price}</p> */}
                    {/* <p>{product.brand}</p> */}
                    {/* <span>{product.description}</span> */}
                    <button onClick={(e) => handleClick(e)}>Add to wishlist</button> 
                </div> 
            </li>
        </div>
    )
}