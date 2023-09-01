import React, { useState } from "react";

function UserDetails({currentUser, logout}) {

    return (
    <div>
        <h2>Welcome {currentUser.username}!</h2>
        <button onClick={logout}>Logout</button>
    </div>
    )
}
  
export default UserDetails