import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { formatDate } from '../helpers/Date';
import avatar from "../../assets/avatar2.png";
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar';
import './TestTeam.css'
import { useSelector } from 'react-redux';


function TestTim() {

    const newProfile = useSelector((state) => state.reducer.profile);
    console.log("---------------------", newProfile)


    const [profile, setProfile] = useState(null);
    const [profiles, setProfiles] = useState(null);
    useEffect(() => {
        if (newProfile) {
            axios.get(
                `https://strapi-internship-hr-app.onrender.com/api/profiles?filters[company][id][$eq]=${newProfile.attributes.company.data.id}&populate=*`
            ).then((response) => {
                console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", response)
                setProfiles(response?.data?.data)
            })
        }
    }, [newProfile]);
    return (
        <>
            <HeaderLog />
            <div className='left-right-container'>
                <LeftBar />
                <div className='right-bar'>
                    {profiles != undefined &&
                        profiles.map(profile => {
                            return (
                                <div key={profile.id} className='pending-box'>
                                    <div className='pending-img'>
                                        {!profile?.attributes?.profilePhoto?.data ?
                                            <img className='avatar2'
                                                src={avatar}
                                                alt="User don't have a photo!" /> :
                                            <img src={profile.attributes.profilePhoto.data.attributes.url}
                                                alt={'user photo'}
                                                className="import-pending-photo"
                                                width={200} />}
                                    </div>

                                    <div className='pending-middle'>
                                        <div className='pending-data'>
                                            <div className='pending-name'>
                                                <p>{profile.attributes.name}</p>
                                            </div>
                                            <div className='pending-date'>
                                                Joined {formatDate(profile.attributes.createdAt)}
                                            </div>
                                        </div>
                                        <div className='pending-btn'>
                                            {profile.attributes.status}
                                        </div>
                                    </div>

                                    <div className='pending-buttons'>
                                        <Link to="/approve">
                                            <button className='pending-d-btn'>
                                                Details
                                            </button>
                                        </Link>
                                        <button className='pending-d-btn'>
                                            Delete
                                        </button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TestTim