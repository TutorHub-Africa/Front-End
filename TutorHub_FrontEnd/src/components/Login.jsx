import React from 'react'
import '../styles/login.css'

import email_logo from '../assets/email logo.jpg'
import pers_logo from '../assets/person logo.png'
import pass_logo from '../assets/password logo.png'
import google_logo from '../assets/google_logo.png'

export const Login = () => {
  return (
    <div className="login_container">
        <div className="top">
            <div className="student">Student Login</div>
            <div className="links">
                <div>Home</div>
                <div>></div>
                <div className="login">Login</div>
            </div>
        </div>

        <div className="middle">
            <div className="welcome">Welcome back!</div>
            <div className="text">Hey there! Ready to log in? Just enter your username and password below <br />
            and you'll be back in action in no time. Let's go!</div>
            <div className="continue-with">
                <img src={google_logo} alt="" />
                <p>Continue with Google</p>
            </div>
            <div className='or'>
                <div></div>
                <p>or</p>
                <div></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <div>Email</div>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <div>Password</div>
                    <input type="password"  placeholder='Password'/>
                </div>
            </div>
            <div className="remember">
                <div>Remember me</div>
                <div className="forgot">Forgot Password?</div>
            </div>

            <button className="signin">Sign In</button>
            <div className="signup">
                <div>Don't have an account?</div>
                <div className='sign-up'>Sign Up</div>
            </div>
        </div>

    </div>
  )
}

export default Login