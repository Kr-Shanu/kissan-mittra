import React from "react";
import "./CropPage.css";

const CropPage = (props) => {
  const cropDesc = Array.from({ length: 10 }, (_, index) => {
    return {
      fieldName: "alpha khet",
      id: `khet${index}`,
      area: "25acres",
      stage: "sowing",
      timettonextStage: "50days",
      waterneededBesideRainfall: "500litres",
    };
  });

  return (
    <>
      <div
        className="backgroundModelcropPage"
        onClick={() => {
          props.setcrppagePopup(null);
        }}
      ></div>
      <div className="croppage-container">
        <div className="croppage-heading-container">
          <div className="croppage-heading">Fields with {props.crppagePopup}</div>
          <div className="misc-info">
            <div>Total Land Area : {"3.5 Acres"}</div>
            <div>Total Estimated MSP : {"Rs20000"}</div>
          </div>
        </div>
        {/* <div className="croppage-cropstatus"></div> */}
        <div className="croppagecardcontainer">
          {cropDesc.map((data, index) => {
            return (
              <div className="cropPageCard" key={data.id}>

                <div className="croppagecard-row1">
                  <span>{data.fieldName}</span>
                  <div className="circle">
                    {data.area}
                  </div>
                </div>
                Water Needed <br />
                msrp <br />
                stage <br />
                storm alert <br />
                weather <br />
                field type <br />
                description
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CropPage;
