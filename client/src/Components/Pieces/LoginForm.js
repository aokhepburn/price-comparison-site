import React from "react";
import {useHistory} from 'react-router-dom';
import "./CSS/LoginForm.css"; // Import the CSS file

export default function LoginForm({ handleChangeUsername, handleChangePassword, password, username,setCurrentUser}) {

    let history = useHistory();
    async  function handleSubmit (e) {
        e.preventDefault();
        // let history = useHistory();
        let currentUserResponse;
        await fetch('/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
            },
            body: JSON.stringify({"username": username, "password": password })
        })
        .then(response => response.json())
        .then(data => {
            currentUserResponse = data;
            setCurrentUser(data);
            // navigate('/');
        });
        console.log("from login page", currentUserResponse);
        if (!currentUserResponse.error) history.push('/')

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

