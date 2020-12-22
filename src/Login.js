import React, { useState } from 'react'
import "./Login.css"
import logo from "./img/logo_light.png"
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase"

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        // prevent refresh 
        event.preventDefault() 
        // do login logic 
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to home 
                history.push("/")
            })
            .catch((e) => alert(e.message))
    }

    const register = (event) => {
        // prevent refresh 
        event.preventDefault() 
        // do registration logic 
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // created a new user, redirect home
            history.push("/")
        })
        .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src={logo} 
                alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                <h5>E-mail</h5>
                <input 
                    value={email} 
                    type="email"
                    onChange={event => setEmail(event.target.value)}
                />
                <h5>Password</h5>
                <input 
                    value={password} 
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                    />
                <button 
                    onClick={login} 
                    type="submit" 
                    className="login__signInButton">Sign In
                </button>
                </form>

                <p>
                    By signing-in you agree to Our Conditions of Use and Sale. Please see our Privacy
                    Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button onClick={register} className="login__RegisterButton">
                    Create an account
                </button>
                
            </div>
        </div>
    )
}

export default Login
