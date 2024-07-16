import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Course_Search_Main from "./components/Search_Courses/Course_Search_Main.jsx";
import Course_Description_Card from "./components/Course_Enroll/Course_Description_Card.jsx";
import Dashboard from "./components/Course_Dashboard/Dashboard.jsx";
import Tutor_Dashboard from "./components/Tutor_Course_Dashboard/Tutor_DashBoard.jsx";

function App() {
  return (
    <>
      {/* <Course_Description_Card/> */}
      {/* <Details_Card/> */}
      <div className="app">
          <Router>
            <header>
            <NavBar />
            </header>
            <div className="content">
              <Routes>
                {/* <Route path="/courses" element={<Course_Search_Main />} /> */}
                {/* <Route path="/courses" element={<Dashboard/>} /> */}
                <Route path="/courses" element={<Tutor_Dashboard/>} />
              </Routes>
            </div>
          </Router>
        </div>
        <footer>
          <Footer/>
        </footer> 
    </>
  )
}

export default App
