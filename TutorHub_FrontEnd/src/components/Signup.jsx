import React from 'react'
import '../styles/signup.css'
import google_logo from '../assets/google_logo.png'

export const Signup = () => {
    return (
        <div className="sign_container">
            <div className="sign_top">
                <div className="sign_student">SignUp</div>
                <div className="sign_links">
                    <div>Home</div>
                    <div>&gt;</div>
                    <div className="sign">SignUp</div>
                </div>
            </div>

            <div className="sign_middle">
                <div className="sign_welcome">Create Your Acoount</div>
                <div className="sign_text">Empowering Learners, One Click at a Time!</div>
                <div className="sign_continue-with">
                    <a href="#"><img src={google_logo} alt="" />
                        <p>Continue with Google</p></a>
                </div>
                <div className='sign_or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <div className="sign_name">
                    <div className="sign_input">
                        <div>First Name</div>
                        <input type="text" name="" id="" placeholder='First Name' />
                    </div>
                    <div className="sign_input">
                        <div>Last Name</div>
                        <input type="text" name="" id="" placeholder='Last Name' />
                    </div>
                </div>

                <div className="sign_inputs">
                    <div className="sign_input">
                        <div>Email</div>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="sign_input">
                        <div>Password</div>
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="sign_input">
                        <div>Confirm Password</div>
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                </div>
                <div className="sign_remember">
                    <div>Remember me</div>
                    <a href="#" className="sign_forgot">Forgot Password?</a>
                </div>

                <button className="sign_signin">Sign In</button>
                <div className="sign_signup">
                    <div>Don't have an account?</div>
                    <a href="#">Sign Up</a>
                    <div className='sign_sign-up'></div>
                </div>
            </div>

        </div>
    )
}

export default Signup