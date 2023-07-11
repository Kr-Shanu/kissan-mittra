import './LandCard.css'
import React from 'react'

export default function LandCard(props) {

    const {name, image, address} = props.data;

    return (
        <>
            <div className="land-card-body">
                <div id='card-heading'>
                    <h2>{name}</h2>
                </div>
                <div id='card-image'>
                    <img alt={name} src={image}></img>
                </div>
                <div id='card-address'>
                    <p>{address}</p>
                </div>
            </div>
        </>
    )
}
