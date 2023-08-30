import React, {useEffect, useState} from "react";
import {Outlet, Link} from 'react-router-dom'
import Navbar from './Components/Static/Navbar';
import CreateAccountPage from './Routes/CreateAccountPage';
import { Routes, Route } from 'react-router-dom';


export default function App () {
    
    const [searchInput, setSearchInput] = useState("")
    const [currentUser, setCurrentUser] = useState(null)
    const [showSignU, setShowSignUp] = useState(false)

    useEffect(() => {
        fetch('/check_session')
        .then(res => {
            res.json()
            .then(user => setCurrentUser(user))
        })
    }, [])

    function createAccount(userInfo){
        fetch('/url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }) 
        .then(response => response.json())
        .then(data => setCurrentUser(data))};

    function attemptLogin(userInfo){
        fetch('/url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }) 
        .then(response => response.json())
        .then(data => setCurrentUser(data))};

    function logout(){
        fetch('/logout', {method: 'DELETE'})
        .then(res => {
            if(res.ok){
                setCurrentUser(null)
            }
        })
    }
    
    return ( 
        <div>
            <Navbar searchInput={searchInput} setSearchInput={setSearchInput}/> 
            {/* <Outlet/> */}
            <SignUpPage createAccount={createAccount}/> 
            <LoginForm attemptLogin={attemptLogin} /> 
            {/* <Home/>   */}
        
            {/* <Link to='/signin'><button >Sign In</button></Link> */}
        </div>
        
        
        );
};