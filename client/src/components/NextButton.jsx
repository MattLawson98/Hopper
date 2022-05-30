import React from "react";
import "./NextButton.scss";

export default function NextButton({ click }) {
  return (
    <button className="nextButton" onClick={click}>
      Next Bar!
    </button>
  );
}
