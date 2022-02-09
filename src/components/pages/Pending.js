import React from 'react'
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
import './CompanyInfo.css';
import pancev from "../../assets/pancev.png";



function Pending() {

  return (
  <div className="header-leftbar-right">
      <HeaderLog /> 
    <div className="left-bar-companyinfo">
        <LeftBar />
        <div className="container-company-info">
            <h2 className="company-title">Pending for approval</h2> 

            <div className='pending-box'>

                <div className='pending-img'>
                    <img className='img-size' src={pancev} alt="pancev"/>
                </div>

                <div className='pending-middle'>
                    <div className='pending-data'>
                        <div className='pending-name'>
                            Darko Pancev
                        </div>
                        <div className='pending-date'>
                            07/09/1965
                        </div>
                    </div>
                    <button className='pending-btn'>
                        Pending
                    </button>
                </div>
                
                <div className='pending-buttons'>
                    <button className='pending-btn'>
                        Details
                    </button>
                    <button className='pending-btn'>
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