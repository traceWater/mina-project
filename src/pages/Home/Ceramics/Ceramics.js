import React from "react";

//styles
import "./Ceramics.css";

function Ceramics() {
  return (
    <div className="ceramics-container">
      <img
        src={process.env.PUBLIC_URL + "/Home_Images/shop_now1.png"}
        alt="ceramics"
      />
    </div>
  );
}

export default Ceramics;
