import './infoCards.css'
import React from 'react'

export default function InfoCards(props) {
    return (
        <div id='info-main-container'>
            <div>
                <h3>{props.heading}</h3>
            </div>
            <div id='image'>
                <img
                    alt='infoImage'
                    src={props.src}
                    height="180px"
                    width="200px"
                >
                </img>
            </div>
            <div id='info'>
                <p>{props.info}</p>
            </div>

        </div>
    )
}
