import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

export default function ProductSearchBar ({ setProductsList }) {

    const [newSearch, setNewSearch] = useState("")
    // const [searchInput, setSearchInput] = useState("")

    //PRODUCT SEARCH
    function handleSearch(){
        /*
        Takes in the search input (`searchInput`) and performs a Fetch API request
        using that input string to POST newly discovered products to client.
        */
        // setSearchInput(userentry)
        fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({"query": newSearch})
        }) 
        .then(response => response.json())
        .then(data => setProductsList(data));
    }

    function handleChange(e) {
        setNewSearch(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log("submitted")
        handleSearch()
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