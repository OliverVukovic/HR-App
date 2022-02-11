import React, { useEffect, useState } from 'react'
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
import './CompanyInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileRequest } from '../../redux/action/ActionCreators';


function Pending() {
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
  <div className="header-leftbar-right">
      <HeaderLog /> 
    <div className="left-bar-companyinfo">
        <LeftBar />
        <div className="container-company-info">
            <h2 className="company-title">Pending for approval</h2> 
            <div className='pending-box'>
                <div className='pending-img'>
                    { user?.profilePhoto?.data === null || user?.profilePhoto?.data === undefined ? 
                    <p>Korisnik nema sliku</p> : 
                    <img src={user?.profilePhoto.data.attributes.url} 
                      alt={user?.profilePhoto.data.attributes.name} 
                      className="import-pending-photo" 
                      width={200} /> }
                </div>
                <div className='pending-middle'>
                    <div className='pending-data'>
                        <div className='pending-name'>           
                            {user !== undefined ? user.name : ""}
                        </div>
                        <div className='pending-date'>
                            <formatDate />
                        </div>
                    </div>
                    <button className='pending-btn'>
                        Pending
                    </button>
                </div>
                <div className='pending-buttons'>
                    <button className='pending-btn'>
                        Details
                    </button>
                    <button className='pending-btn'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Pending