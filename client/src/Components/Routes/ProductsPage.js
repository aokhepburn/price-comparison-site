import React from "react";
import {Link} from 'react-router-dom'
import DisplayProduct from "../Pieces/DisplayProduct";
// import Sidebar from '../Components/Sidebar';


export default function Shop () {
    
    return ( 
        <div>
            <h1>Products</h1>
            <DisplayProduct/>
            {/* <Sidebar/> */}
        </div>
        );
};
