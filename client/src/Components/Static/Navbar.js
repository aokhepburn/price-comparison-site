// import React from 'react';
// import {NavLink, useLocation} from 'react-router-dom';
// import styled from 'styled-components';
// // import logo from '../assets/logo.png';
// import {Link} from 'react-router-dom';
// import ProductSearchBar from "../Pieces/ProductSearchBar";


// export default function Navbar ({searchInput, setSearchInput}) {
//     const location = useLocation();

//   // Conditionally render the Searchbar based on the current route
//     const renderSearchbar = location.pathname !== '/';
//     return ( 
//         <>
//             <NavContainer>
//                 <div className="nav-center">
//                     {/* <Link to="/">
//                     <img src={logo} alt="thifty logo" className="logo" />
//                     </Link> */}
//                     <ProductSearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
//                     <div className="nav-links">
//                         {/* <NavLink to ='/home' className='nav-link'>Home</NavLink> */}
//                         {/* <NavLink to ='/shop' className='nav-link'>Shop</NavLink> */}
//                         <NavLink to ='/wishlist' className='nav-link'>Wishlist</NavLink>
//                         <Link to='/signup'><button >Create an Account</button></Link>
//                         <Link to='/login'><button >Login</button></Link>
//                     </div>
//                 </div>
//             </NavContainer>
//         </>
//     );
// };
// const NavContainer = styled.nav `
//     justify-content: space-between;
//     align-items: center;
//     height: 80px;
//     .logo {
//         display: flex; 
//         margin-top: 0px; 
//         height: 80px;
//         width: 270px;
//     }
//     .nav-links {
//         letter-spacing: 2px;
//         padding: 10px; 
//         align-items: center;
//         justify-content: center;
//         display: flex;
//         margin-top: 0px; 
//     }
//     .nav-link{
//         letter-spacing: 2px;
//         padding: 10px;
//         align-items: center;
//         justify-content: center;  
//     }
//     `; 
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import ProductSearchBar from "../Pieces/ProductSearchBar";


export default function Navbar ({searchInput, setSearchInput, handleSearch}) {
export default function Navbar({ searchInput, setSearchInput }) {
    const location = useLocation();

    return ( 
    const renderSearchbar = location.pathname !== '/';

    return (
        <>
            <NavContainer>
                <div className="nav-center">
                    <Link to="/">
                    <img src={logo} alt="thifty logo" className="logo" />
                    </Link>
                    <ProductSearchBar handleSearch={handleSearch} />
                    <ProductSearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
                    <div className="nav-links">
                        {/* <NavLink to ='/home' className='nav-link'>Home</NavLink> */}
                        {/* <NavLink to ='/shop' className='nav-link'>Shop</NavLink> */}
                        <NavLink to ='/wishlist' className='nav-link'>Wishlist</NavLink>
                        <Link to='/signup'><button >Create an Account</button></Link>
                        <Link to='/login'><button >Login</button></Link>
                    </div>
                </div>
            </NavContainer>
        </>
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