import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/header/Header.css';


import logo_black from "../assets/header_assets/Logo-black.png";
import Top from "./Top";


function Header(){
    return(
    <header className="header">
        <Top/>

        <nav className="nav_container">
            <div className="navbar-navigators">
                <NavLink to="/" className="nav_logo_container">
                    <img className="nav-logo" src={logo_black} alt="Logo" />
                </NavLink>
        
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">
                            Home
                            </NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/courses" className="nav__link">
                            Courses
                            </NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/about_us" className="nav__link">
                            About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="login-button-container">
                <button className="login-button">Login</button>
            </div>
    
        </nav>
    </header>
    );
}

export default Header