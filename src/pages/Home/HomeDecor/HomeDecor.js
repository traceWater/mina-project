import React from "react";
import { Link } from "react-router-dom";

//styles
import "./HomeDecor.css";

function HomeDecor() {
  return (
    <div className="home-decor-container">
      <img
        src={process.env.PUBLIC_URL + "/Home_Images/shop_now2.png"}
        alt="home decor"
      />
      <div className="home-decor-content-container">
        <h1 className="home-decor-title">Home decor items</h1>
        <p className="home-decor-content">Find your new favorite pieces.</p>
        <Link to="/shop" className="home-decor-link">
          Shop now
        </Link>
      </div>
    </div>
  );
}

export default HomeDecor;
