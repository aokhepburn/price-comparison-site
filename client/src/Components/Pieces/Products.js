import React, {useState, useEffect} from "react";
import {Link, useOutletContext} from 'react-router-dom';
import DisplayProduct from './DisplayProduct'


// Displays all of the products that are searched //

export default function DisplayProducts({ products}){
    // console.log(products)
    //the filtered products will render like this below, I am passing down the props to the productcard 
    return (
            <div className="products-display-card">
            {products.map((product) => (
                <DisplayProduct>
                    key={product.id}
                    product={product}
                    image={product.image}
                    title={product.title}
                    brand={product.brand}
                    description={product.description}
                    {/* handleAddToWishlist={handleAddToWishlist}
                    handleFeaturedProduct={handleFeaturedProduct} */}
                    {/* productsData={productsData} */}
                </DisplayProduct>
                ))}
                <p>display products page</p>
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
