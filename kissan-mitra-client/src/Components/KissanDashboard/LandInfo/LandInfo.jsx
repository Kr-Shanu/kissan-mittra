import './LandInfo.css'
import React from 'react'
import LandCard from './LandCard/LandCard'

export default function LandInfo() {


    // making some psuedo land
    const psuedoLand = [
        {
            image: "https://righttoinformation.wiki/_media/guide/applicant/application/sample/rti-land-record.jpg",
            name: "First",
            address: "Near Boring Road"
        },
        {
            image: "https://www.indiafilings.com/learn/wp-content/uploads/2019/01/Punjab-Land-Mutation.jpg",
            name: "Second",
            address: "Near Boring Road"
        },
        {
            image: "https://assets.site-static.com/userFiles/1681/image/uploads/agent-1/buy-sell-land.jpg",
            name: "Third",
            address: "Near Boring Road"
        },
        {
            image: "https://millmanland.com/wp-content/uploads/2020/05/land-survey-vs-plot-plan.jpg",
            name: "Fourth",
            address: "Near Boring Road"
        },
        {
            image: "https://climateanalytics.org/media/ricardo-gomez-angel-ltdrvsoylla-unsplash.jpg",
            name: "Fifth",
            address: "Near Boring Road"
        },
        {
            image: "https://st4.depositphotos.com/8147276/20576/i/600/depositphotos_205764168-stock-photo-hokkaido-beautiful-agricultural-area-japan.jpg",
            name: "Sixth",
            address: "Near Boring Road"
        }
    ]




    return (
        <>
            <div className='land-info-main-container'>

                <div id='heading'>
                    <h1>Land Info</h1>
                </div>

                <div id='cards-container'>

                    {
                        psuedoLand.map((data, index) => {
                            return(
                                <LandCard 
                                    data = {data}
                                    key = {index}
                                />
                            )
                        })
                    }

                </div>

                <div id='add-land'>
                    <a href="/newland">
                        <button >
                            Add New Land
                        </button>
                    </a> 
                </div>

            </div>
        </>
    )
}
