import React, { useState } from "react";
import "./CSS/LoginForm.css"; // Import the CSS file

export default function LoginForm({
    handleChangeUsername,
    handleChangePassword,
    password,
    username,
    attemptLogin
}) 
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        attemptLogin({"username": username, "password": password })
    }

    function createLoginAlert(e) {
        if (isLoggedIn) {
            alert("Logged in successfully!")
        } else {
            alert("Please try again ")
        }
    }




    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Login to your account</h1>
            <div className="form-group">
                <h2>Username</h2>
                <input
                    className="input-field"
                    type="text"
                    onChange={handleChangeUsername}
                    placeholder="Enter your username"
                    value={username}
                />
            </div>
            <div className="form-group">
                <h2>Password</h2>
                <input
                    className="input-field"
                    type="password"
                    onChange={handleChangePassword}
                    placeholder="Enter your password"
                    value={password}
                />
            </div>
            <input className="submit-button" type="submit" value="Sign in" />
        </form>
    );
}




        //     // if login failed
    //         setIsLoggedIn(true)
    //     //alert("Logged in successfully!")
    //     createLoginAlert()

    // function createLoginAlert(e) {
    //     if (isLoggedIn) {
    //         alert("Logged in successfully!")
    //     } else {
    //         alert("Please try again ")
    //     }
    // }