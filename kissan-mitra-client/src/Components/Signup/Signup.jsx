import React, { useEffect, useState } from "react";
import "./Signup.css";
import axios from "axios";
import cookies from "js-cookie";

import Auth from "../../functinos/Auth";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();
  useEffect(() => {

    const fetch = async () => {
      try {
        const x = await Auth();
        // console.log(x);
        if(x){
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  const [FormData, setFormData] = useState({
    firstName : '',
    lastName : '',
    email: '',
    password: ''
  })
  const handlechange = (e)=>{
    setFormData( {...FormData , [e.target.name]:[e.target.value]})
  }

  const handlepassword = (e)=>{
      const cookie = document.cookie;
      console.log(cookie);
  }

  const setCookie = (c)=>{
    // const [jwt , id] = c;
    const jwt = c.jwt;
    const id = c.id;
    cookies.set("jwt",jwt);
    cookies.set("id",id);
    navigate("/");
  }

  const handleSubmit = ()=>{
    axios.post("http://localhost:5000/api/register",FormData)
  .then((res)=>{
    console.log(res.data);
    setCookie(res.data);
  })}
  return (
    <div className="Signuppage-container">
      <div className="signuppage-gridleft">
        {/* <img src="" alt="kissanImage" /> */}
      </div>
      <div className="signupPage-gridright">
        <div className="signupInsidecontent">
          <div className="signupFormHeader-signuppage">
            <div>Register</div>
            <span>
              or <a href="/login">Login to existing Account</a>
            </span>
          </div>
          <div className="inputBoxes-signupPage">
            <input
              className="input-signuppage"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handlechange}
            />
            <input
              className="input-signuppage"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handlechange}
            />
            <input
              className="input-signuppage grid-expand-signupPage"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handlechange}
            />
            <input
              className="input-signuppage"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlechange}
            />

            <input
              type="password"
              className="input-signuppage"
              placeholder="Confirm Password"
              onChange={handlepassword}
            />
          </div>
          <div className="signupformbottom-signuppage">
            <div className="checkboxsignuppage">
              <input type="checkbox" name="remember" id="remembersignupPage" />
              {/* <span>Remember me</span> */}
              <label htmlFor="remembersignupPage">
                I agree to the terms and condition
              </label>
            </div>
            <button onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;