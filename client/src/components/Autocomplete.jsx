import React, {useState} from "react";
import "../styles/Autocomplete.scss";
import axios from "axios";
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
      // 'X-RapidAPI-Key': `${process.env.REACT_APP_LUCUS_API}`
    }
  };
  
  axios.request(options).then(function (response) {
    setAddress(response.data.predictions[0].description);
  }).catch(function (error) {
    console.error(error);
  });

    return (
      <div className="autocomplete" value={address} onChange={handleChange}>
      {address !== "" ? (
          <button onClick={() => setName(address)}>
              <LocationOnIcon/>
              {address}
          </button>
      ) : (
        <div/>
      )}
    </div>
  );
}