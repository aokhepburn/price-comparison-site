import React, {useState} from "react";
import styled from 'styled-components';
import {Link, useHistory} from 'react-router-dom'

function ProductSearchBar ({ setProductsList }) {

    const [newSearch, setNewSearch] = useState("") //setting state for the search
    let history = useHistory();

    //PRODUCT SEARCH
    function handleSearch() {
        let productsResponse;
        fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({"query": newSearch})
        })
        .then(response => response.json())
        .then(products => {;
            productsResponse = products
            setProductsList(products)
        });
        if (!productsResponse) {history.push('/products')}
    }

    function handleChange(e) {
        setNewSearch(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        handleSearch()
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