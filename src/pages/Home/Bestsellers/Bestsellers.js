import React from "react";

//components
import FeatureCard from "./FeatureCard/FeatureCard";

//list
import { bestSellers } from "./BestsellersList";

//react router
import { Link } from "react-router-dom";

//styles
import "./Bestsellers.css";

function Bestsellers() {
  const cardMap = bestSellers.map((item) => {
    return (
      <FeatureCard
        key={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
      />
    );
  });

  return (
    <div className="best-sellers-container">
      <h3 className="best-sellers-title">Our bestsellers</h3>
      <div className="best-sellers-content">{cardMap}</div>
      <div className="link-container">
        <Link to="/shop" className="best-sellers-link">
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export default Bestsellers;
