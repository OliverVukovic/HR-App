import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import CompanyInfo from './components/pages/CompanyInfo';
import Home from './components//pages/Home';
import { Questions } from './components/pages/Questions';
import AddNewQuestions from './components/pages/AddNewQuestions';
import Pending from "./components/pages/Pending";
import Team from "./components/pages/Team";
import PageNotFound from "./components/helpers/PageNotFound";
import ApprovePage from "./components/pages/ApprovePage";
import EditMember from "./components/pages/EditMember";
import EditQuestions from "./components/pages/EditQuestions";
import { QueryClient, QueryClientProvider } from "react-query";
import { Loader } from "./components/helpers/Loader";
import ReturnOnLoginPage from "./components/helpers/ReturnOnLogin";

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const registerFreshness = useSelector(state => state.registerFreshness)
  const myUserId = useSelector(state => state.user.id)
  const isAutenticated = useSelector(state => state.user.confirmed)
  console.log(isAutenticated)

  const isLoggedIn = isAutenticated;

  useEffect(() => {
    dispatch({
      type: 'AUTO_LOGIN'
    })
  }, [])

  useEffect(() => {
    const id = parseInt(myUserId)
    if (isAutenticated && id > 0) {
      dispatch({
        type: 'FETCH_PROFILE_REQUEST',
        payload: id
      })
    }
  }, [isAutenticated, myUserId])

  useEffect(() => {
    if (registerFreshness > 0) {
      navigate('/');
    }
  }, [registerFreshness])

  const queryClient = new QueryClient()




  let loggedInRoutes = null;

  if (isAutenticated) {
    loggedInRoutes = (
      <>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/addquestions" element={<AddNewQuestions />} />
        <Route path='questions/:questionsId/edit' element={<EditQuestions />} />
        <Route path="/pending-for-approval" element={<Pending />} />
        <Route path="/approve" element={<ApprovePage />} />
        <Route path="/edit" element={<EditMember />} />
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  }

  let loggedOutRoutes = null;

  if (!isAutenticated) {
    loggedOutRoutes = (
      <>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ReturnOnLoginPage />} />
      </>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>

      <div className="App">
        <Routes>
          {loggedInRoutes}
          {loggedOutRoutes}

          <Route path="ss" element={<Loader />} />

        </Routes>
      </div>

    </QueryClientProvider>
  );
}

export default App;
