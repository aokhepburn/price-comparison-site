import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function ProductSearchBar ({ setProductsList }) {

    const [newSearch, setNewSearch] = useState("") //setting state for the search
    // console.log(newSearch);

    //PRODUCT SEARCH
    function handleSearch() {
        /*
        Takes in the search input (`searchInput`) and performs a Fetch API request
        using that input string to POST newly discovered products to client.
        */
        // setSearchInput(userentry)
        console.log("\n > Triggering FETCH REQUEST for backend search across products database.")
        fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({"query": newSearch})
        })
        .then(response => response.json())
        .then(products => setProductsList(products));
    }

    function handleChange(e) {
        // console.log("Logging prior to setter execution.")
        setNewSearch(e.target.value)
        // console.log("Logging after setter execution.")
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log("submitted")
        handleSearch()
        //(/search POST request to backend )
    }

    return (
        <SearchBarContainer>
            <form className="search-container">
                <input
                    className = "search-bar"
                    type="text"
                    placeholder="search products" 
                    onChange={handleChange}
                    value={newSearch}           
                />
                <Link to='/products'><button onClick={handleSubmit}>🔍</button></Link>
            </form>
        </SearchBarContainer>
    )
}

export default ProductSearchBar;

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