import React from "react";

export default function FeaturedProduct ({featuredProduct, handleAddToWishlist}) {

    return ( 
        <div>
            <div className="featured-product">
                <h1>{featuredProduct.title}</h1>
                <img src={featuredProduct.image} alt={featuredProduct.title} />
                <h2>{featuredProduct.brand}</h2>
                <h3>{featuredProduct.description }</h3>
                <h4>${featuredProduct.price}.00</h4>
                <button onClick={() => handleAddToWishlist(featuredProduct)}>Add to wishlist</button>
            </div>
        </div>
    );
}