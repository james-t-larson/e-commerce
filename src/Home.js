import React from 'react'
import Product from "./Product"
import banner from "./store.png"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={banner} alt="" /> 
            {/* banner ^ */}
            <div className="home__row">
                <Product
                    id="e821hd7oi35"
                    title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones "
                    price={14.92}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL.jpg"
                />
                <Product
                    id="e821hd7oi35"
                    title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                    price={29.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_UL320_SR320,320_.jpg'
                />
                <Product
                    id="e821hd7oi35"
                    title="Stuff You Should Know: An Incomplete Compendium of Mostly Interesting Things"
                    price={14.92}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81jluD5WTbL.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="e821hd7oi35"
                    title="Sceptre Curved 27 inch 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019"
                    price={219.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/914W%2BOtJQ-L._AC_SL1500_.jpg"
                />
                <Product
                    id="e821hd7oi35"
                    title="Apple iPhone 11, 256GB, White - Fully"
                    price={670.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ba6yqRxBL._AC_SL1382_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="e821hd7oi35"
                    title="Set of 2 Adjustable Steel Mesh Zero Gravity Lounge Chair Recliners w/Pillows and Cup Holder Trays, Brown"
                    price={99.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/812snOLFElL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
