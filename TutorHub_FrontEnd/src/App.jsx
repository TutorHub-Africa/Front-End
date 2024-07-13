import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Courses from "./components/Courses";
import About_Us from "./components/About_Us";

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/about_us" element={<About_Us />} />
        </Routes>
   </Router>
   </>
  )
}

export default App
