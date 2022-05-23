import React, {useState} from "react";
import axios from "axios";

export default function Autocomplete({ searchText, setName }) {

  const text = searchText;

  const [address, setAddress] = useState("Vancouver");

  const handleChange = (value) => {
    setAddress(value);
  }

  const options = {
    method: 'GET',
    url: 'https://google-maps28.p.rapidapi.com/maps/api/place/queryautocomplete/json',
    params: {input: text, language: 'en'},
    headers: {
      'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
      'X-RapidAPI-Key': `process.env.REACT_APP_LUCUS_API`
    }
  };
  
  axios.request(options).then(function (response) {
    setAddress(response.data.predictions[0].description);
  }).catch(function (error) {
    console.error(error);
  });

    return (
      <div className="App" value={address} onChange={handleChange}>
      {address !== "" ? (
        <div>
          <button onClick={() => setName(address)}>
            <h2>
            {address}
          </h2>
          </button>
        </div>
      ) : (
        <div/>
      )}
    </div>
  );
}