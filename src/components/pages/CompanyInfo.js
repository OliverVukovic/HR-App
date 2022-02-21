import React from 'react'
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
import './CompanyInfo.css';

function CompanyInfo() {

  return (

    <div className="header-leftbar-right">
      <HeaderLog />
      <div className="left-bar-companyinfo">
        <LeftBar />
        <div className="container-company-info">
          <h2 className="company-title">Company Info</h2>
          <p className="company-name">Company Name</p>
          <input className='choose-file' type="text" />
          <p className="company-name">Company Logo</p>
          <input className='choose-file' type="file" />
          <div className="div-but">
            <button className="button">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo