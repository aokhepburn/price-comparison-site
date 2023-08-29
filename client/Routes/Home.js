import React from "react";
import {Outlet, Link} from 'react-router-dom'
import styled from 'styled-components';
// import Navbar from '../Components/Navbar';
import App from '../Components/scrappp';
import Searchbar from "../Components/ProductSearchBar"

export default function Home () {
    return ( 
        <>
            <HomeContainer>
                <div className="home-title">
                    {/* <h2>Home</h2> */}
                    {/* <h3>About us</h3>
                        <p>Thrifty, your premier marketplace for buying, selling, and comparing prices of second-hand goods. We're here to make sustainable shopping effortless, connecting buyers and sellers while promoting affordability and eco-conscious choices. Join us today and embrace the world of second-hand treasures!" */}
                    <h3>Your destination for sustainable shopping and unbeatable deals</h3>
                    {/* <Link to='/shop'>Begin Shopping!</Link> */}
                    <Searchbar />
                </div>
            </HomeContainer>
            {/* <App/> */}
        </>
        );
};

const HomeContainer = styled.div `
    .home-title{
        /* display: flex;   */
        margin-left: 30px;
        margin-top: 100px;
        letter-spacing: 2px;
    }
`
