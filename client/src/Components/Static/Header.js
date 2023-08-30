import React from "react";
import {NavLink} from "react-router-dom";
// import logo from '../Static/Components/assets/logo.png';

import Navbar from "./Navbar";

export default function Header () {
    return (
        <header>
            {/* <Link to="/"><img src={logo} alt="thifty logo" className="logo" /></Link> */}
            <p>logo</p>
            <Navbar /> 
        </header>

    )
}