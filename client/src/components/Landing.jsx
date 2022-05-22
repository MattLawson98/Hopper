import React from "react";
import "./Landing.scss";

export default function Landing({onClick}) {
  return (
    <div className="landing" onClick={onClick}>
      <div class="cater3-movingBG">
        <div class="flyinTxtCont">
          <div class="flyIn lineOne">Bar Hopper</div>
          <div class="flyIn lineTwo"></div>
          <div class="flyIn lineThree"></div>
        </div>
      </div>
    </div>
  );
}
