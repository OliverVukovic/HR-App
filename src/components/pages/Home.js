import React, { useEffect } from 'react';
import MyProfile from '../pages/MyProfile';
import LeftBar from '../layout/LeftBar';
import '../pages/Home.css';
import HeaderLog from '../layout/HeaderLog';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileRequest, setInitalLoading } from '../../redux/action/ActionCreators';
import { Loader } from '../helpers/Loader';

function Home() {

  // const id = localStorage.getItem("id");
  // let isLoadedPage = useSelector(state => state.loading);

  // const dispatch = useDispatch();
  //   useEffect(() => {
  //       dispatch(setInitalLoading(true));
  //       // prebaciti LOADER u home page
  //       setTimeout(() => {
  //           dispatch(fetchProfileRequest(id), 1000)
  //       });
  //   }, [dispatch, id])

  return (
    // <>
    // {isLoadedPage  && <Loader/> ? <Loader /> : (
    <div>
      <HeaderLog />
      <div className="container-home">
        <LeftBar />
        <div className="company-info">
          <MyProfile />
        </div>
      </div>
    </div>
    // )}
    // </>
  )
}

export default Home
