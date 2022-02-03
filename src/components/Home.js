import React from 'react';
// import CompanyInfo from './CompanyInfo';
import LeftBar from './LeftBar';
import './Home.css';
import HeaderLog from './HeaderLog';
import MyProfile from './MyProfile';

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