import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Course_Search_Main from "./components/Search_Courses/Course_Search_Main.jsx";
import Course_Description_Card from "./components/Course_Enroll/Course_Description_Card.jsx";
import Dashboard from "./components/Course_Dashboard/Dashboard.jsx";
import Tutor_Dashboard from "./components/Tutor_Course_Dashboard/Tutor_DashBoard.jsx";
import Student_Course_List from "./components/Student_Main_Page/Student_Course_List.jsx";
import Tutor_Course_List from "./components/Tutor_Main_Page/Tutor_Course_List.jsx";
import Tutor_Course_Add from "./components/Tutor_Course_Add/Tutor_Course_Add.jsx";

function App() {
  return (
    <>
      {/* <Course_Description_Card/> */}
      {/* <Details_Card/> */}
      <div className="app">
          <Router>
            <header>
            <NavBar status={'loggedIn'}/>
            </header>
            <div className="content">
              <Routes>
                <Route path="/" element={<Student_Course_List/>} />
                <Route path="/student/dashboard" element={<Dashboard/>} />
                <Route path="/tutor/dashboard" element={<Tutor_Dashboard/>} />

                <Route path="/courses" element={<Course_Search_Main />} />
                <Route path="/program_details" element={<Course_Description_Card />} />

                <Route path="/about_us" element={<Tutor_Course_Add/>} />
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
