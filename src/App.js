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
import { Spinner } from "./components/Spiner";
import {QueryClientProvider, QueryClient} from 'react-query'
import { QuestionsTest } from "./components/pages/QuestionsTest";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const queryClient = new QueryClient()
  return (
  
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login onLoginUpdate={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ss" element={<Spinner />} />  

          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/questions" element={<QuestionsTest />} />
          <Route path="/addquestions" element={<AddNewQuestions />} />
          <Route path="/pending-for-approval" element={<Pending />} />
          <Route path="/team" element={<Team />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
