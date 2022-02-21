import React from 'react'
import './MyProfile.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProfileRequest } from '../../redux/action/ActionCreators'


function MyProfile() {

    const id = localStorage.getItem("id");
    const newUser = useSelector((state) => state.user); 
    const newProfile = useSelector((state) => state.profile); 
    const profile = {
        profilePhoto: '',
        name: '',
        email: ''
    }
    const [user, setUser] = useState(profile);

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() =>
            dispatch(fetchProfileRequest(id)), 1000)
    }, [dispatch, id]);



    useEffect(() => {
        const profile = {
            profilePhoto: newProfile?.attributes?.profilePhoto?.data?.attributes?.url,
            name: newProfile?.attributes?.name,
            email: newProfile?.attributes?.user?.data?.attributes?.email
        }
        setUser(profile);
    }, [setUser, newProfile]);



    const [photo, setPhoto] = useState(null);

    const handlePhoto = (event) => {
        const uploadPhoto = event.target.files[0];
        console.log("ovde ide upload fotografije", uploadPhoto);

        const photoData = new FormData();
        photoData.append("files", uploadPhoto);
        setPhoto(photoData)
    }


    const onSave = (event) => {
        event.preventDefault()
        setPhoto(photo)
    }


    return (

        <div className="header-leftbar-right">
            <div className="my-profile">
                <h2 className="title-my-profile">My Profile</h2>

                <div className="container-left-right">

                    <div className="left">
                        <div className="header-left">
                            <p className="header-title">Basic Info</p>
                        </div>

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
                                    name: e.target.value
                                })}
                            />

                            <p className="p-name-profile">
                                Profile Photo
                            </p>
                            <input className="choose-file"
                                type="file"
                                placeholder="Upload photo"
                                onChange={event => handlePhoto(event)}
                            />
                            {user.profilePhoto === null || user.profilePhoto === undefined ?
                                <p className='no-img-txt'>User don't have a photo!</p> :
                                <img src={user.profilePhoto}
                                    alt={'user photo'}
                                    className="user-img"
                                    width={200} />}

                            <div className="but-div">
                                <button className="button"
                                    onClick={onSave}
                                >
                                    Save
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="right">
                        <div className="header-right">
                            <p className="header-title">Security</p>
                        </div>

                        <div className="right-main">
                            <p className="p-name-profile">
                                Email:
                            </p>
                            <p className="email">

                                {user.email}
                            </p>

                            <p className="p-name-profile">
                                Curent Password
                            </p>
                            <input className="input-name"
                                type="password"
                                placeholder="Curent password"

                            />
                            <p className="p-name-profile">
                                New Password
                            </p>
                            <input className="input-name" type="password" placeholder="Enter new password" />
                            <div className="but-div">
                                <button className="button"
                                    onClick={onSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyProfile;
