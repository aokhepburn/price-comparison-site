
import React from 'react';
import './Wishlist.css';
import WishlistProducts from '../Pieces/WishlistProducts';

function Wishlist() {

    const wishlistProducts = [
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
        {
            id: 6,
            name: 'Classic Leather',
            brand: 'Adidas',
            price: 75,
            imageSrc: 'https://via.placeholder.com/150',
            imageLink: 'https://via.placeholder.com/150'
        },
        {
            id: 7,
            name: 'Eco-Friendly',
            brand: 'Patagonia',
            price: 100,
            imageSrc: 'https://via.placeholder.com/150',
            imageLink: 'https://via.placeholder.com/150'
        },
        {
            id: 8,
            name: 'Business Class',
            brand: 'Louis Vuitton',
            price: 300,
            imageSrc: 'https://via.placeholder.com/150',
            imageLink: 'https://via.placeholder.com/150'
        },
        {
            id: 9,
            name: 'Weekender',
            brand: 'Gucci',
            price: 250,
            imageSrc: 'https://via.placeholder.com/150',
            imageLink: 'https://via.placeholder.com/150'
        },
        {
            id: 10,
            name: 'Outdoor Pro',
            brand: 'North Face',
            price: 90,
            imageSrc: 'https://via.placeholder.com/150',
            imageLink: 'https://via.placeholder.com/150'
        }

    ];


    return (
        <div>
            <h2 className="wishlist-title">Your Wishlist</h2>
            <WishlistProducts wishlistProducts={wishlistProducts} />
        </div>
    );
}

export default Wishlist;
