import React from "react";
import {NavLink} from "react-router-dom";
import {Link, useOutletContext} from 'react-router-dom';
// import logo from '../Static/Components/assets/logo.png';

import Navbar from "./Navbar";

export default function Header ({ setProductsList }) {
    return (
        <header>
            <Navbar setProductsList={setProductsList} /> 
        </header>

    )
}