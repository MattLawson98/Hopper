import React from "react";
import "./Venue.scss";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ShareIcon from "@mui/icons-material/Share";

// Main display for venue and it's info
export default function Venue({ bar }) {
  const Copy = () => {
    navigator.clipboard.writeText(
      `https://www.google.com/maps/search/?api=1&query=${bar.vicinity}&query_place_id=${bar.place_id}`
    );
  };

  // Simple function to display price levels for venue
  const priceLevel = (bar) => {
    if (bar === 1) {
      return "$";
    } else if (bar === 2) {
      return "$$";
    } else if (bar === 3) {
      return "$$$";
    } else if (bar === 4) {
      return "$$$$";
    } else {
      return "N/A";
    }
  };

  return (
    <main className="venue">
      {console.log(bar)}
      <div className="venue--img">
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${bar.photos[0].photo_reference}&sensor=false&maxheight=1000&maxwidth=1000&key=${process.env.REACT_APP_GOOGLE_PHOTO_KEY}`}
          alt=""
        />
      </div>

      <div className="venue--name">{bar.name}</div>
      <div className="data">
        <div className="data--left">
          <div className="data--values">
            <strong>Price:</strong>&nbsp;&nbsp;{priceLevel(bar.price_level)}
          </div>
          <div className="data--values">
            <strong>Rating:</strong>&nbsp;&nbsp;{bar.rating}/5
          </div>
          <div className="data--values--reviews">
            <strong>Total Reviews:</strong>&nbsp;&nbsp;{bar.user_ratings_total}
          </div>
        </div>
        <div className="data--right">
          <div className="data--right--share" title="Copy" onClick={Copy}>
            <ShareIcon />
          </div>
          <div className="data--right--map">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${bar.vicinity}&query_place_id=${bar.place_id}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MapOutlinedIcon />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
