import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

export default function ProductSearchBar ({handleSearch}) {

    const [newSearch, setNewSearch] = useState ("")

    function handleChange(e) {
        setNewSearch(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log("submitted")
        handleSearch(newSearch)
        //(/search POST request to backend )
    }

    return (
        <SearchBarContainer>
            <form className="search-container" onSubmit={handleSubmit}>
                <input
                    className = "search-bar"
                    type="text"
                    placeholder="search products" 
                    onChange={handleChange}
                    value={newSearch}           
                />
                <Link to='/products'><button>🔍</button></Link>
            </form>
        </SearchBarContainer>
    )
}

const SearchBarContainer = styled.div `
    .search-container{
        display: flex;
        align-items: center;
        justify-content: center;
        /* width: 350px; */

    }
    .search-bar{
        width: 350px;
        height: 20px;
        margin-left: 110px
    }

`