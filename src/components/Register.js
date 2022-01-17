import React from "react";
import './Login.css';
import Header from "./Header";
import { Link } from "react-router-dom";

const Register = () => {
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
                            <label>Title</label>
                            <input 
                                type='text' 
                                placeholder="Title"
                            />
                        </div>

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

                        <div className="login-page">
                            <label>Profile Photo</label>
                            <input className="choose-file"
                                // placeholder={this.props.placeholderText}="Upload file"
                                type="file"
                            />
                        </div>

                        <div className="login-page">
                            <p>Select your role:</p>
                            <div className="radio-btn">
                                <div className="role">
                                    <input 
                                        type="radio" 
                                        checked="cheked"/>
                                    <label>User</label>
                                </div>
                                <div className="role">
                                    <input 
                                        type="radio"/>
                                    <label>Admin</label>
                                </div>
                                
                            </div>
                        </div>

                        <div className="login-page__actions">
                            <Link to="/">Already have an account?</Link>
                            <button type="submit">
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