import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  
import { useAuth } from './AuthContext';


function Login() {
    const [inputData, setInputData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");  // State for error message
    const navigate = useNavigate(); 
    // const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = validateValues(inputData);
        if (result === true) {
            try {
                const res = await axios.post("http://localhost:8040/user/login", inputData);
                console.log("API Response:", res.data);

                if (res.data === "Login successful") {
                    // login();
                    console.log("entered");
                    navigate("/viewcustomer");  
                } else {
                    console.log("not entered");
                    setError("Login failed: Invalid username or password");  
                }
            } catch (err) {
                setError("An error occurred. Please try again.");  
            }
        }
    };

    const validateValues = (inputData) => {
        if (inputData.username.length === 0) {
            setError("Please enter username");
            return false;
        } else if (inputData.password.length === 0) {
            setError("Please enter password");
            return false;
        } else {
            setError("");  // Clear any previous error messages
            return true;
        }
    };

    return (
        <section style={{ marginLeft: '400px' }}>
            <div className='container pt-5'>
                <form onSubmit={handleSubmit}>
                    <div className='login'>
                        <h1 role="heading">Sign <span>In</span></h1>
                        <hr className='text-light' />
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div>
                            <label role="username">UserName:</label><br />
                            <input
                                role="userfield"
                                type="text"
                                name="username"
                                className="form-control"
                                onChange={(e) => setInputData({ ...inputData, username: e.target.value })}
                            /><br /> <br />
                        </div>
                        <div>
                            <label role="password">Password:</label><br />
                            <input
                                role="passfield"
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
                            /> <br /><br />
                        </div>
                        <div>
                            <br />
                            <button className='btn btn-danger' role="login" name="user-login">Login</button>
                        </div>
                        <div className="mt-3">
                            <span>Not registered? <Link to="/signup">Register here</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
