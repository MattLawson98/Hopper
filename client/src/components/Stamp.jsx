import React from "react";
import "./Stamp.scss";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ShareIcon from "@mui/icons-material/Share";

// Smaller version of venue info that is used in history container
export default function Stamp({ history }) {

  const barImage = (reference) => {
    return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&sensor=false&maxheight=1000&maxwidth=1000&key=${process.env.REACT_APP_GOOGLE_PHOTO_KEY}`;
  };

  return (
    <div className="stamp--container">
      {history.map((bar, index) => {
        const barPhoto = barImage(bar.photos[0].photo_reference);

        const CopyHistory = () => {
          navigator.clipboard.writeText(
            `https://www.google.com/maps/search/?api=1&query=${bar.vicinity}&query_place_id=${bar.place_id}`
          );
        };

        return (
          <div key={bar.name} className="stamp">
            <div className="stamp--image">
              <img src={barPhoto} alt="bar" />
            </div>
            <div className="stamp--name">{bar.name}</div>
            <div className="stamp--icon">
              <div className="stamp--icon--share" onClick={CopyHistory}>
                <ShareIcon />
              </div>
              <div className="stamp--icon--map">
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
        );
      })}
    </div>
  );
}
