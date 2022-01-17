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
                <Link to="/page1">Page One</Link>
                <Link to="/page2">Page Two</Link>
                <Link to="/page3">Page Three</Link>
            </div>
        </header>
    );
}

export default Header;