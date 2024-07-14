import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Course_Search_Main from "./components/Search Courses/Course_Search_Main";
import Details_Card from "./components/Course_Enroll/Details_Card";

function App() {
  return (
    <>
      <Details_Card/>
      {/* <div className="app">
          <Router>
            <header>
            <NavBar />
            </header>
            <div className="content">
              <Routes>
                <Route path="/courses" element={<Course_Search_Main />} />
              </Routes>
            </div>
          </Router>
        </div>
        <footer>
          <Footer/>
        </footer> */}
    </>
  )
}

export default App
