import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import ProductListCard from './ProductListCard'

// Displays all of the products that are searched //

export default function DisplayProducts({searchInput, products, handleAddToWishlist, handleFeaturedProduct}){

//filtering through the database in backend 
    const filteredProducts = products.filter(product => {  
        return (
            product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.size.toLowerCase().includes(searchInput.toLowerCase())
        )});
    
    //the filtered products will render like this below, I am passing down the props to the productcard 
    return (
            <div className="products-display-card">
            {filteredProducts.map((product) => (
                <ProductListCard>
                    key={product.id}
                    product={product}
                    image={product.image}
                    title={product.title}
                    brand={product.brand}
                    description={product.description}
                    handleAddToWishlist={handleAddToWishlist}
                    handleFeaturedProduct={handleFeaturedProduct}
                </ProductListCard>
                ))}
                <p>display products page</p>
            </div>
            )}