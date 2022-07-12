import React from "react";

//react router
import { Link } from "react-router-dom";

//styles
import "./AboutMinaCard.css";

function AboutMinaCard({ title, image, content, page }) {
  return (
    <div className="about-mina-card">
      <div className="about-mina-img-container">
        <img src={image} alt={title} />
      </div>
      <h3 className="about-mina-title">{title}</h3>
      <p className="about-mina-content">{content}</p>
      <Link to={`/${page}`} className="about-mina-link">
        Learn more
      </Link>
    </div>
  );
}

export default AboutMinaCard;
