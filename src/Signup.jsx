import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Signup() {
  const [inputData, setInputData] = useState({
    username: "", name: "", email: "", password: ""
  });

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    if (result === true) {
      axios.post("http://localhost:8040/user/register", inputData)
        .then((res) => {
          console.log(inputData);
          alert("user added");
          naviget("/login");
        })
        .catch((err) => console.log(err))
      }
  }
  const validateValues = (inputData) => {
    const pw = inputData.password;
    const cp = inputData.cpass;
    if (inputData.username.length === 0) {
      alert("Please enter user id  !!! ");
      return false;
    } else if (inputData.name.length === 0) {
      alert("please enter user name");
      return false;
    } else if (inputData.email.length === 0) {
      alert("please enter email id");
      return false;
    } else if (inputData.password.length === 0) {
      alert("please enter password");
      return false;
    } else if (inputData.cpass.length === 0) {
      alert("please enter confirm password");
      return false;
    } else if (pw !== cp) {
      alert("Password not Matched");
      return false;
    } else {
      return true;
    }
  };

  return (
    <section style={{ marginLeft: '400px'}}>
      <div className='container pt-5'>
        <form onSubmit={handleSubmit}>
          <div className='sign'>
            <h1 role="heading">Sign <span>Up</span></h1>
            <hr className='text-light' />

            <div>
              <label role="username">UserName:</label><br />
              <input role="userfield" type="text" name="username" className="form-control" onChange={(e) => setInputData({ ...inputData, username: e.target.value })} /><br /> <br />
            </div>
            <div>
              <label role="name">Name:</label><br />
              <input role="namefield" type="text" name="name" className="form-control" onChange={(e) => setInputData({ ...inputData, name: e.target.value })} /> <br /><br />
            </div>
            <div>
              <label role="email">Email Id:</label><br />
              <input role="emailfield" type="email" name="email" className="form-control" onChange={(e) => setInputData({ ...inputData, email: e.target.value })} /><br /><br />
            </div>
            <div>
              <label role="password">Password:</label><br />
              <input role="passfield"type="password" name="password" className="form-control" onChange={(e) => setInputData({ ...inputData, password: e.target.value })} /> <br /><br />
            </div>
            <div>
              <label role="cpass">Confirm Password:</label><br />
              <input role="cfield" type="password" name="cpass" className="form-control" onChange={(e) => setInputData({ ...inputData, cpass: e.target.value })} /> <br />
            </div>
            <div>
              <br />
              <button role="signup" name="sign-up" className='btn btn-danger'>Signup</button>
            </div>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Signup;
