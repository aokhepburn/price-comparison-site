import React, {useEffect, useState} from "react";
import {Outlet, Link} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import SignInPage from "./SigninButton";
import Home from "./Home";


export default function App () {
    
    const [searchInput, setSearchInput] = useState("")

    // useEffect(() => {
    //     fetch("url")
    //     .then((response) => response.json())
    //     .then((data => setSearchProducts(data)))
    // })
    
    return ( 
        <div>
            <Navbar searchInput={searchInput} setSearchInput={setSearchInput}/>
                <Outlet/>
            <Home/>
            <SignInPage />
        </div>
        
        
        );
};