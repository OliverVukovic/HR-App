import React from 'react';
import './MyProfile.css';
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { fetchProfileRequest } from '../../redux/action/ActionCreators';
import { Link } from 'react-router-dom';


function Approve() {
    return ( 
      <div>
        <HeaderLog />
            <div className="questions-container">
                <LeftBar />
                <div className="approve-right-side">
                    <div className="title-and-btns">
                        <h2 className="title-my-profile">Moderate team member entry</h2>
                        <div className='right-btns'>
                            <Link  to="/team">
                                <button className="add-questions button">
                                    Approve
                                </button>
                            </Link>
                            <button className="add-questions button">
                                Delete
                            </button>
                        </div>
                    </div>
    
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
                                // value={user !== undefined ? user.name : ""} 
                                // onChange={(e) => setUser({ 
                                //     ...user, 
                                //     name: e.target.value })}
                            />
    
                            <p className="p-name-profile">
                                Profile Photo
                            </p>
                            <input className="choose-file" 
                                type="file" 
                                placeholder="Upload photo"
                                // value={user?.profilePhoto.data.attributes.name}   ---- ZASTO NECE !?
                                // onChange={event => handlePhoto(event)}
                            />
                             {/* {user?.profilePhoto?.data === null || user?.profilePhoto?.data === undefined ?  */}
                             {/* <p>Korisnik nema sliku</p> :  */}
                             {/* <img src={user?.profilePhoto.data.attributes.url} 
                                alt={user?.profilePhoto.data.attributes.name} 
                                className="user-img" 
                                width={200} /> }  */}
    
                            <div className="but-div">
                                <button className="button">
                                    Save
                                </button>
                            </div>    
    
                        </div>
                    </div>
    
                    <div className="right">
                        <div className="header-right">
                            <p className="header-title">Answers</p>
                        </div>
    
                        <div className='box-1'>
                            <p className='large-txt'>Question 1 - Do You have a pet?</p>
                            <input className="input-txt" 
                                    type="text" 
                                    placeholder="Answer"
                                    // value={user !== undefined ? user.name : ""} 
                                    // onChange={(e) => setUser({ 
                                    //         ...user, 
                                    //         name: e.target.value })}
                            />
                        </div>
                        
                        <div className='box-1'>
                            <p className='large-txt'>Question 2 - Which city do You live in?</p>
                            <input className="input-txt" 
                                    type="text" 
                                    placeholder="Answer"
                                    // value={user !== undefined ? user.name : ""} 
                                    // onChange={(e) => setUser({ 
                                    //         ...user, 
                                    //         name: e.target.value })}
                            />
                        </div>

                        <div className='box-1'>
                            <p className='large-txt'>Question 3 - Take a photo of Your X-mass</p>
                            <p className="p-name-profile">
                                Profile Photo
                            </p>
                            <input className="choose-file" 
                                type="file" 
                                placeholder="Upload photo"
                                // value={user?.profilePhoto.data.attributes.name}   ---- ZASTO NECE !?
                                // onChange={event => handlePhoto(event)}
                            />
                                {/* {user?.profilePhoto?.data === null || user?.profilePhoto?.data === undefined ? 
                                <p>Korisnik nema sliku</p> : 
                                <img src={user?.profilePhoto.data.attributes.url} 
                                alt={user?.profilePhoto.data.attributes.name} 
                                className="user-img" 
                                width={200} /> } */}
                        </div>

                        <div className='box-2'>
                            <button className="button"
                                type="submit"
                                // onClick={onRegister}
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

export default Approve
