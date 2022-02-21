import React from 'react'
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar'
import './CompanyInfo.css';
// import logo from "../../assets/quantox-logo.png";
import { useSelector } from 'react-redux';

import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { Loader } from '../helpers/Loader';


function Team() {

    const [photo, setPhoto] = useState(null);
    const [badFormat, setBadFormat] = useState(false);
    // const [loading, setLoading] = useState(false);
    const handlePhoto = (event) => {
        const uploadPhoto = event.target.files[0];
        console.log(uploadPhoto);

        const photoType = ["image/jpeg", "image/png", "image/gif"];
        if (!photoType.some((type) =>
            uploadPhoto.type === type)
            && uploadPhoto !== null) {
            return setBadFormat(true);
        }
        setBadFormat(false);

        const photoData = new FormData();
        photoData.append("files", uploadPhoto);
        setPhoto(photoData)
    }

    // const object = useSelector((state) => state.data?.data[0]?.attributes); //data?.data[0]?.attributes
    const user = useSelector((state) => state.user); //copy iz MyProfile


    // const [user, setUser] = useState(object);

    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        axios.get(`/api/profiles?filters[status][$eq]=published&filters[company][id][$eq]=*&sort=createdAt&populate=*`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [posts])

    const handleClick = (id) => {
        setLoader(true)
        axios.delete(`/api/profiles?filters[status][$eq]=published&filters[company][id][$eq]=*&sort=createdAt&${id}`, {
            data: { ...posts }
        }).then((res) => {
            setLoader(false)
        })
    }


    //     const [ user, setUser ] = useState(null);

    //     useEffect(() => {
    //         axios.get(
    //             `/api/profiles?filters[status][$eq]=published&filters[company][id][$eq]=$(Id)&sort=createdAt&populate=*`
    //         ).then((response) => {
    //             console.log("sta nam kaze ova kompanija u RESPONSE?", response)
    //            setUser(response.data.data)

    //         })
    //     }, []);

    // console.log('proba ispod koda...', user)

    return (
        <div className="header-leftbar-right">
            <HeaderLog />
            <div className="left-bar-companyinfo">
                <LeftBar />
                <div className="container-company-info">
                    <div className="title-btn">
                        <h2 className="company-title">Team</h2>
                        <Link to="/edit">
                            <button className="add-questions button"> + Add new team member</button>
                        </Link>
                    </div>

                    {loader &&
                        <div className='spinner-questions'>
                            <Loader />
                        </div>}
                    {posts.data?.map((quest) => (

                        <div className='team-box' key={quest.id}>
                            <div className='pending-box'>

                                <div className='pending-img'>
                                    {user?.profilePhoto?.data === null || user?.profilePhoto?.data === undefined ?
                                        <p>Korisnik nema sliku</p> :
                                        <img src={user?.profilePhoto.data.attributes.url}
                                            alt={user?.profilePhoto.data.attributes.name}
                                            className="user-img"
                                            width={200} />}
                                </div>

                                <div className='pending-middle'>
                                    <div className='pending-data'>
                                        <div className='pending-name'>
                                            {user.attributes.name}
                                        </div>
                                        <div className='pending-date'>
                                            05/02/2022
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
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Team















{/* 

import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar';
import '../pages/Questions.css'
import { Loader } from '../helpers/Loader';


function Questions() {

    // UPLOAD PHOTO
    const [ photo, setPhoto ] = useState(null);
    const [ badFormat, setBadFormat ] = useState(false);
    // const [loading, setLoading] = useState(false);
const handlePhoto = (event) => {
    const uploadPhoto = event.target.files[0];
    console.log(uploadPhoto);

    const photoType = [ "image/jpeg", "image/png", "image/gif" ];
        if (!photoType.some((type) =>
        uploadPhoto.type === type)
        && uploadPhoto !== null) {
            return setBadFormat(true);
        }
    setBadFormat(false);

    const photoData = new FormData();
    photoData.append("files", uploadPhoto);
    setPhoto(photoData)
}


    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {
        axios.get('https://strapi-internship-hr-app.onrender.com/api/questions?populate=*')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [posts])

    const handleClick = (id) => {
        setLoader(true)
        axios.delete(`https://strapi-internship-hr-app.onrender.com/api/questions/${id}` , {
            data: {...posts} 
        }).then((res) => {
            setLoader(false)
        })
    }
    
  return (
      <div>
      <HeaderLog />
            <div className="questions-container">
                <LeftBar />
                
                <div className="questions-right-side">
                    <div className="title-btn">
                        <h2 className="questions-title-big">Questions</h2>
                        <Link  to="/addquestions">
                            <button className="add-questions button"> + Add new questions</button>
                        </Link>
                    </div>

                    {loader && <div className='spinner-questions'>
                        <Loader />
                    </div>}
                    {posts.data?.map((quest) => (

                        <div className="questions-place" key={quest.id}>
                            <div className="questions-place-left">
                                <div className="questions-place-start">
                                <h3 className="questions-title">Questions {i++} -</h3>
                                <p className="questions-p"> {quest.attributes?.type}</p>  
                                </div>
                                <div className='sa'>
                                <p className="questions-p">{quest.attributes?.text}</p> 
                                </div> 
                            </div>
                            <div className="questions-place-right">
                                <button className="btn-edit btn button">Edit</button>
                                <button className="btn-delete btn button" 
                                    onClick={()=>handleClick(quest.id)}
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    
                    ))}
                </div>  
            </div>
    </div>
  )
}

export default Questions */}
