import './ZameenInfo.css'
import React from 'react'
import InfoCards from '../InfoCards/InfoCards'

export default function ZameenInfo() {
    return (
        <>
            <div id='heading'>
                <h1>Zameen Name</h1>
            </div>

            <div className='mainContent'>

                <div id='info-container'>

                    <div>
                        <InfoCards
                            heading="Fertiliser"
                            src="https://agra.org/news/wp-content/uploads/2019/12/1.jpg"
                            info="Add this fertiliser"
                        />
                    </div>
                    <div>
                        <InfoCards
                            heading="Pesticides"
                            src="https://media.istockphoto.com/id/1253886250/photo/farmer-spraying-vegetable-green-plants-in-the-garden-with-herbicides-pesticides-or.jpg?s=612x612&w=0&k=20&c=aTjsSRDB1BeTq3_AeujmBjc0l0nltsi1wHbSUBG1n5Q="
                            info="Add this persticide"
                        />
                    </div>
                    <div>
                        <InfoCards
                            heading="Water Requirement"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4nuU3LBLX6g2wo7SfFFM7hLFp6M8kUFBFbO4jOC9qzsUkqzkdIV6VtA1xDlH51UZ_G8&usqp=CAU"
                            info="Water requirement left"
                        />
                    </div>

                    <div>
                        <InfoCards
                            heading="Weather Info"
                            src="https://pragativadi.com/wp-content/uploads/2022/07/SAVE_20220703_084840.jpg"
                            info="Weather if fine for next 10 days"
                        />
                    </div>
                    <div>
                        <InfoCards
                            heading="Harvesting time"
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Agriculture_in_Volgograd_Oblast_002.JPG"
                            info="Harvesting will be done in month october"
                        />
                    </div>
                    <div>
                        <InfoCards
                            heading="Market Price Info"
                            src="https://static.toiimg.com/thumb/msid-99257297,width-400,resizemode-4/99257297.jpg"
                            info="Market price of the crop is 500"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}
