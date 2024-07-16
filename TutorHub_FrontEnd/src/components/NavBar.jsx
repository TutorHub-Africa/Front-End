import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/header/Header.css';

import {userIcon} from '../assets/assets.js'

import logo_black from "../assets/header_assets/Logo-black.png";
import Top from "./Top";


function Header({status}){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


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

                {status === "loggedOut" && 
                    <div className="login-button-container">
                        <button className="login-button">Login</button>
                    </div>
                }

                {status === "loggedIn" && 
                    <div className="user-button-container">
                        <img src={userIcon} onClick={toggleDropdown}/>
                        {dropdownOpen && 
                            <div className="dropdown-menu">
                                <button>View Profile</button>
                                <button>Log Out</button>
                            </div>
                        }
                    </div>
                }       
            </nav>

        </header>
    );
}

export default Header