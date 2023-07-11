import './Zameen.css'
import React from 'react'

export default function ZameenCard(props) {
    return (
        <div className='zameen-container'>
            <div id='location'>
                <div>

                    <img
                        alt='locationIcon'
                        width="48px"
                        src='https://cdn1.iconfinder.com/data/icons/icons-for-a-site-1/64/advantage_nearby-4096.png'>
                    </img>

                </div>
                <div>
                    <p>Near chapa kal</p>
                </div>
            </div>
            <div>
                <h1>Zameen Info</h1>
            </div>
            <div>
                <img alt='wheat' width="80px" src='https://cdn0.iconfinder.com/data/icons/free-skycons-mix-april-1/128/yumminky-skycons-mix-01-4096.png'></img>
            </div>
        </div>
    )
}