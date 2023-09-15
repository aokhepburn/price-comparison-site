import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import ProductSearchBar from "../Pieces/ProductSearchBar";
import UserDetails from '../Pieces/UserDetails';

export default function Navbar ({ setProductsList, currentUser, logout }) {

    return ( 
        <>
            <NavContainer>
                <div className="nav-center">
                    <Link to="/">
                    <img src={logo} alt="thifty logo" className="logo" />
                    </Link>
                    <ProductSearchBar setProductsList={setProductsList} />
                    { currentUser?.username?.length > 0
                    ? (
                    <div>
                        <UserDetails 
                        currentUser={currentUser} 
                        logout={logout} />
                        <NavLink to ='/wishlist' className='nav-link'>Wishlist</NavLink>
                        <NavLink to ='/products' className='nav-link'>Products</NavLink> 
                    </div>
                    )
                    : (
                    <div>
                        <Link to='/signup'><button>Create an Account</button></Link>
                        <Link to='/login'><button >Login</button></Link>
                    </div>
                    ) }
                </div>
            </NavContainer>
        </>
    );
};

const NavContainer = styled.nav `
    /* justify-content: space-between;
    align-items: center;
    height: 80px; */

    background-color: ;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;

    .nav-center {
    display: flex;
    justify-content: space-between;
    width: 100%;
    }


    .logo {
        display: flex; 
        margin-top: 0px; 
        height: 80px;
        width: 270px;
    }
    .nav-links {
        letter-spacing: 2px;
        padding: 10px; 
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 0px; 
    }
    .nav-link{
        letter-spacing: 2px;
        padding: 10px;
        align-items: center;
        justify-content: center;  
    }



    
    `; 