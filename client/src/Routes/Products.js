import React from "react";
import {Link} from 'react-router-dom'
import Sidebar from '../Components/Sidebar';


export default function Shop () {
    return ( 
        <div>
            <h1>Shop</h1>
            <Sidebar/>
            {/* <h2>Wishlist</h2> */}
            {/* <Link to='/wishlist'>Wishlist</Link> */}
        </div>
        );
};
