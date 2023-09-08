import React, { useState } from "react";
import "./CSS/UserDetails.css"; // Import the CSS file

function UserDetails({currentUser, logout}) {

    console.log(currentUser.username)

    return (
    <div>
        <h1 className= "welcome-message">
            Welcome {currentUser.username}!</h1>
        <button onClick={logout}>Logout</button>
    </div>
    )
}
export default UserDetails

