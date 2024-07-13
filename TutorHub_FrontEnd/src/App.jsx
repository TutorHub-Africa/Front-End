import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Courses from "./components/Courses";
import About_Us from "./components/About_Us";
import Footer from "./components/Footer";
import Course_Card from "./components/Search Courses/Course_Card";

function App() {
  return (
    <>
    <Course_Card />

    {/* <Footer/> */}
    {/* <Router>
      <Navbar />
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/about_us" element={<About_Us />} />
        </Routes>
   </Router> */}
   </>
  )
}

export default App
