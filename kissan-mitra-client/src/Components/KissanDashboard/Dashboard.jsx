import "./Dashboard.css";
import React, { useEffect } from 'react'
import Cropcard from './CropCard/CropCard/Cropcard';
import LandInfo from './LandInfo/LandInfo';
import Navbar from "../Navbar/Navbar";

import Auth from "../../functinos/Auth";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {

    const fetch = async () => {
      try {
        const x = await Auth();
        // console.log(x);
        if(!x){
          navigate("/login");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);
  return (
    <>
    <div id='nav'>
      <Navbar/>
    </div>
    <div className='dashboard-container'>
        <div className="cropcard-component-dash">
            <Cropcard/>
        </div>
        <div className="dashboard-grid2">
            <LandInfo/>
        </div>
    </div>
    </>
  )
}

export default Dashboard;