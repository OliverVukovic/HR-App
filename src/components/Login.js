import React, { useState, useEffect } from "react";
import './Login.css';
import Header from "./layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionCreators from "../redux/action/ActionCreators";
import { useSelector } from "react-redux";

const Login = () => {
    const [isPending, setIsPending] = useState(true);
    const user = useSelector((state) => state.user);
    const error = useSelector((state) => state.error);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    const dispatch = useDispatch();
    
    const navigate = useNavigate(true);

    useEffect(() => {
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
    }, [enteredEmail, enteredPassword]);

    useEffect(() => {
        if (user && user.id) {
            console.log(user)
            navigate('/home');
            setEnteredEmail('');
            setEnteredPassword('');
        }
    }, [user]);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            enteredEmail.includes('@') && event.target.value.trim().length > 6
        );
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
            return;
        }
            dispatch(actionCreators.loginUser({
                email: enteredEmail,
                password: enteredPassword
            }))
            const token = localStorage.getItem("token");
    };
    return (
        <div className="login-form">
            <Header />
            <main>
                <section>
                    <h2>
                        uTeam - Login
                    </h2>
                    <form onSubmit={submitHandler}>
                        <div className="login-page">
                            <label className="title-email-pass">Email</label>
                            <input 
                                type='email' 
                                placeholder="Email"
                                required
                                value={enteredEmail}
                                onChange={emailChangeHandler}
                            />
                        </div>
                        <div className="login-page">
                            <label className="title-email-pass">Password</label>
                            <input 
                                type="password"
                                placeholder="Password"
                                // required
                                value={enteredPassword}
                                onChange={passwordChangeHandler}
                            />
                        </div>
                        <div className="login-page__actions">
                            <Link className="acc-text" to="/register">Don't have an account?</Link>
                            <button className="button" type="submit">
                                Login
                            </button>
                        </div>
                        {error.message && <div className="error-message">{error.message}</div>}
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Login; 