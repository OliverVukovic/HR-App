import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileRequest, setInitalLoading } from '../../redux/action/ActionCreators';
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
import './CompanyInfo.css';
import { Loader } from '../helpers/Loader';

function CompanyInfo() {




  // UPLOAD NEW PHOTO
  const [newPhoto, setNewPhoto] = useState(null);
  // const [badFormat, setBadFormat] = useState(false);

  const handlePhoto = (event) => {
      const uploadPhoto = event.target.files[0];
      console.log("ovde ide upload fotografije", uploadPhoto);

      const photoData = new FormData();
      photoData.append("files", uploadPhoto);
      setNewPhoto(photoData)
  }





  const id = localStorage.getItem("id");
    // const newUser = useSelector((state) => state.user);
    const newProfile = useSelector((state) => state.reducer.profile);
    let isLoadedPage = useSelector(state => state.reducer.loading);

    const [user, setUser] = useState(null);

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitalLoading(true));

    if(id) {
      dispatch(fetchProfileRequest(id))
    }
  }, []);


    useEffect(() => {
        const profile = {
            company: newProfile?.attributes?.company?.data?.attributes?.name
        }
        setUser(profile);
    }, [setUser, newProfile]);





// SAVE BUTTON
    const onSave = (event) => {
      event.preventDefault()
        return
     {
          dispatch({
              newPhoto,
          })
      }
  };


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
                value={user !== undefined ? user?.company : ""}
          />
          <p className="company-name">Company Logo</p>
          <input className='choose-file' 
                type="file"
                name="file" 
                // placeholder="Upload photo"
                onChange={event => handlePhoto(event)}
          />
          <div className="div-but">
            <button className="button"
                    onClick={onSave}
            >
              Save
            </button>
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






 
