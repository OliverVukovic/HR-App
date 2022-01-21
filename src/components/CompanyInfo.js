import React from 'react'
import HeaderLog from './HeaderLog'
import LeftBar from './LeftBar'
import './CompanyInfo.css';

function CompanyInfo() {
  return (
    <div className="container-company-info">
        <h2 className="company-title">Company Info</h2>
        <p className="company-name">Company Name</p>
        <input type="text" />
        <p className="company-name">Company Logo</p>
        <input type="text" />
        <div className="div-but">
        <button className="but-save">Save</button>
        </div>
    </div>
  )
}

export default CompanyInfo
