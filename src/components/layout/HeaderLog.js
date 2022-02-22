import React from 'react'
import logo from "../../assets/quantox-logo.png"
import './Header.css';
import { Link, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as actionCreators from "../../redux/action/ActionCreators";

function HeaderLog() {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    const logOut = () => {
        
        localStorage.removeItem("id")
        localStorage.removeItem("token")
        dispatch(actionCreators.logoutUser())
        navigate("/")
    }

    return (
        <header>
            <div className="q-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="page-links">
                <Link className="page-link home" to="/home">Home</Link>
                <Link className="page-link company" to="/company-info">Company</Link>
                <button className="page-link-btn" onClick={logOut}>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default HeaderLog
