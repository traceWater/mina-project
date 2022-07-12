import React from "react";

//styles
import "./Instagram.css";

function Instagram() {
  return (
    <div className="instagram-container">
      <h1 className="instagram-title">Follow us on Instagram</h1>
      <div className="instagram-image-container">
        <img
          className="instagram-image"
          src={process.env.PUBLIC_URL + "/Home_Images/instagram1.png"}
          alt="tea pot"
        />
        <img
          className="instagram-image"
          src={process.env.PUBLIC_URL + "/Home_Images/instagram2.png"}
          alt="one eye"
        />
        <img
          className="instagram-image"
          src={process.env.PUBLIC_URL + "/Home_Images/instagram3.png"}
          alt="tea cup"
        />
      </div>
      <a
        className="instagram-link"
        href="https://www.instagram.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        @mina_studio
      </a>
    </div>
  );
}

export default Instagram;
