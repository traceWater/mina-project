import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </div>
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
