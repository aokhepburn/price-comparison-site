import React from "react";
import {Link} from 'react-router-dom'
import DisplayProducts from "../Pieces/Products";
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
