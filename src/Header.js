import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import SearchIcon from "@material-ui/icons/Search"
import { useStateValue } from "./StateProvider"
import { auth } from './firebase'
import logo from './img/logo_dark.png'

function Header() {

    const [{ basket, user}] = useStateValue()

    const login = () => {
        if (user){
            auth.signOut()
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={logo}
                    alt=""
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                {/*Sign in link*/}
                <Link to={!user && "./login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                {/*view purchaces link*/}
                <Link to="./login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*view subscriptions link*/}
                <Link to="./login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Subscriptions</span>
                    </div>
                </Link>
                {/*checkout link*/}
                <Link to="./checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length} 
                            {/* print basket length if it is longer than 0*/}
                        </span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
