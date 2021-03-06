import React from "react";

//react router
import { Link } from "react-router-dom";

//styles
import "./Ceramics.css";

function Ceramics() {
  return (
    <div className="ceramics-container">
      <img
        src={process.env.PUBLIC_URL + "/Home_Images/shop_now1.png"}
        alt="ceramics"
      />
      <div className="ceramics-content-container">
        <h1 className="ceramics-title">Handmade ceramics</h1>
        <p className="ceramics-content">Painted clay ceramics made love</p>
        <Link to="/shop" className="ceramics-link">
          Shop now
        </Link>
      </div>
    </div>
  );
}

export default Ceramics;
