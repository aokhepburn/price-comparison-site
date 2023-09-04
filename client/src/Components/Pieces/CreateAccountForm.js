import React, { useState } from "react";
import "./CSS/CreateAccountForm.css"; // Import the CSS file

export default function CreateAccountForm({
    createAccount,
    handleChangeUsername,
    handleChangePassword,
    password,
    username,
}) {
    function handleSubmit(e) {
        e.preventDefault();
        createAccount({ username, password });
    }



    return (
        <div className="container">
            <div className="left">
                <h1>Create an account</h1>
                <p> Be sure to enter the correct information</p>
                <p>Required fields have an asterik: *</p>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className='first-last'>
                        <h2>Legal first name*</h2>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Enter your first name"
                        />
                        <h2>Legal last name*</h2>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Enter your last name"

                        />
                    </div>
                    <h2>Email/Username*</h2>
                    <input
                        className="input-field"
                        type="text"
                        onChange={handleChangeUsername}
                        placeholder="Enter an email or username"
                        value={username}
                    />
                    <h2>Password</h2>
                    <input
                        className="input-field"
                        type="password"
                        onChange={handleChangePassword}
                        placeholder="Enter a password"
                        value={password}
                    />
                    <br></br>
                    <label for="ageCertification">
                        <input type="checkbox" id="ageCertification" name="ageCertification" required />
                        I certify that I am 18 years of age or older, I agree to the User Agreement, and I have read the Privacy Policy.
                    </label>
                    <button className="submit-button" type="submit" value="Create new account" >Create free account</button>
                </form>
                {/* Add social media sign-up options */}
                <div className="social-media-signup">
                    <button className="social-media-button">Sign up with Google</button>
                    <button className="social-media-button">Sign up with Facebook</button>
                    <button className="social-media-button">Sign up with Apple</button>
                </div>
            </div>
            <div className="right">
                <h1>A picture will go here</h1>
            </div>
        </div>
    );
}
