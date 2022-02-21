import React from 'react';
import MyProfile from '../pages/MyProfile';
import LeftBar from '../layout/LeftBar';
import '../pages/Home.css';
import HeaderLog from '../layout/HeaderLog';

function Home() {

  return (
    <div>
      <HeaderLog />
      <div className="container-home">
        <LeftBar />
        <div className="company-info">
          <MyProfile />
        </div>
      </div>
    </div>
  )
}

export default Home
