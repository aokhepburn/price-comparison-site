import React, {useState, useEffect} from "react";
import DisplayWishlist from '../Pieces/DisplayWishlist'
import WishlistSearchBar from '../Pieces/WishlistSearchBar'

export default function WishlistProducts({wishlist, setCurrentUser }) {

    const [searchInput, setSearchInput] = useState("")
    console.log("this is the wishlist", wishlist)

useEffect(() => {
    fetch('/check_session')
    .then(response => {
        if(response.ok) {
        response.json()
        .then(user => setCurrentUser(user))
        }
    })
    }, [])


    const filteredWishlist = wishlist.filter((product) => {  
    return (
        product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.size.toLowerCase().includes(searchInput.toLowerCase())
    )
})

    return (
        <div className="wishlist-products-display">
            {/* {wishlist.map((product) => ( */}
                <DisplayWishlist
                    key={wishlist.id}
                    // product={product}
                    wishlist={wishlist}
                />
                <WishlistSearchBar />
            {/* ))} */}
            <p>wishlist products page</p>
        </div>
    );
}

