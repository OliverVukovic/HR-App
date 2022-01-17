import React from "react";
import './Login.css';
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-form">
            <Header />
            <main>
                <section>
                    <h2>
                        uTeam - Login
                    </h2>

                    <form>
                        <div className="login-page">
                            <label>Email</label>
                            <input 
                                type='email' 
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="login-page">
                            <label>Password</label>
                            <input 
                                type='text' 
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="login-page__actions">
                            <Link to="/register">Don't have an account?</Link>
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