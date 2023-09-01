import React, { useState } from "react";
import "./CSS/CreateAccountForm.css"; // Import the CSS file

export default function CreateAccountForm({
    createAccount,
    handleChangeUsername,
    handleChangePassword,
    password,
    username,
}) {

    const [isAccountCreated, setIsAccountCreated] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        createAccount({ "username": username, "password": password });
        setIsAccountCreated(true)
        createAccountAlert()
    }

    function createAccountAlert(e) {
        if (isAccountCreated) {
            alert("Account was created successfully!")
        } else {
            alert("Please try again ")
        }
    }

    return (
        <div className="container">
            <div className="left">
                <h1>Create your account</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="right">
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h2>Username</h2>
                        <input
                            className="input-field"
                            type="text"
                            onChange={handleChangeUsername}
                            placeholder="Enter a username"
                            value={username}
                        />
                    </div>
                    <div className="form-group">
                        <h2>Password</h2>
                        <input
                            className="input-field"
                            type="password"
                            onChange={handleChangePassword}
                            placeholder="Enter a password"
                            value={password}
                        />
                    </div>
                    <button className="submit-button" type="submit" value="Create new account" >Create new account</button>
                </form>
            </div>
        </div>
    );
}
