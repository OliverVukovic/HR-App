import React from 'react'
import logo from "../assets/quantox-logo.png"
import './Header.css';
import { Link, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as actionCreators from "../redux/action/ActionCreators";

function HeaderLog() {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        const token = localStorage.getItem('token')
        localStorage.removeItem("token")
        dispatch(actionCreators.logoutUser())
        navigate("/")

    }
    return (
        <header>
            <div className="q-logo">
                {/* Logo */}
                <img src={logo} alt="logo"/>
            </div>
            <div className="page-links">
            
                <Link className="page-link home" to="/home">Home</Link>
                <Link className="page-link company" to="/company">Company</Link>
                {/* <Link className="page-link logout" to="/"> */}
                    <button className="page-link-btn" onClick={logOut}>
                    Logout
                    </button>
                    {/* </Link> */}
            </div>
        </header>
    );
}

export default HeaderLog
