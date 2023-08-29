import {NavLink, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import ProductSearchBar from "./ProductSearchBar";
import App from "../Routes/App";

export default function Navbar ({searchInput, setSearchInput}) {
    const location = useLocation();

  // Conditionally render the Searchbar based on the current route
    const renderSearchbar = location.pathname !== '/';
    return ( 
            <NavContainer>
                <div className="nav-center">
                    {/* <span className="logo">{logo}</span> */}
                    <Link to="/">
                    <img src={logo} alt="thifty logo" className="logo" />
                    </Link>
                    {/* <div className="searchbar">
                    < Searchbar /> 
                    </div> */}
                    {renderSearchbar && (
                        <div className="searchbar">
                        <ProductSearchBar/>
                        </div>
                    )}
                    <div className="nav-links">
                        <NavLink to ='/' className='nav-link'>Home</NavLink>
                        {/* <NavLink to ='/shop' className='nav-link'>Shop</NavLink> */}
                        <NavLink to ='/wishlist' className='nav-link'>Wishlist</NavLink>
                    </div>
                </div>
            </NavContainer>
    );
};
const NavContainer = styled.nav `
    justify-content: space-between;
    align-items: center;
    height: 80px;
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