import './Navbar.css'
import React from 'react'
import { ImHome2 } from "react-icons/im";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div id='left-side'>
                <div id='home-icon'>
                    <ImHome2 />
                </div>
            </div>
            <div id='right-side'></div>
        </div>
    )
}
