import React from 'react';
import './CSS/Welcome.css';
import bgVideo from '../assets/bg.mp4';  // Make sure this path is correct
import {Link} from 'react-router-dom'

export default function Welcome() {
    return (
        <div className="welcome-container">
            <video className="bg-video" autoPlay loop muted>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Welcome to Thrifty! 🛒 </h1>
                <h2>Tired of tab-hopping? We got you! Thrifty is your one-stop shop to compare deals and snag the best bargains. We pull the coolest stuff from eBay and Poshmark and lay it all out for you. No more FOMO, only smart shopping. Dive in and let your wallet thank you! 💰</h2>
                <br></br>
                <p>click this button below to find out more</p>
                <br></br>
                {/* <a><button href=""> SHOP </button></a> */}
                <Link to='/products'><button >SHOP</button></Link>

            </div>
            
        </div>
    );
}

