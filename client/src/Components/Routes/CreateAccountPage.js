import React, {useState} from "react";
import {Link} from 'react-router-dom'
import CreateAccountForm from '../Pieces/createAccountForm';

export default function SignUpPage ({createAccount}) {
const [username , setUsername] = useState("")
const [password, setPassword] = useState("")

const handleChangeUsername = e => setUsername(e.target.value)
const handleChangePassword = e => setPassword(e.target.value)


return (
    <div className="signin-container">
        <CreateAccountForm handleChangeUsername = {handleChangeUsername} handleChangePassword={handleChangePassword} username={username} password={password} createAccount={createAccount}/>
    </div>
)};