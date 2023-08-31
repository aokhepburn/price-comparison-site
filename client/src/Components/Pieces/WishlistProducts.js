import React, { useState } from 'react';
import WishlistProduct from './WishlistProduct';
import './CSS/CreateAccountForm.css';

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