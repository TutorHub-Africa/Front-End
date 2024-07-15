import React from 'react'
import '../styles/login.css'
import google_logo from '../assets/google_logo.png'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://your-server.com/api/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="login_container">
            <div className="middle">
                <div className="welcome">Welcome back!</div>
                <div className="text">Empowering Learners, One Click at a Time!</div>
                
                <div className='continue-with'>
                    <button className='google-button'>
                        <img src={google_logo}/>
                        Continue with Google
                    </button>
                </div>

                <div className='or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <div className="inputs">
                    <div className="input">
                        <div>Email</div>
                        <input 
                            type="email" 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <div>Password</div>
                        <input 
                            type="password"  
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="remember">
                    <div>Remember me</div>
                    <a href="#" className="forgot">Forgot Password?</a>
                </div>

                <button className="signin" onClick={handleSignIn}>Sign In</button>
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