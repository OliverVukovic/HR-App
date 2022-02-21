import React, { useEffect, useState } from 'react'
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
import './CompanyInfo.css';
import { formatDate } from "../helpers/Date";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileRequest } from '../../redux/action/ActionCreators';
import { Link } from 'react-router-dom';
import avatar from "../../assets/avatar2.png"




function Pending() {


    const id = localStorage.getItem("id");
    const newUser = useSelector((state) => state.user);
    const newProfile = useSelector((state) => state.profile);
    const profile = {
        profilePhoto: '',
        name: '',
        createdAt: ''
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
            createdAt: newProfile?.attributes?.createdAt
        }
        setUser(profile);
    }, [setUser, newProfile]);



    return (
        <div className="header-leftbar-right">
            <HeaderLog />
            <div className="left-bar-companyinfo">
                <LeftBar />
                <div className="container-company-info">
                    <h2 className="company-title">Pending for approval</h2>

                    <div className='pending-box'>

                        <div className='pending-img'>
                            {user.profilePhoto === null || user.profilePhoto === undefined ?
                                <img className='avatar2'
                                    src={avatar}
                                    alt="User don't have a photo!" /> :
                                <img src={user.profilePhoto}
                                    alt={'user photo'}
                                    className="import-pending-photo"
                                    width={200} />}
                        </div>

                        <div className='pending-middle'>
                            <div className='pending-data'>
                                <div className='pending-name'>
                                    {/* {user !== undefined ? user.name : "Unknown user"} */}
                                    {user.name === null || user.name === undefined ?
                                        <p className='no-img-txt'>Unknown user</p> :
                                        <p>{user.name}</p>}
                                </div>
                                <div className='pending-date'>
                                    Joined {formatDate(user.createdAt)}
                                </div>
                            </div>
                            <button className='pending-btn'>
                                Pending
                            </button>
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
                </div>
            </div>
        </div>
    )
}

export default Pending