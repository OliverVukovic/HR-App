import React, { useState } from 'react'
import axios from 'axios'
import {useQuery} from "react-query"
import HeaderLog from '../layout/HeaderLog'
import LeftBar from '../layout/LeftBar'
import { Link } from 'react-router-dom';
import '../pages/TestTeam.css'
import avatar from "../../assets/avatar.png";
import { Loader } from '../helpers/Loader';
import PageNotFound from '../helpers/PageNotFound';
import { formatDate } from '../helpers/Date'
import { useSelector } from 'react-redux'

function TestTeam() {
  const newProfile = useSelector((state) => state.reducer.profile);

    const fetchPostman = (newProfile) => {
        return axios.get(`https://strapi-internship-hr-app.onrender.com/api/profiles?filters[company][id][$eq]=${newProfile.attributes.company.data.id}&populate=*`)
    }
    const {data, isLoading, error, isError} = useQuery('qusetions', fetchPostman,
    
    {
        refetchOnWindowFocus: true
    }) 
    if (isLoading) {
      return <Loader />
  } 
  if (error) {
      return <div>
              <PageNotFound />
          </div>
  }
  return (
    <div>
      <HeaderLog />
      <div className="container-home">
        <LeftBar />
        {console.log(data)}
        <div className="container-right-team">
          {data?.data.data.map(el => {
            console.log({el})
            return (
              // <h1 style={{color: "green"}}>{el.id}</h1>
              <div key={el.id} className='cards'>
                <div className='info-place'>
                  <div className='img-team'>
                    {/* <img className="img-size" src={el?.attributes?.profilePhoto?.data?.attributes?.url}></img> */}
                    {/* <img className="img-size" src={el.attributes.profile}></img> */}
                    {el?.attributes?.profilePhoto.data === null || el?.attributes?.profilePhoto.data === undefined ?
                                <img className='avatar2'
                                    src={avatar}
                                    alt="User don't have a photo!" /> :
                                <img src={el?.attributes?.profilePhoto?.data?.attributes?.url}
                                    alt={'user photo'}
                                    className="import-pending-photo"
                                     />}

                  </div>
                  <div className='name-published'>
                    <div className='name-data'>
                      <p className='name-team'>{el.attributes.name}</p>
                      <p className='data-team'>Joined {formatDate(el.attributes.createdAt)}</p>
                    </div>
                    <div className='pending-btn-team'>
                        {el.attributes.status}
                    </div>
                  </div>
                  <div className='pending-buttons'>
                    <Link to="/approve">
                        <button className='pending-d-btn'>
                            Details
                        </button>
                    </Link>
                    <button className='pending-d-btn'>
                        Delete
                    </button>
                </div>
                </div>
              </div>

            )
            
          })}
        </div>
      </div>
    </div>
  )
}

export default TestTeam
