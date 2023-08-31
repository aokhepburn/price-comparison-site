import React, { useState } from "react";
import styled from 'styled-components';

export default function Sidebar () {
    
    return (
        <SideBarContainer >
             <div className= "sidebar">
                <h1>sidebar</h1>
            </div>
        </SideBarContainer >
    )
};

// MIGHT NOT INCLUDE THIS //


const SideBarContainer = styled.div`
    .sidebar{
        height: 600px;
        width: 240px;
        background-color: aqua
    }
`
