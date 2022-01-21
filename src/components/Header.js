import React from "react";
import './Header.css';
import logo from "../assets/quantox-logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="q-logo">
                {/* Logo */}
                <img src={logo} alt="logo"/>
            </div>
            <div className="page-links">
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </header>
    );
}

export default Header;