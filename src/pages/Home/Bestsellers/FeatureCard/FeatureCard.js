import React from "react";

//styles
import "./FeatureCard.css";

function FeatureCard({ title, image, price }) {
  return (
    <div className="feature-container">
      <div className="feature-image-container">
        <img src={image} alt={title} />
      </div>
      <h6 className="feature-title">{title}</h6>
      <p className="feature-price">{price}</p>
    </div>
  );
}

export default FeatureCard;
