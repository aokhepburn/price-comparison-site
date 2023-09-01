import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from 'react-router-dom';
import DisplayProduct from './DisplayProduct'
import "./CSS/Products.css"


// Displays all of the products that are searched //

export default function Products({ products, handleAddToWishlist }) {
    // console.log(products)
    //the filtered products will render like this below, I am passing down the props to the productcard 
    console.log(products)
    return (
        <div className="products-display-card">
            {products.map((product) => (
                <DisplayProduct
                    key={product.id}
                    product={product}
                    handleAddToWishlist={handleAddToWishlist}
                    style={{ marginBottom: '20px' }} // Add spacing between rows
                />

            ))}
        </div>
    )

}

    //                 filtering through the database in backend 



    //                 const filteredProducts = productsData.filter(product => {
    // return (
    //     product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.size.toLowerCase().includes(searchInput.toLowerCase())
    // )});
