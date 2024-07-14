import React from 'react'
import '../styles/login.css'
import google_logo from '../assets/google_logo.png'

export const Login = () => {
  return (
    <div className="login_container">
        <div className="top">
            <div className="student">Student Login</div>
            <div className="links">
                <div>Home</div>
                <div>&gt;</div>
                <div className="login">Login</div>
            </div>
        </div>

        <div className="middle">
            <div className="welcome">Welcome back!</div>
            <div className="text">Empowering Learners, One Click at a Time!</div>
            <div className="continue-with">
            <a href="#"><img src={google_logo} alt="" />
                <p>Continue with Google</p></a>
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
                <a href="#" className="forgot">Forgot Password?</a>
            </div>

            <button className="signin">Sign In</button>
            <div className="signup">
                <div>Don't have an account?</div>
                <a href="#">Sign Up</a>
                <div className='sign-up'></div>
            </div>
        </div>

    </div>
  )
}

export default Login