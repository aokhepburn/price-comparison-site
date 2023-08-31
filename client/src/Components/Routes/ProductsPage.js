import React from "react";
import {Link} from 'react-router-dom'
import DisplayProducts from "../Pieces/DisplayProducts";
// import Sidebar from '../Components/Sidebar';


export default function Shop () {
    return ( 
        <div>
            <h1>Products</h1>
            <DisplayProducts />
            {/* <Sidebar/> */}
        </div>
        );
};
