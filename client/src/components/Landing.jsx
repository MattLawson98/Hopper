import React, { useState } from "react";
import "./Landing.scss";

export default function Landing() {
  const [isHidden, setIsHidden] = useState(false);

  const hiddenClass = isHidden ? "hidden" : ""

  return (
    <div className= {`landing ${hiddenClass}`} onClick={() => setIsHidden(true)}>
      
      <div className="cater3-movingBG">
        <div className="flyinTxtCont">
          <div className="flyIn lineOne">Hopper</div>
        </div>
      </div>
      </div>
  );
}
