import React, {useState} from "react";
import {Link} from 'react-router-dom'
import LoginForm from '../Pieces/LoginForm';

export default function LoginPage ({attemptLogin}) {
const [username , setUsername] = useState("")
const [password, setPassword] = useState("")

const handleChangeUsername = e => setUsername(e.target.value)
const handleChangePassword = e => setPassword(e.target.value)

function handleSubmit(e) {
    e.preventDefault()
    attemptLogin({username, password})
}   

return (
    <div className="signin-container">
        <p> Signin to your account</p>
        <LoginForm handleChangeUsername = {handleChangeUsername} handleChangePassword={handleChangePassword} username={username} password={password}/>
    </div>
)};