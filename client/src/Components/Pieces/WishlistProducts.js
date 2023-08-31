<<<<<<< HEAD
import React, { useState } from 'react';
import WishlistProduct from './WishlistProduct';
import './WishlistProduct.css';

function WishlistProducts({ wishlistProducts }) {
    const [searchText, setSearchText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(wishlistProducts);

    const handleSearch = () => {
        const filtered = wishlistProducts.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="wishlist-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for Wishlist Products..."
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search in Wishlist
                </button>
            </div>
            <table className="wishlist-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>  </th>
                        
                    </tr>
                    {filteredProducts.map(wishlistProduct => (
                        <WishlistProduct
                            key={wishlistProduct.id}
                            wishlistProduct={wishlistProduct}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WishlistProducts;
=======
import React from "react";

export default function WishlistProducts({ wishlist, setWishlist }) {

    const filteredWishlist = wishlist.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.size.toLowerCase().includes(searchInput.toLowerCase())
        )
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
    )
}
>>>>>>> main
