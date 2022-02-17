import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import CompanyInfo from './components/pages/CompanyInfo';
import Home from './components//pages/Home';
import Questions from './components/pages/Questions';
import AddNewQuestions from './components/pages/AddNewQuestions';
import Pending from "./components/pages/Pending";
import Team from "./components/pages/Team";
import ProtectedRoute from "./components/helpers/ProtectedRoute";
import PageNotFound from "./components/helpers/PageNotFound";
import ApprovePage from "./components/pages/ApprovePage";
import EditMember from "./components/pages/EditMember";

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
  //   if  (storedUserLoggedInInfo === 'LOGGED_IN') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   localStorage.setItem('isLoggedIn', 'LOGGED_IN');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login 
          // onLoginUpdate={setIsLoggedIn} 
          />} />
          
          <Route path="/register" element={<Register />} />


          <Route path="/home" element={<Home 
          // isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} 
          />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/addquestions" element={<AddNewQuestions />} />
          <Route path="/pending-for-approval" element={<Pending />} />
          <Route path="/team" element={<Team />} />
          <Route path="/approve" element={<ApprovePage />} />
          <Route path="/edit" element={<EditMember />} />


          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
