import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      {/* <div className="container"> </div> */}
      <span id="aboutMinaTitle">About Mina</span>
      <div className="aboutHeroContainer">
        <img
          id="aboutPinkLeafImage"
          src={
            process.env.PUBLIC_URL + "/AboutImages/Frame-YanWlX24wOIg2vwL.avif"
          }
          alt="HeroImage"
        />
      </div>
      <div id="aboutTaglineBrandBorn">
        Mina is a brand born out of love for ceramics, vivid <br />
        colours and passion for life.
      </div>
      {/* /////////////////////////////////////////////// */}
      <div className="aboutFriendTextWrapper">
        <img
          id="aboutFriendsImage"
          src={
            process.env.PUBLIC_URL +
            "/AboutImages/pexels-cottonbro-YKb0eZ64DRiPyZoD.webp"
          }
          alt="FriendsImage"
        />
        <div>
          <p id="aboutTitleAlex"> Alex & Laura </p>
          <p id="aboutTextAlexLaura">
            Two creative minds that came together at art school, Alex and Laura
            founded Mina with a shared passion for design and sustainability.
            For them, success is more than just about having a bestselling
            product.
            <br />
            <p />
            Every piece in our store has been created with love by Alex and
            Laura. They take inspiration from the world around them when it
            comes to shapes, colors, and the clay that they work with.
            <br /> <p />
            Join us on our mission to fill every home with beautiful,
            sustainable décor.
          </p>
        </div>{" "}
      </div>
      <div className="aboutImageGoldWrapper">
        <div id="aboutImageGold">
          <img
            id="aboutImageGold"
            src={
              process.env.PUBLIC_URL +
              "/AboutImages/Rectangle-YrDPEe422ktklvXj.avif"
            }
            alt="GoldPlantImage"
          />
        </div>
        <div id="aboutSustainability">
          Sustainability
          <p id="aboutOurThoughts">
            Our thoughts about the planet impact everything we do, from the clay
            we use to the packaging we provide. Find out how we stay
            responsible.
          </p>{" "}
          <button id="aboutReadButton"> Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
