import React, { useState } from "react";
import { Link } from 'react-router-dom'
import LoginForm from '../Pieces/LoginForm';

export default function LoginPage({ attemptLogin, setCurrentUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    return (
        <div className="signin-container">
            <LoginForm
                handleChangeUsername={handleChangeUsername}
                handleChangePassword={handleChangePassword}
                username={username}
                password={password}
                attemptLogin={attemptLogin}
                setCurrentUser={setCurrentUser}
            />
        </div>
    )
};