// // import React, { useEffect, useState } from "react";
// import { Routes, Route } from 'react-router-dom';
// import Login from "./components/Login";
// import Register from "./components/Register";
// import './App.css';
// import { Provider } from "react-redux";
// import store from "./redux/store/Store";
// import CompanyInfo from './components/CompanyInfo';
// import Home from './components/Home';
// import Questions from './components/Questions';
// import AddNewQuestions from './components/AddNewQuestions';
// import Pending from './components/Pending';
// import Team from './components/Team';



// function App() {

//   // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // useEffect(() => {
//   //   const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
//   //   if  (storedUserLoggedInInfo === 'LOGGED_IN') {
//   //     setIsLoggedIn(true);
//   //   }
//   // }, []);

//   // const loginHandler = (email, password) => {
//   //   localStorage.setItem('isLoggedIn', 'LOGGED_IN');
//   //   setIsLoggedIn(true);
//   // };

//   // const logoutHandler = () => {
//   //   localStorage.removeItem('isLoggedIn');
//   //   setIsLoggedIn(false);
//   // };

//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/company-info" element={<CompanyInfo />} />
//           <Route path="/questions" element={<Questions />} />
//           <Route path="/addquestions" element={<AddNewQuestions />} />
//           <Route path="/pending" element={<Pending />} />
//           <Route path="/team" element={<Team />} />
//         </Routes>
//       </div>
//     </Provider>
//   );
// }

// export default App;
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
// import ProtectedRoute from "./components/helpers/ProtectedRoute";
import PageNotFound from "./components/helpers/PageNotFound";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <Route exact path="/" element={<Login onLoginUpdate={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />


          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/addquestions" element={<AddNewQuestions />} />
          <Route path="/pending-for-approval" element={<Pending />} />
          <Route path="/team" element={<Team />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
