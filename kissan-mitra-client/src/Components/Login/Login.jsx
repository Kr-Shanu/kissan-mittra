import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import cookies from "js-cookie";
import Auth from "../../functinos/Auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
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
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setFormData({ ...FormData, [e.target.name]: [e.target.value] });
  };

  const setCookie = (c) => {
    const jwt = c.jwt;
    const id = c.id;
    cookies.set("jwt", jwt,{ expires: 365 });
    cookies.set("id", id,{ expires: 365 });
    navigate("/");
  };

  const wrongCredAction = () => {
    alert("Wrong Email or password");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", FormData).then((res) => {
      console.log(res.data);
      const data = res.data;
      if (data.loginMatched) {
        setCookie(data);
      } else {
        wrongCredAction();
      }
    });
  };

  // //temp
  // const temp = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:5000/api/authcheck", {
  //       jwt: cookies.get("jwt"),
  //       id: cookies.get("id"),
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       const data = res.data;
  //       if (data.loginMatched) {
  //         setCookie(data);
  //       } else {
  //         wrongCredAction();
  //       }
  //     });
  // };

  return (
    <div className="Loginpage-container">
      <div className="loginpage-gridleft">
        {/* <img src="" alt="kissanImage" /> */}
      </div>
      <div className="loginpage-gridright">
        <div className="loginInsidecontent">
          <div className="loginFormHeader-loginpage">
            <div>Sign in</div>
            <span>
              or <a href="signup">create an account</a>
            </span>
          </div>
          <input
            className="input-loginpage"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handlechange}
          />
          <input
            name="password"
            type="password"
            className="input-loginpage"
            placeholder="Password"
            onChange={handlechange}
          />
          <div className="loginformbottom-loginpage">
            <div className="checkboxloginpage">
              <input type="checkbox" name="remember" id="rememberLoginPage" />
              {/* <span>Remember me</span> */}
              <label htmlFor="rememberLoginPage">Remember me</label>
            </div>
            <button
              onClick={(e) => {
                handlesubmit(e);
                // temp(e);
              }}
            >
              Sign in
            </button>
          </div>
          <a href="#">Forgot your password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
