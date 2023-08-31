import React from 'react';
import './WishlistProducts.css';
import './WishlistProduct.css';


function WishlistProduct({ wishlistProduct }) {
    return (
        <tr className="wishlist-product-row">
            <td className=".wishlist-item">
            <span>{wishlistProduct.name}</span>
            </td>
            <td className=".wishlist-item">
            <span>{wishlistProduct.brand}</span>
            </td>
            
            <td className=".wishlist-item">
                
                    <img
                        className="wishlist-product-image"
                        src={wishlistProduct.imageSrc}
                        alt={wishlistProduct.name}
                    />



                
            </td>
            <td className=".wishlist-item">
            <span>${wishlistProduct.price}</span>
            </td>
            <td>
            <button>Delete</button>
            </td>
        </tr>
    );
}

export default WishlistProduct;


