import React from 'react';
import LeftBar from '../layout/LeftBar';
import '../pages/Home.css';
import HeaderLog from '../layout/HeaderLog';
import MyProfile from '../pages/MyProfile';

function Home() {
  return (
    <div>
      <HeaderLog />
        <div className="container-home">
          <LeftBar />
          <div className="home"> 
            <MyProfile />
          </div>
        </div>
    </div>
  )
}

export default Home