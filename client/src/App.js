import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import { CardFlip } from "./components/Card";
import TripContainer from "./components/TripContainer";
import Location from "./components/Location";
import { Flip, Splitscreen } from "@mui/icons-material";
import useChangeState from "./components/hooks/useChangeState"


export default function App() {
  const [found, setFound] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [bar, setBar] = useState({});
  const [history, setHistory] = useState([]);
  let newResults = [];
  const {flip,isFlipped} = useChangeState();

 
  function click() {
    flip();
    const currentHistory = [...history, bar];
    console.log("******* CURRENT HISTORY STATE **********")
    console.log(currentHistory);
    setHistory(currentHistory);
    venue = searchResults[RandNum(searchResults)];
    setBar(venue);
    setTimeout(flip,3000);
  }

  const userLogin = function (loginInfo, cb) {
    console.log("CB!", cb);

    const data = {
      email: loginInfo.email,
      password: loginInfo.password,
    };

    return axios.post("/login", data)
      .then()
  };

  let lat;
  let lng;

  const  locationSearch = async (name) => {

    const options = { 
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {address: name, language: 'en'},
      headers: {
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_GEOCODING_KEY}`
      },
    };
    
      await axios.request(options).then(async function  (response) {
        
        console.log(response.data);
        lat = (response.data.results[0].geometry.location.lat)
        lng = (response.data.results[0].geometry.location.lng)
        console.log(lat,lng);
        setFound(true);
        Search()
    }).catch(function (error) {
      console.error(error);
    }); 
    
  }
  let venue;
  let result = [];
  // let photo;
  const Search =  () => {
    console.log(lat, lng);

    const options = {
      method: 'GET',
      url: 'https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json',
      params: {
        location: `${lat},${lng}`,
        radius: '1000',
        language: 'en',
        keyword: 'pub'
      },
      headers: {
        "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_RapidAPI_Key}`,
      },
    };

     axios.request(options).then(function ({data:{results}}) {
      setSearchResults(results);
      console.log(results);
      venue =(results[RandNum(results)]);
      // photo = (venue.photos[0].photo_reference);
      // setTimeout(grabPhoto,5000);
      console.log("Venue:",venue);
      setBar(venue);
      newResults = results;
      flip();
    }).catch(function (error) {
      console.error(error);
    });
    
    return (result, newResults);
  };

  const RandNum = (results) => {
    let max =results.length;
    // console.log(max);
    let venueNum = Math.floor(Math.random() * max);
    // console.log(venueNum);
    return venueNum;
  };


  return (
    <div className="App">
      <Header userLogin={userLogin} />
      <div className="main">
        {found ? (
          <CardFlip bar={bar} isFlipped={isFlipped} click={click} />
        ) : (
          <Location setFound={setFound} setSearchResults={setSearchResults}  locationSearch={locationSearch} />
        )}
        <button onClick={click}>Next Bar!</button>
        <TripContainer history={history}/>
      </div>
    </div>
  );
}
