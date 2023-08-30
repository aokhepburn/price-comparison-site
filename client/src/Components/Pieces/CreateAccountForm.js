import React, {useState} from "react";

export default function CreateAccountForm({createAccount, handleChangeUsername, handleChangePassword, password, username}) {

    function handleSubmit(e) {
        e.preventDefault()
        createAccount({username, password})
    }   
    return (
        <form onSubmit={handleSubmit}>
            <h1>Create your account</h1>
            <h2> Username</h2>
                <input
                type= "text"
                onChange={handleChangeUsername}
                placeholder="enter a username"
                value={username}
                
                />
                <br />
            <h2>Password</h2>
                <input
                type= "text"
                onChange={handleChangePassword}
                placeholder="enter a password"
                value={password}
                />
                <br />
                
                <input type="submit"
                value ='Create new account'
                />
        </form>
    )};