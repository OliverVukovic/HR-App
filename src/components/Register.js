import React, { useState, useEffect } from "react";
import './Login.css';
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../redux/action/ActionCreators";




const Register = () => {
    // const newUser = useSelector((state) => 
    //     state.newUser)
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ photo, setPhoto ] = useState('');
    const [ role, setRole ] = useState();
    const [errorMessage, setErrorMessage] = useState(true)

    // const error = useSelector((state) => state.error);
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    

    const onRegister = (event) => {
        event.preventDefault()
        
        if (username.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
            setErrorMessage(false)
            return errorMessage
        }
        else{
            dispatch(actionCreators.registerUser({
                username,
                email,
                password,
                photo,
                role
            }));
            
            navigate("/home")
            setUsername ('');
            setEmail ('');
            setPassword('');
        }
        
    };

    // useEffect(()=>{
    //     console.log(username, email, password)
    //     })
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handlePhoto = (event) => {
        setPhoto(event.target.value)
        console.log(event.target.value)
    }

    const handleRole = (event) => {
        setRole(event.target.value)
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
                            <label className="title-email-pass">Username</label>
                            <input 
                                type='text' 
                                placeholder="Username"
                                value={username}
                                onChange={handleUsername}
                            />
                        </div>
                        <div className="login-page">
                            <label className="title-email-pass">Email</label>
                            <input 
                                type='email' 
                                placeholder="Email"
                                required
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        <div className="login-page">
                            <label className="title-email-pass">Password</label>
                            <input 
                                type='password' 
                                placeholder="Password"
                                required
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>
                        <div className="login-page">
                            <label className="inp-check-photo">Profile Photo</label>
                            <input className="choose-file"
                                // placeholder={this.props.placeholderText}="Upload file"
                                type="file"
                                accept="image/*"
                                // value={photo}
                                onClick={handlePhoto}
                            />
                        </div>
                        <div className="login-page">
                            <p className="select-role">Select your role:</p>
                            <div className="radio-btn">
                                <div className="role">
                                    <input 
                                        type="radio" 
                                        // checked="cheked"
                                        name="role"
                                        onClick={handleRole}
                                    />
                                    <label className="admin-user">User</label>
                                </div>
                                <div className="role">
                                    <input 
                                        type="radio"
                                        name="role"
                                        onClick={handleRole}
                                    />
                                    <label className="admin-user">Admin</label>
                                </div>
                                
                            </div>
                        </div>
                        <div className="login-page__actions">
                            <Link className="acc-text" to="/">Already have an account?</Link>
                            
                            <button type="submit"
                                    onClick={onRegister}
                            >
                                Register
                            </button>
                        </div>
                        {/* <img src={photo} alt="slika" /> */}
                        {/* {error.message && <div className="error-message">{error.message}</div>} */}
                        {!errorMessage && <p className="error-message">Check Your Data!</p>}
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Register; 