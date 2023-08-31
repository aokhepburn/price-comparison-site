import React from "react";

export default function DisplayWishlistProducts({wishlist, setWishlist}){
    
    
const wishlist = products.filter((product) => {  
    return (
        product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.size.toLowerCase().includes(searchInput.toLowerCase())
        )})

return (
        <div className="wishlist-products-display">
        {wishlist.map((product) => {
            return (
                <div>
                    key={product.id}
                    product={product}
                    image={product.image}
                    title={product.title}
                    brand={product.brand}
                    description={product.description}
                    name={product.name}
                </div>
            )
        }
            )}
        </div>
    )}
