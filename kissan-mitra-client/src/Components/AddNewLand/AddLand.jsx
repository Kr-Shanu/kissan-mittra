import React, { useEffect, useState } from "react";
import "./AddLand.css";
import axios from "axios";
import Cookies from "js-cookie";

import Auth from "../../functinos/Auth";
import { useNavigate } from 'react-router-dom';

import {
  Autocomplete,
  GoogleMap,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

const AddLand = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [markerLoc, setMarkerLoc] = useState(null);

  useEffect(() => {
    if (map && markerLoc) {
      map.panTo(markerLoc);
      // map.setZoom(13);
    }
  }, [onPlaceChanged]);

  useEffect(() => {
    addLocationInhook();
  }, [markerLoc])
  

  const navigate = useNavigate();
  useEffect(() => {

    const fetch = async () => {
      try {
        const x = await Auth();
        if(!x){
          navigate("/login");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  const [searchResult, setSearchResult] = useState("");
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
    libraries,
  });
  const [formData,setFormData] = useState({
    user_id: Cookies.get("id"),
    fieldName:"",
    landArea:"",
    addfield:"",
    location:"",
    description:"",
  })

  if (!isLoaded) {
    return "Map is Loading";
  }

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }
  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      if (!place.geometry) {
        alert("Choose from the options.");
        return;
      }
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();
      setMarkerLoc({
        lat: lat,
        lng: lng,
      });
      map.setZoom(16);
    } else {
      alert("Please Select from the list below.");
    }
  }


  //DELETE THE BELOW COMMENT BEFORE PRODUCTION SINCE USELESS
  // function createPost() {
  //   axios
  //     .post("http://localhost:5000/api/test", {
  //       title: "Hello World!",
  //       body: "This is a new post."
  //     })
  //     .then((res) => {
  //       // setPost(response.data);
  //       console.log(res.data);
  //     });
  // }

  function addLocationInhook(){
    setFormData({...formData,location:markerLoc});
  }

  const handlechange = (e)=>{
    setFormData({...formData,[e.target.name]:[e.target.value]});
  }

  const handlesubmit = ()=>{
    axios.post("http://localhost:5000/api/addland",formData).then((res)=>{
      navigate("/");
    })
  }

  return (
    <div className="addLand">
      <div className="addLandForm">
        <h1>Add Your Field</h1>
        <div className="h-rule">
        <hr />
        <span>.</span>
        <hr />
        </div>
        <form action="">
          <div>
            <label htmlFor="fieldName-addland">Enter Name</label>
            <input
              id="fieldName-addland"
              type="text"
              placeholder="Enter the name of the Field"
              name="fieldName"
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="area-addland">Area in Acres</label>
            <input
              type="number"
              id="area-addland"
              placeholder="Enter the area"
              name="landArea"
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="type-addfield">Field Type</label>
            <input type="text" id="type-addfield" placeholder="Field Type" name="addfield" onChange={handlechange}/>
          </div>
          <div className="autocompleteInput">
            <label htmlFor="location-addland">Location</label>
            <Autocomplete
              id="location-addland"
              onPlaceChanged={onPlaceChanged}
              onLoad={onLoad}
            >
              <input
                type="text"
                placeholder="Enter the Locality and select on the map."
              />
            </Autocomplete>
          </div>
          <div className="grid-row-desc">
            <label htmlFor="discription-addland">Description</label>
            <textarea
              name="description"
              onChange={handlechange}
              id="discription-addland"
              cols="50"
              rows="5"
            ></textarea>
          </div>
          <div className="btns-addland">
            <button
              className="submit-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Cancel
            </button>
            <button
              className="submit-btn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // createPost();
                handlesubmit();
              }}
            >
              Add Land
            </button>
          </div>
        </form>
      </div>
      <GoogleMap
        center={{ lat: 26.846098, lng: 80.946 }}
        zoom={4}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={(map) => setMap(map)}
        onClick={(map) => {
          let lat = map.latLng.lat();
          let lng = map.latLng.lng();
          setMarkerLoc({
            lat: lat,
            lng: lng,
          });
        }}
        clickableIcons={false}
      >
        {markerLoc === null ? (
          <></>
        ) : (
          <>
            <MarkerF
              position={markerLoc}
              onPositionChanged={(e) => {
                console.log("inside pan");
                console.log(markerLoc);
              }}
            />
          </>
        )}
        {console.log(markerLoc)}
      </GoogleMap>
    </div>
  );
};

export default AddLand;
