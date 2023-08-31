import React, {useState, useEffect} from "react";
import {Link, useOutletContext} from 'react-router-dom';
import DisplayProduct from './DisplayProduct'


// Displays all of the products that are searched //

export default function DisplayProducts(){
    const [handleAddToWishlist, handleFeaturedProduct, wishlist, searchInput, products] = useOutletContext()
    
    // console.log (wishlist)
    // console.log (handleAddToWishlist)

    const productsData = [
        {
            id: 2,
            name: 'Alpha Bag',
            brand: 'Samsonite',
            price: 45,
            imageSrc: 'https://images.unsplash.com/photo-1556742212-5b321f3c261b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400',
            imageLink: 'https://images.unsplash.com/photo-1556742212-5b321f3c261b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
            id: 3,
            name: 'Traveler',
            brand: 'Away',
            price: 120,
            imageSrc: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400',
            imageLink: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
            id: 4,
            name: 'EcoPack',
            brand: 'Fjallraven',
            price: 80,
            imageSrc: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400',
            imageLink: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
            id: 5,
            name: 'Urban Explorer',
            brand: 'Nike',
            price: 60,
            imageSrc: 'https://via.placeholder.com/150',
            imageLink: 'https://via.placeholder.com/150'
        },
    ]

    // console.log(productsData)

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
                    handleAddToWishlist={handleAddToWishlist}
                    handleFeaturedProduct={handleFeaturedProduct}
                    productsData={productsData}
                </DisplayProduct>
                ))}

                {/* {filteredProducts.map(product => { 
                    return (<DisplayProduct
                        key={product.id}
                        product={product}
                        image={product.imageSrc}
                        brand={product.brand}
                        name={product.name}
                        handleAddToWishlist={handleAddToWishlist}
                        handleFeaturedProduct={handleFeaturedProduct}
                        productsData={productsData}
                        // searchInput={searchInput}
                    />)
                })} */}
                <p>display products page</p>
            </div>
            )

            }

                    //filtering through the database in backend 



                    // const filteredProducts = productsData.filter(product => {  
    // return (
    //     product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     product.size.toLowerCase().includes(searchInput.toLowerCase())
    // )});
