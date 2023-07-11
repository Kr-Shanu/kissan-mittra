import React, { useEffect, useState } from "react";
import CropPage from "../CropPage/CropPage";
import "./Cropcard.css";

const cropData = [
  {
    cropType: "rice",
    landName: "alphaLand",
    fieldSize: 1.5,
  },
  {
    cropType: "pulse",
    landName: "betaLand",
    fieldSize: 0.3,
  },
  {
    cropType: "rice",
    landName: "zetaLand",
    fieldSize: 2,
  },
  {
    cropType: "sunflower",
    landName: "fleetaland",
    fieldSize: 0.5,
  },
];

const Cropcard = () => {
  const [crppagePopup, setcrppagePopup] = useState(null);

  const [landArea, setlandArea] = useState([
    {
      cropType: "rice",
      val: 2.5,
    },
    {
      cropType: "sunflower",
      val: 3.4,
    },
    {
      cropType: "pulse",
      val: 1,
    },
    {
      cropType: "wheat",
      val: 3,
    },
  ]);

  // useEffect(() => {
  //   cropData.map((data) => {
  //     if (data.cropType === "rice") {
  //       return setlandArea(
  //         landArea.map((area, i) => {
  //           if (area.cropType === "rice") {
  //             area.val += data.fieldSize;
  //           }
  //         })
  //       );
  //   setlandArea[0].val += data.fieldSize;
  // } else if (data.cropType === "sunflower") {
  //   setlandArea[1].val += data.fieldSize;
  // } else if (data.cropType === "pulse") {
  //   landArea[2].val += data.fieldSize;
  // } else if (data.cropType === "wheat") {
  //   landArea[3].val += data.fieldSize;
  // }
  // });
  // }, []);

  return (
    <>
      {crppagePopup && (
        <CropPage
          setcrppagePopup={setcrppagePopup}
          crppagePopup={crppagePopup}
        />
      )}
      <div className="cropCard-container">
        <div className="headingcropcard">
          <div>Cropwise Yield</div>
        </div>
        <div className="cropcard-details-container">
          {landArea.map((data, index) => {
            return (
              <div
                className="cropcard-details"
                onClick={() => {
                  setcrppagePopup(data.cropType);
                }}
                key={index}
              >
                <div className="cropname-corpcard">{data.cropType}</div>
                <div className="totalarea-cropcard">{data.val} Acres</div>
                <div className="circle"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cropcard;
