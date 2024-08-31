import React from "react";
import './login.css';
import logoIcon from '../assets/img/mazebot_logo.png';
import googleIcon from '../assets/img/google_logo.png'; 

function Login() {
    return (
        <div className="login-container">
            <div className="sidebar">
                <div className="sidebar-top">
                    <div className="logo">
                        <img src={logoIcon} alt="Mazebot Logo" className="logo-icon" />
                        Mazebot
                    </div>
                </div>
            </div>
            <div className="login-area">
                <h2>Login To Your Account</h2>
                <p>Don't have an account? <a href="#">Register</a></p>
                <input type="text" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Enter Your Password" className="login-input" />
                <button className="login-button">Login</button>
                <div className="divider">
                    <span>or login with</span>
                </div>
                <button className="google-login">
                    <img src={googleIcon} alt="Google Logo" className="google-icon" />
                    Google
                </button>
            </div>
        </div>
    );
}

export default Login;
