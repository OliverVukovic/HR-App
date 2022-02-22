import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileRequest, setInitalLoading } from '../../redux/action/ActionCreators';
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
import './CompanyInfo.css';
import { Loader } from '../helpers/Loader';


function CompanyInfo() {


  const id = localStorage.getItem("id");
    const newUser = useSelector((state) => state.user);
    const newProfile = useSelector((state) => state.profile);
    let isLoadedPage = useSelector(state => state.loading);

    const profile = {
        company: ''
    }
    const [user, setUser] = useState(profile);

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitalLoading(true));

    if(newUser.id) {
      dispatch(fetchProfileRequest(newUser.id))
    }
  }, [newUser]);



    useEffect(() => {
        const profile = {
            company: newProfile?.attributes?.company?.data?.attributes?.name
        }
        setUser(profile);
    }, [setUser, newProfile]);




  return (
    <>
    {isLoadedPage  && <Loader/> ? <Loader /> : (

    <div className="header-leftbar-right">
      <HeaderLog />
      <div className="left-bar-companyinfo">
        <LeftBar />
        <div className="container-company-info">
          <h2 className="company-title">Company Info</h2>
          <p className="company-name">Company Name</p>
          <input className='choose-company-file' 
                type="text" 
                value={user !== undefined ? user.company : ""}
          />
          <p className="company-name">Company Logo</p>
          <input className='choose-file' type="file" />
          <div className="div-but">
            <button className="button">Save</button>
          </div>
            <p className='logo-txt'>No logo!</p>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default CompanyInfo