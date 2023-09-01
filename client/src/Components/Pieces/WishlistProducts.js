import React, {useState, useEffect} from "react";
import DisplayWishlist from './DisplayWishlist'

export default function WishlistProducts({wishlist}) {

    // const [wishlist, setWishlist] = useState([])
    
    // console.log("this is the wishlist", wishlist)

    // useEffect(() => {
    //     console.log("\n > useEffect triggering upon page (re)load.")
    //     fetch('/wishlist')
    //         // .then(response => response.json())
    //         .then(res=>res.json())
    //         .then(data => console.log(data))
    // }, []);

    console.log("this is the wishlist", wishlist)

    return (
        <div className="wishlist-products-display">
            {/* {wishlist.map((product) => ( */}
                <DisplayWishlist
                    key={wishlist.id}
                    // product={product}
                    wishlist={wishlist}
                />
            {/* ))} */}
            <p>wishlist products page</p>
        </div>
    );
}

// const filteredWishlist = wishlist.filter((product) => {  
//     return (
//         product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
//         product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
//         product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
//         product.id.toLowerCase().includes(searchInput.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
//         product.size.toLowerCase().includes(searchInput.toLowerCase())
//     )
// })