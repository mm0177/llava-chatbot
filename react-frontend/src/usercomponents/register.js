import React from "react";
import './register.css';
import logoIcon from '../assets/img/mazebot_logo.png';
import googleIcon from '../assets/img/google_logo.png'; 


function Register() {
    return (
        <div className="register-container">
            <div className="sidebar">
                <div className="sidebar-top">
                    <div className="logo">
                        <img src={logoIcon} alt="Mazebot Logo" className="logo-icon" />
                        Mazebot
                    </div>
                </div>
            </div>
            <div className="register-area">
                <h2>Create An  Account</h2>
                <p>Already have an account? <a href="#">Login</a></p>
                <input type="text" placeholder="First Name" className="register-input"/>
                <input type="text" placeholder="Last Name" className="register-input"/>
                <input type="text" placeholder="Email" className="register-input" />
                <input type="password" placeholder="Enter Your Password" className="register-input" />
                <button className="register-button">Login</button>
                <div className="divider">
                    <span>or Register with</span>
                </div>
                <button className="google-register">
                    <img src={googleIcon} alt="Google Logo" className="google-icon" />
                    Google
                </button>
            </div>
        </div>
    );
}

export default Register;
