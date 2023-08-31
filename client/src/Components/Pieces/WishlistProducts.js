import React from "react";

export default function WishlistProducts({wishlist, setWishlist}){
    
const filteredWishlist = wishlist.filter((product) => {  
    // return (
    //     product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.size.toLowerCase().includes(searchInput.toLowerCase())
    // )
})

return (
        <div className="wishlist-products-display">
        {filteredWishlist.map((product) => {
            return (
                <div>
                    key={product.id}
                    product={product}
                    image={product.imageSrc}
                    brand={product.brand}
                    name={product.name}
                </div>
            )
        }
            )}
        </div>
    )}
