import React from "react";
import './Header.css';
import logo from "../assets/quantox-logo.png"

const Header = () => {
    return (
        <header>
            <div className="q-logo">
                {/* Logo */}
                <img src={logo} alt="logo"/>
            </div>
            <div className="page-links">
                <a href="#page1">Page One</a>
                <a href="#page2">Page Two</a>
                <a href="#page3">Page Three</a>
            </div>
        </header>
    );
}

export default Header;