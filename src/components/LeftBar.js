import React from 'react'
import './Leftbar.css';
import { Link } from "react-router-dom";



function LeftBar() {
  return (
    
    <div>
        <div className="container-leftbar">
            <h2 className="lb-title">Menu</h2>
                <Link to="/pending" className="lb-links">Pending for approval</Link>
                <Link to="/team" className="lb-links">Team</Link>
                <Link to="/questions" className="lb-links">Questions</Link>
                <Link to="/company-info" className="lb-links">Company Info</Link>
                <Link to="/home" className="lb-links">My Profile</Link>
        </div>
    </div>
  )
}

export default LeftBar
