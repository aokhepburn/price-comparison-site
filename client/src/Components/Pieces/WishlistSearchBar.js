import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'


export default function WishlistSearchBar ({setSearchInput, searchInput}) {

    const [newSearch, setNewSearch] = useState ("")

    function handleChange(e) {
        setNewSearch(e.target.value)
    }

    return (
        <wislistSearchContainer>
        <div className="ws-search-container">
            <input type="text" onChange={handleChange} placeholder="Search wishlist..."/>
        </div>
        </wislistSearchContainer>
    )
}

const wislistSearchContainer = styled.div `
    .ws-search-container{
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
