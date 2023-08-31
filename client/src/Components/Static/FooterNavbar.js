import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterNavbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/account">Account</NavLink>
                </li>
                <li>
                    <NavLink to="/develop">Develop</NavLink>
                </li>
            </ul>
        </nav>
    );
}