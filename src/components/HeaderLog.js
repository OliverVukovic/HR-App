import React from 'react'
import logo from "../assets/quantox-logo.png"
import './Header.css';
import { Link } from "react-router-dom";

function HeaderLog() {
    return (
        <header>
            <div className="q-logo">
                {/* Logo */}
                <img src={logo} alt="logo"/>
            </div>
            <div className="page-links">
                <Link className="page-link home" to="/home">Home</Link>
                <Link className="page-link company" to="/company">Company</Link>
                <Link className="page-link logout" to="/">Logout</Link>
                
            </div>
        </header>
    );
}

export default HeaderLog
