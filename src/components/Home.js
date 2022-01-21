import React from 'react'
import CompanyInfo from './CompanyInfo'
import Header from './Header'
import LeftBar from './LeftBar'
import './Home.css'
import HeaderLog from './HeaderLog'

function Home() {
  return (
    <div>
      <HeaderLog />
      <div className="container-home">
        <LeftBar />
        <div className="company-info"> 
        <CompanyInfo />
        </div>
      </div>
    </div>
  )
}

export default Home
