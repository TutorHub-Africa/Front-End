import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
// import Courses from "./components/Courses";
import About_Us from "./components/About_Us";
import Footer from "./components/Footer";
// import Course_Card from "./components/Search Courses/Course_Card";
// import Filter_Component from "./components/Search Courses/Filter_Component";
import Course_Search_Main from "./components/Search Courses/Course_Search_Main";

function App() {
  return (
    <>
      {/* <Course_Search_Main /> */}
      <div className="app">
          <Router>
            <header>
            <NavBar />
            </header>
            <div className="content">
              <Routes>
                <Route path="/courses" element={<Course_Search_Main />} />
                <Route path="/about_us" element={<About_Us />} />
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
