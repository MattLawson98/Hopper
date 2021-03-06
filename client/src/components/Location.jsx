import React from "react";
import "./Location.scss";
import { useState } from "react";
import Autocomplete from "./Autocomplete";

// Location form that shows on main page
export default function Location(props) {
  const [name, setName] = useState("");
  const [autoComplete, setAutocomplete] = useState(true);

  const handleAutocomplete = (text) => {
    setName(text);
    setAutocomplete(false);
  };

  const handleChange = (e) => {
    setAutocomplete(true);
    setName(e.target.value);
  };

  return (
    <main className="location">
      <div className="location--name"> WELCOME!</div>
      <label>
        <div className="location--intro">
          Before we begin, please enter the location or area you would like to
          start the trip:
        </div>
        <div className="location--textbox">
          <input autoFocus type="text" value={name} onChange={handleChange} />
          {autoComplete && (
            <Autocomplete searchText={name} setName={handleAutocomplete} />
          )}
        </div>
      </label>
      <button
        className="location--button"
        onClick={async () => {
          await props.locationSearch(name);
        }}
      >
        Select
      </button>
    </main>
  );
}
