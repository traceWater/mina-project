import React from "react";

//styles
import "./Newsletter.css";

function Newsletter() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newsletter-container">
      <img
        src={process.env.PUBLIC_URL + "/Home_Images/signup.png"}
        alt="sign-up"
      />
      <div className="newsletter-content-container">
        <h1 className="newsletter-title">Sign-up for our newsletter</h1>
        <input
          className="newsletter-input"
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
        />
        <button className="newsletter-button" onSubmit={handleOnSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
