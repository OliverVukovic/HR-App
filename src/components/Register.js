import React, { useState } from "react";
import './Login.css';
import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/action/RegisterUser";
import store from "../redux/store/Store";
import * as actionCreators from "../redux/action/ActionCreators";




const Register = () => {

    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    // console.log(dispatch)

    const onRegister = (event) => {
        event.preventDefault()
        dispatch(actionCreators.registerUser({
           userName,
            email,
            password
        }));

        
        // console.log(email)
        // console.log(password)
        // console.log(userName)
    }

    const handleUsername = (event) => {
        // console.log(event.target.value);
        setUserName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    

    return (
        <div className="login-form">
            <Header />
            <main>
                <section>
                    <h2>
                        uTeam - Register
                    </h2>

                    <form>
                        <div className="login-page">
                            <label>Username</label>
                            <input 
                                type='text' 
                                placeholder="Username"
                                onChange={handleUsername}
                            />
                        </div>

                        <div className="login-page">
                            <label className="title-email-pass">Email</label>
                            <input 
                                type='email' 
                                placeholder="Email"
                                required
                                onChange={handleEmail}
                            />
                        </div>

                        <div className="login-page">
                            <label className="title-email-pass">Password</label>
                            <input 
                                type='text' 
                                placeholder="Password"
                                required
                                onChange={handlePassword}
                            />
                        </div>

                        <div className="login-page">
                            <label className="inp-check-photo">Profile Photo</label>
                            <input className="choose-file"
                                // placeholder={this.props.placeholderText}="Upload file"
                                type="file"
                            />
                        </div>

                        <div className="login-page">
                            <p className="select-role">Select your role:</p>
                            <div className="radio-btn">
                                <div className="role">
                                    <input 
                                        type="radio" 
                                        checked="cheked"
                                        // onChange={}
                                    />
                                    <label>User</label>
                                </div>
                                <div className="role">
                                    <input 
                                        type="radio"
                                        // onChange={}
                                    />
                                    <label>Admin</label>
                                </div>
                                
                            </div>
                        </div>

                        <div className="login-page__actions">
                            <Link to="/">Already have an account?</Link>
                            <button type="submit"
                                    onClick={onRegister}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Register; 