import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/FooterNavbar.css"; // Import the CSS file for styling

export default function FooterNavbar() {
    return (
        <nav className="footer-nav">
            <ul className="footer-nav-list">
                <li className="footer-nav-item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink to="/account">Account</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink to="/develop">Develop</NavLink>
                </li>
            </ul>
        </nav>
    );
}
