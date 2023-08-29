import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Searchbar from "./ProductSearchBar"

export default function Search () {

    const [newSearch, setNewSearch] = useState ("")

    function handleChange(e) {
        setNewSearch(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        setSearchInput(newSearch)
    }

    return (
        <SearchBarContainer>
            <div className="search-container" onSubmit={handleSubmit}>
                <input
                    className = "search-bar"
                    type="text"
                    placeholder="search products" 
                    onChange={handleChange}
                    value={searchInput}           
                />
                <Link to='/products'><button type="submit" >🔍</button>
                </Link>
        </div>
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