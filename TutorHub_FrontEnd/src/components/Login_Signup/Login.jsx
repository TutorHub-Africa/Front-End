import { useState } from 'react';
import '../../styles/Login_Signup.css'
import { googleIcon } from '../../assets/assets.js';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await axios.post('API ENDPOINT', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleSignIn = () => {
        console.log('abcd')
    }

    return (
        <div className="login_container">
            <div className="middle">                
                <div className='continue-with'>
                    <button className='google-button' onClick={handleGoogleSignIn}>
                        <div className='icon-container'>
                        <img className='google-icon' src={googleIcon} alt='google'/>
                        </div>
                        Continue with Google
                    </button>
                </div>

                <div className='or'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <div className="inputs">
                    <div className="login-input">
                        <div>
                        <p>Email</p>
                        <input 
                            type="email" 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="login-input">
                        <p>Password</p>
                        <input 
                            type="password"  
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="remember">
                    <a href="#" className="forgot">Forgot Password?</a>
                </div>
                <div className="signup">

                <button className="signin" onClick={handleSignIn}>Sign In</button>
                    <div className='new-class'>
                        <p>Don't have an account? &nbsp; </p>
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login