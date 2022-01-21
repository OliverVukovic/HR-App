import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store/Store";

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
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
     </Provider>
  );
}

export default App;