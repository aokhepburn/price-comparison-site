import React, {useState} from "react";
import {Link} from 'react-router-dom'
import SignUpForm from '../Pieces/CreateAccountForm';

export default function SignUpPage ({createAccount}) {
const [username , setUsername] = useState("")
const [password, setPassword] = useState("")

const handleChangeUsername = e => setUsername(e.target.value)
const handleChangePassword = e => setPassword(e.target.value)

function handleSubmit(e) {
    e.preventDefault()
    createAccount({username, password})
}   

return (
    <div className="signin-container">
        <p>Create an Account</p>
        <SignUpForm handleChangeUsername = {handleChangeUsername} handleChangePassword={handleChangePassword} username={username} password={password}/>
    </div>
)};