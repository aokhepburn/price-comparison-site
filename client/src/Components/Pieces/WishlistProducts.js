import React from "react";
import {useOutletContext} from 'react-router-dom';

export default function WishlistProducts({}){
    const [handleAddToWishlist, handleFeaturedProduct, wishlist] = useOutletContext()

    console.log(wishlist)
    
// const filteredWishlist = wishlist.filter((product) => {  
    // return (
    //     product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.size.toLowerCase().includes(searchInput.toLowerCase())
    // )
// })

    return (
        <div className="wishlist-products-display">
        {wishlist.map((product) => {
            return (
                <div key={product.id}>
                    <img src={product.imageSrc} alt={product.name} />
                    <p>{product.brand}</p>
                    <p>{product.name}</p>
                </div>
            )
        })}
        </div>
    )
}
