import React from 'react'
import './MyProfile.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProfileRequest } from '../../redux/action/ActionCreators'


function MyProfile() {
 
    const id = localStorage.getItem("id"); 
    const object = useSelector((state) => state.data?.data[0]?.attributes);
    const [user, setUser] = useState(object);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => 
    dispatch(fetchProfileRequest(id)), 1000 )}, [dispatch,id]);

    useEffect(() => {
		setUser(object);
	}, [setUser, object]);

    
// UPLOAD PHOTO
    const [ photo, setPhoto ] = useState(null);
    const [ badFormat, setBadFormat ] = useState(false);

    const handlePhoto = (event) => {
        const uploadPhoto = event.target.files[0];
        console.log(uploadPhoto);

        const photoType = [ "image/jpeg", "image/png", "image/gif" ];
            if (!photoType.some((type) =>
            uploadPhoto.type === type)
            && uploadPhoto !== null) {
                return setBadFormat(true);
            }
        setBadFormat(false);

        const photoData = new FormData();
        photoData.append("files", uploadPhoto);
        setPhoto(photoData)
}

    const onRegister = (event) => {
        event.preventDefault()
        setPhoto(photo)
        }
    return (
    <div className="header-leftbar-right">
        <div className="container-myprofile">
       <div className="my-profile">
            <h2 className="title-my-profile">My Profile</h2>
            <div className="container-left-right">
                <div className="left">
                    <div className="header-left">
                        <p className="header-title">Basic Info</p>
                    </div>
{/* NAME */}
                    <div className="left-main">
                        <p className="p-name-profile">
                            Name
                        </p>
                        <input className="input-name" 
                            type="text" 
                            placeholder="Name"
                            value={user !== undefined ? user.name : ""} 
                            onChange={(e) => setUser({ 
                                ...user, 
                                name: e.target.value })}
                        />
{/* PHOTO */}
                        <p className="p-name-profile">
                            Profile Photo
                        </p>
                        <input className="choose-file" 
                            type="file" 
                            placeholder="Upload photo"
                            onChange={event => handlePhoto(event)}
                        />
                         {user?.profilePhoto?.data === null || user?.profilePhoto?.data === undefined ? 
                         <p>Korisnik nema sliku</p> : 
                         <img src={user?.profilePhoto.data.attributes.url} 
                            alt={user?.profilePhoto.data.attributes.name} 
                            className="user-img" 
                            width={200} /> } 
                        <div className="but-div">
                            <button className="button">
                                Save
                            </button>
                        </div>    
                    </div>
                </div>
                <div className="right">
                    <div className="header-right">
                        <p className="header-title">Security</p>
                    </div>

{/* EMAIL */}
                    <div className="right-main">
                        <p className="p-name-profile">
                            Email:
                        </p>
                        <p className="email">
                        {user !== undefined ? "true" : "false"}
                        </p>
{/* PASSWORD */}
                        <p className="p-name-profile">
                            Curent Password
                        </p>
                        <input className="input-name" 
                                type="password"  
                                placeholder="Curent password"
                                value={user !== undefined ? "true" : "false"}
                        />
                        <p className="p-name-profile">
                            New Password
                        </p>
                        <input className="input-name" type="password"  placeholder="Enter new password"/>
                        <div className="but-div">
                            <button className="button"
                                onClick={onRegister}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

  )
}
export default MyProfile;