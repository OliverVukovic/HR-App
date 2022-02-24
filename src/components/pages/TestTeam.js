import React from 'react'
import axios from 'axios'
import {useQuery} from "react-query"
import HeaderLog from '../layout/HeaderLog'
import LeftBar from '../layout/LeftBar'
import { Loader } from '../helpers/Loader'

function TestTeam() {
    const fetchPostman = () => {
        return axios.get(`https://strapi-internship-hr-app.onrender.com/api/profiles?populate=*`)
    }
    const {isLoading, data, error, isError } = useQuery('qusetions', fetchPostman,
    {
        refetchOnWindowFocus: true
    }) 
    if(isLoading){
        <Loader></Loader>
    }
    console.log(data)
    // const newCompany =  companies?.data?.data[{}]?.attributes?.company?.data?.attributes
    // console.log(newCompany)
  return (
    <div>
      <HeaderLog />
      <div className="container-home">
        <LeftBar />
        <div>
          {data?.data?.data?.attributes?.company?.data?.attributes?.map((data) => {
          return ( 
                  <div key={data.data.data.id}>
                      <div>
                      <h3 style={{color: "green"}}>{data.data.data.status}dassadsaadads</h3>
                      </div>
                  </div>
          )}
          )
          }
        </div>
      </div>
    </div>
  )
}

export default TestTeam
