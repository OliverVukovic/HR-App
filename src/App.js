import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';
import CompanyInfo from "./components/CompanyInfo";
import Home from "./components/Home";


function App() {
  return (   
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
  );
}

export default App;
