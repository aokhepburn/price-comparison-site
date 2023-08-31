import React from "react";
import DisplayFeaturedProduct from "./DisplayFeaturedProduct";

export default function FeaturedProduct ({featuredProduct, handleAddToWishlist}) {

    return ( 
        <div>
            {

            }
            <DisplayFeaturedProduct>
            <div className="featured-product">
                key={featuredProduct.id}
                image={featuredProduct.imageSrc}
                brand={featuredProduct.brand}
                name={featuredProduct.name}
                handleAddToWishlist={handleAddToWishlist}
                featuredProduct={featuredProduct}
            </div>
            <p>featured products page</p>
            </DisplayFeaturedProduct>
        </div>
    );
}