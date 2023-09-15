import React from "react";
import Navbar from "./Navbar";
// import { Outlet } from 'react-router-dom'
import FooterNavbar from "./FooterNavbar"

// Holds the Navbar
function Header ({ setProductsList, currentUser, logout }) {
    return (
        <header>
            <Navbar setProductsList={setProductsList} currentUser={currentUser} logout={logout} /> 
            {/* <Outlet/> */}
            {/* <FooterNavbar /> */}
        </header>
    )
};

export default Header;