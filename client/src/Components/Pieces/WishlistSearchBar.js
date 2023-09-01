import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import DisplayProducts from 'DisplayProducts';

export default function Search ({setSearchInput, searchInput}) {

    const [newSearch, setNewSearch] = useState ("")

    function handleChange(e) {
        setNewSearch(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        setSearchInput(newSearch)
    }

    return (
        <wislistSearchContainer>
            <div className="search-container" onSubmit={handleSubmit}>
                <input
                    className = "search-bar"
                    type="text"
                    placeholder="search products" 
                    onChange={handleChange}
                    value={searchInput}           
                />
                {/* <Link to='/products'><button type="submit" >🔍</button> */}
                {/* </Link> */}
        </div>
        </wislistSearchContainer>
    )
}

const wislistSearchContainer = styled.div `
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