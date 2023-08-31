
import React from "react";
import styled from 'styled-components';
import Navbar from "./Navbar";

export default function Header() {
    return (
        <HeaderContainer>
            <div className="logo-container">

                <img src="../../../assets/logo.png" alt="thifty logo" className="logo" />
                <p className="logo-text">Thrifty</p>
            </div>
            <Navbar />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .logo-text {
    font-size: 34px;
    margin-left: 10px;
  }
`;
