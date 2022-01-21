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
                            <label className="title-email-pass">Username</label>
                            <input 
                                type='text' 
                                placeholder="Username"
                            />
                        </div>

                        <div className="login-page">
                            <label className="title-email-pass">Email</label>
                            <input 
                                type='email' 
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="login-page">
                            <label className="title-email-pass">Password</label>
                            <input 
                                type='text' 
                                placeholder="Password"
                                required
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
                                        checked="cheked" value="user" name="user"/>
                                    <label className="inp-check" >User</label>
                                </div>
                                <div className="role">
                                    <input 
                                        type="radio" value="admin" name="user"/>
                                    <label className="inp-check" >Admin</label>
                                </div>
                                
                            </div>
                        </div>

                        <div className="login-page__actions">
                            <Link className="acc-text" to="/">Already have an account?</Link>
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