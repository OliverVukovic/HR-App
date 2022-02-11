import React from 'react'
import './Leftbar.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProfileRequest } from '../../redux/action/ActionCreators';


function LeftBar() {


  const id = localStorage.getItem("id"); 
    const object = useSelector((state) => state.data?.data[0]?.attributes); //copy iz MyProfile
    const [user, setUser] = useState(object);

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => 
    dispatch(fetchProfileRequest(id)), 1000 )}, [dispatch,id]);

    useEffect(() => {
		setUser(object);
	}, [setUser, object]);



  return (
    <div>
        <div className="container-leftbar">
            <h2 className="lb-title">Menu</h2>
                <Link to="/pending-for-approval" className="lb-links">Pending for approval</Link>
                <Link to="/team" className="lb-links">Team</Link>
                <Link to="/questions" className="lb-links">Questions</Link>
                <Link to="/company-info" className="lb-links">Company Info</Link>
                <Link to="/home" className="lb-links">My Profile</Link>

            <div className='user-data'>
              <div className='user-photo'>
                {/* <img className='img' src={pancev} alt="pancev"/> */}
                { user?.profilePhoto?.data === null || user?.profilePhoto?.data === undefined ? 
                    <p>Korisnik nema sliku</p> : 
                    <img src={user?.profilePhoto.data.attributes.url} 
                      alt={user?.profilePhoto.data.attributes.name} 
                      className="import-img-lb" 
                      width={200} /> } 
            </div>
            <div className='user-name'>
            {user !== undefined ? user.name : ""}
              {/* Nindza ITevac */}
            </div>
            </div>
        </div>

        
    </div>
  )
}

export default LeftBar
