import React from 'react'
import './MyProfile.css';

function MyProfile() {

  return (
    
    <div className="container-my-profile">
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
                        />
                        <p className="p-name-profile">
                            Profile Photo
                        </p>
                        <input className="choose-file" 
                            type="file" 
                            placeholder="chose-folder"
                        />
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
                    <div className="right-main">
                        <p className="p-name-profile">
                            Email:
                        </p>
                        <p className="email">
                            {/* {handleEmail} */}
                        </p>
                        <p className="p-name-profile">
                            Curent Password
                        </p>
                        <input className="input-name" type="password"  placeholder="Curent password"/>
                        <p className="p-name-profile">
                            New Password
                        </p>
                        <input className="input-name" type="password"  placeholder="Enter new password"/>
                        <div className="but-div">
                            <button className="button">
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
