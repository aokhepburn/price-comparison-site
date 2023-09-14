import React, {useState, useEffect} from "react";
import {Link, useOutletContext} from 'react-router-dom';
import DisplayProduct from '../Pieces/DisplayProduct'


// Displays all of the products that are searched //

export default function Products({ products, setCurrentUser, handleAddToWishlist}){

useEffect(() => {
    fetch('/check_session')
    .then(response => {
        if(response.ok) {
        response.json()
        .then(user => setCurrentUser(user))
        }
    })
    }, [])

    console.log("Hi from products")
    return (
            <div className="products-display-card">
            {products.map((product) => (
                <DisplayProduct
                    key={product.id}
                    product={product}
                    handleAddToWishlist={handleAddToWishlist}
                    />

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
