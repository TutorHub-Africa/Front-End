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
import Login from "./components/Login_Signup/Login.jsx";

function App() {
  return (
    <>
      {/* <Course_Description_Card/> */}
      {/* <Details_Card/> */}
      <div className="app">
          <Router>
            <header>
            <NavBar status={'loggedIn'} user={'student'}/>
            {/* <NavBar status={'loggedIn'} user={'tutor'}/> */}
            </header>
            <div className="content">
              <Routes>
                <Route path="/student" element={<Student_Course_List/>} />
                <Route path="/student/dashboard" element={<Dashboard/>} />

                <Route path="/student/courses" element={<Course_Search_Main />} />
                <Route path="/program_details" element={<Course_Description_Card />} />
                
                ////////////////////////////////////////////////////////

                <Route path="/tutor" element={<Tutor_Course_List/>} />
                <Route path="/tutor/dashboard" element={<Tutor_Dashboard/>} />
                <Route path="/tutor/add_course" element={<Tutor_Course_Add />} />

                <Route path="/login" element={<Login/>} />
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
