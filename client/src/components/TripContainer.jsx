import React from "react";
import Stamp from "./Stamp";
import "./TripContainer.scss";

// Holds history info for bar crawl. Stamps appear in container when "Next Bar" is clicked
export default function TripContainer({ history }) {
  return (
    <div className="tripContainer">
      {history.length > 0 ? (
        <Stamp history={history} />
      ) : (
        "You have no trips planned so far!"
      )}
    </div>
  );
}
