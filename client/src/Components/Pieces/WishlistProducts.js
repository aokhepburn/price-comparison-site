import React, { useState } from "react";  
import './WishlistProducts.css';

export default function WishlistProducts({ wishlist, setWishlist }) {
    const [searchText, setSearchText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState();  

    const handleSearch = () => {
        const filtered = wishlist.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

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
                    {filteredProducts.map(product => (
                        <tr key={product.id} className="wishlist-product-row"> 
                            <td className=".wishlist-item">  
                                <span>{product.name}</span>
                            </td>
                            <td className="wishlist-item">  
                                <span>{product.brand}</span>
                            </td>
                            <td className="wishlist-item">
                                <img
                                    className="wishlist-product-image"
                                    src={product.imageSrc}
                                    alt={product.name}
                                />
                            </td>
                            <td className="wishlist-item">
                                <span>${product.price}</span>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
