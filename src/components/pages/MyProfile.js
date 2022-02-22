import React from 'react'
import './MyProfile.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProfileRequest, setInitalLoading } from '../../redux/action/ActionCreators';
import { Loader } from '../helpers/Loader';


function MyProfile() {

    // // const id = useSelector(state => state.user.id);  
    // const id = localStorage.getItem("id"); 
    // const object = useSelector((state) => state.data?.data[0]?.attributes); //data?.data[0]?.attributes
    // const object = useSelector((state) => state.data?.data[0]?.attributes); //data?.data[0]?.attributes
    // // const userId = useSelector((state) => state.data?.data[0]?.id); //data?.data[0]?.attributes

    // const [user, setUser] = useState(object);

    // // dohvata id osobe koja se loguje
    // // console.log(id);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     setTimeout(() => 
    // dispatch(fetchProfileRequest(id)), 1000 )}, [dispatch,id]);

    // useEffect(() => {
    // 	setUser(object);
    // }, [setUser, object]);



    // const [ newName, setNewName ] = useState('')


    const id = localStorage.getItem("id");
    // const object = useSelector((state) => state.data?.data[0]?.attributes); //copy iz MyProfile
    const newUser = useSelector((state) => state.user); // copy my user data
    const newProfile = useSelector((state) => state.profile); // copy iz MyProfile
    let isLoadedPage = useSelector(state => state.loading);


    const test= useSelector(state => state);
    console.log(test)

    // const profile = {
    //     profilePhoto: '',
    //     name: '',
    //     email: ''
    // }
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setInitalLoading(true));
        // prebaciti LOADER u home page
        setTimeout(() => {
            dispatch(fetchProfileRequest(id), 1000)
        });
    }, [dispatch, id])

    
    const profile = {
        profilePhoto: newProfile?.attributes?.profilePhoto?.data?.attributes?.url,
        name: newProfile?.attributes?.name,
        email: newProfile?.attributes?.user?.data?.attributes?.email
    }
    
    const [user, setUser] = useState(profile);
    useEffect(() => {
        // if (newProfile) {
        setUser(profile);

    }, [setUser, newProfile]);





    // const handleName = (event) => {
    //     const newValue = event.target.value;
    //     setNewName(newValue)
    // }

    const [photo, setPhoto] = useState(null);

    const handlePhoto = (event) => {
        const uploadPhoto = event.target.files[0];
        console.log("ovde ide upload fotografije", uploadPhoto);

        const photoData = new FormData();
        photoData.append("files", uploadPhoto);
        setPhoto(photoData)
    }


    const onSave = (event) => {
        event.preventDefault()
        setPhoto(photo)
        // dispatch()
        // if (newName) {
        //     console.log("izvrsi proveru")
        // }
    }


        return (
            <>
               {isLoadedPage  && <Loader/> ? <Loader /> : (

            <div className="header-leftbar-right">
                <div className="my-profile">
                    <h2 className="title-my-profile">My Profile</h2>

                    <div className="container-left-right">

                        <div className="left">
                            <div className="header-left">
                                <p className="header-title">Basic Info</p>
                            </div>

                            {/* NAME */}
                            <div className="left-main">
                                <p className="p-name-profile">
                                    Name
                                </p>
                                {/* <input className="input-name"
                                type="text"
                                placeholder="Name"
                                value={newProfile ? newProfile.name : ""}
                                // onChange={(event) => setUser({
                                //     ...user,
                                //     name: event.target.value
                                // })}
                                onChange={handleName} 
                                /> */}
                                <input className="input-name"
                                    type="text"
                                    placeholder="Name"
                                    value={user !== undefined ? user.name : ""}
                                    onChange={(e) => setUser({
                                        ...user,
                                        name: e.target.value
                                    })}
                                />


                                {/* PHOTO */}
                                <p className="p-name-profile">
                                    Profile Photo
                                </p>



                                <input className="choose-file"
                                    type="file"
                                    placeholder="Upload photo"
                                    // value={user?.profilePhoto.data.attributes.name}   ---- ZASTO NECE !?
                                    onChange={event => handlePhoto(event)}
                                />
                                {user.profilePhoto === null || user.profilePhoto === undefined ?
                                    <p className='no-img-txt'>User don't have a photo!</p> :
                                    <img src={user.profilePhoto}
                                        alt={'user photo'}
                                        className="user-img"
                                        width={200} />}





                                <div className="but-div">
                                    <button className="button"
                                        onClick={onSave}
                                    >
                                        Save
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="right">
                            <div className="header-right">
                                <p className="header-title">Security</p>
                            </div>

                            {/* EMAIL */}
                            <div className="right-main">
                                <p className="p-name-profile">
                                    Email:
                                </p>
                                <p className="email">
                                    {/* {user?.user?.data?.attributes.email} */}
                                    {/* {user !== undefined ? "true" : "false"} */}
                                    {profile?.email}
                                </p>

                                {/* PASSWORD */}
                                <p className="p-name-profile">
                                    Curent Password
                                </p>
                                <input className="input-name"
                                    type="password"
                                    placeholder="Curent password"
                                // value={user.user?.data?.attributes.password} 
                                // ------ ZASTO NECE !?
                                // value={user !== undefined ? "true" : "false"}
                                />
                                <p className="p-name-profile">
                                    New Password
                                </p>
                                <input className="input-name" type="password" placeholder="Enter new password" />
                                <div className="but-div">
                                    <button className="button"
                                        // type="submit"
                                        onClick={onSave}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               )}
            </>

        )
}


export default MyProfile;
