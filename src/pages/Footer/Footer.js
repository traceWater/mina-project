import React from "react";

//react router
import { Link } from "react-router-dom";

//styles
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-container">
        <div className="brand-container">
          <img
            className="brand"
            src={process.env.PUBLIC_URL + "/Nav_Images/MINA.png"}
            alt="footer logo"
          />
        </div>
        <div className="social-media">
          <img
            className="icon"
            src={process.env.PUBLIC_URL + "/Footer_Images/twitter.png"}
            alt="twitter"
          />
          <img
            className="icon"
            src={process.env.PUBLIC_URL + "/Footer_Images/facebook.png"}
            alt="facebook"
          />
          <img
            className="icon"
            src={process.env.PUBLIC_URL + "/Footer_Images/instagram.png"}
            alt="instagram"
          />
        </div>
        <p style={{ fontSize: "10px" }}>
          icons provided by{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://icons8.com"
          >
            Icons8
          </a>
        </p>
      </div>
      <div className="policy-container">
        <ul>
          <li>
            <Link className="policy-link" to="/">
              Payments & Delivery
            </Link>
          </li>
          <li>
            <Link className="policy-link" to="/">
              Returns
            </Link>
          </li>
          <li>
            <Link className="policy-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <h6 className="policy-title">Powered by Zyro.com</h6>
      </div>
    </div>
  );
}

export default Footer;
