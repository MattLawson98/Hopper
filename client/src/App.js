import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import { CardFlip } from "./components/Card";
import TripContainer from "./components/TripContainer";
import Location from "./components/Location";
import useChangeState from "./components/hooks/useChangeState";
import Landing from "./components/Landing";
import NextButton from "./components/NextButton";

export default function App() {
  const [found, setFound] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [bar, setBar] = useState({});
  const [history, setHistory] = useState([]);
  const [venueNum, setVenueNum] = useState(0);

  let newResults = [];
  const { flip, isFlipped } = useChangeState();

  // Handles all actions resulting from clicking "Next Bar" button. Card is flipped to face down, a new pub is selected from newResults array, card with new pub flips to face up
  function click() {
    flip();
    const currentHistory = [...history, bar];
    setHistory(currentHistory);
    newResults = searchResults;
    venue = newResults[RandNum(newResults)];
    newResults.splice(venueNum, 1);
    setSearchResults(newResults);
    setTimeout(flip, 2000);
    setTimeout(() => setBar(venue), 1000);
  }

  const userLogin = function (loginInfo, cb) {
    const data = {
      email: loginInfo.email,
      password: loginInfo.password,
    };

    return axios.post("/login", data).then();
  };

  let lat;
  let lng;

  // Axios request to retrieve geolocation data for location and return its lat and long
  const locationSearch = async (name) => {
    const options = {
      method: "GET",
      url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
      params: { address: name, language: "en" },
      headers: {
        "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_GEOCODING_KEY}`,
      },
    };

    await axios
      .request(options)
      .then(async function (response) {
        lat = response.data.results[0].geometry.location.lat;
        lng = response.data.results[0].geometry.location.lng;
        console.log(lat, lng);
        setFound(true);
        Search();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  let venue;
  let result = [];

  // Used for the initial search when finding an array of bars based on the given location, and displays the first bar after clicking "Select" on location form
  const Search = () => {
    const options = {
      method: "GET",
      url: "https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json",
      params: {
        location: `${lat},${lng}`,
        radius: "1000",
        language: "en",
        keyword: "pub",
        maxprice: "3",
      },
      headers: {
        "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_RapidAPI_Key}`,
      },
    };

    axios
      .request(options)
      .then(function ({ data: { results } }) {
        setSearchResults(results);
        venue = results[RandNum(results)];
        setBar(venue);
        newResults = results;
        newResults.splice(venueNum, 1);
        setSearchResults(newResults);
        flip();
      })
      .catch(function (error) {
        console.error(error);
      });

    return result, newResults;
  };

  // Used to select random bar from array of bars
  const RandNum = (results) => {
    let max = results.length - 1;
    setVenueNum(Math.floor(Math.random() * max));
    console.log(venueNum);
    return venueNum;
  };

  return (
    <div className="App">
      <Header userLogin={userLogin} />

      <Landing />

      <main>
        {found ? (
          <>
            <CardFlip bar={bar} isFlipped={isFlipped} click={click} />
            <NextButton click={click} />
          </>
        ) : (
          <Location
            setFound={setFound}
            setSearchResults={setSearchResults}
            locationSearch={locationSearch}
          />
        )}
        <TripContainer history={history} />
      </main>
    </div>
  );
}
