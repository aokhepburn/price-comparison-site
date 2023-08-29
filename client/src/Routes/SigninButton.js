import React, {} from "react";
import {Link} from 'react-router-dom'

export default function SignInPage () {
    const [username , setUsername] = useState("")
    const [password, setPassword] = useState("")


    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
            onChange={handleChangeUsername}
            value={username}
            placeholder='username'
            />
    
            <input type="text"
            onChange={handleChangePassword}
            value={password}
            placeholder='password'
            />
    
            <input type="submit"
            value='Login'
            />
        </form>
    )

}