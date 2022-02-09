import React from 'react';
import MyProfile from '../pages/MyProfile';
import LeftBar from '../layout/LeftBar';
import '../pages/Home.css';
import HeaderLog from '../layout/HeaderLog';
import Login from '../Login';

function Home({isLoggedIn, onLoginUpdate}) {
  
  return (
    <div>
      {/* {isLoggedIn ? <> */}
        <HeaderLog />
        <div className="container-home">
          <LeftBar />
          <div className="company-info"> 
          <MyProfile />
          </div>
        </div>
      {/* </> : <Login onLoginUpdate={onLoginUpdate} />}   */}
    </div>
  )
}

export default Home
