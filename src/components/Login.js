import React, { useState, useEffect } from "react";
import './Login.css';
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = (props) => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
    }, [enteredEmail, enteredPassword]);


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

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     props.onLogin(enteredEmail, enteredPassword);
    // };


    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
            return;
        }

        console.log(enteredEmail, enteredPassword);
        setEnteredEmail('');
        setEnteredPassword('');
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
                                type='text' 
                                placeholder="Password"
                                required
                                value={enteredPassword}
                                onChange={passwordChangeHandler}
                            />
                        </div>

                        <div className="login-page__actions">
                            <Link className="acc-text" to="/register">Don't have an account?</Link>
                            <button type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Login; 