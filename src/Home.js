import React from 'react'
import Product from "./Product"
import banner from "./store.png"
import bookImage from "./book.webp"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={banner} alt="" /> 
            {/* banner ^ */}
            <div className="home__row">
                <Product
                    id="e821hd7oi35"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things"
                    price={14.92}
                    rating={5}
                    image={bookImage}
                />
                <Product
                    id="e821hd7oi35"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things"
                    price={14.92}
                    rating={5}
                    image={bookImage}
                />
                <Product
                    id="e821hd7oi35"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things"
                    price={14.92}
                    rating={5}
                    image={bookImage}
                />
            </div>
            <div className="home__row">
                <Product
                    id="e821hd7oi35"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things"
                    price={14.92}
                    rating={5}
                    image={bookImage}
                />
                <Product
                    id="e821hd7oi35"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things"
                    price={14.92}
                    rating={5}
                    image={bookImage}
                />
            </div>
            <div className="home__row">
                <Product
                    id="e821hd7oi35"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things"
                    price={14.92}
                    rating={5}
                    image={bookImage}
                />
            </div>
        </div>
    )
}

export default Home
