import React from "react";
import Navbar from "./Navbar";
// import { Outlet } from 'react-router-dom'

// Holds the Navbar
function Header ({ setProductsList }) {
    return (
        <header>
            <Navbar setProductsList={setProductsList} /> 
            {/* <Outlet/> */}
        </header> 
    )
};

export default Header;