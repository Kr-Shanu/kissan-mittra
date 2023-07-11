import React, { useEffect } from 'react';
import cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
      cookies.remove("id");
      cookies.remove("jwt");
      navigate("/");
    }, [])
    
  return (
    <></>
  )
}

export default Logout