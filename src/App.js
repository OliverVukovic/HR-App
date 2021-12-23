import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/register" element={<Register />} />
          <Route exact path="/main" element={<Main />} /> */}
        </Routes>
      </div>
  );
}

export default App;
