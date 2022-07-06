import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      About
      <div className="container">
        <span id="aboutMinaTitle">About Mina</span>

        <div className="aboutHeroContainer">
          <img
            id="aboutPinkLeafImage"
            src={
              process.env.PUBLIC_URL +
              "/AboutImages/Frame-YanWlX24wOIg2vwL.avif"
            }
            alt="HeroImage"
          />
          <div id="aboutTaglineBrandBorn">
            Mina is a brand born out of love for ceramics, vivid <br />
            colours and passion for life.
          </div>
          <div>
            <img
              id="aboutFriendsImage"
              src={
                process.env.PUBLIC_URL +
                "/AboutImages/pexels-cottonbro-YKb0eZ64DRiPyZoD.webp"
              }
              alt="FriendsImage"
            />
          </div>
        </div>
        <div className="textWrapper">
          <div id="aboutTitleAlex">
            <h1>Alex & Laura</h1>

            <p id="aboutTextAlexLaura">
              Two creative minds that came together at art school, Alex and
              Laura founded Mina with a shared passion for design and
              sustainability. For them, success is more than just about having a
              bestselling product.
              <br />
              Every piece in our store has been created with love by Alex and
              Laura. They take inspiration from the world around them when it
              comes to shapes, colors, and the clay that they work with.
              <br />
              Join us on our mission to fill every home with beautiful,
              sustainable décor.
            </p>
            <div id="aboutImageGold">
              <img
                id="aboutPinkLeaf"
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
                Our thoughts about the planet impact everything we do, from the
                clay we use to the packaging we provide. Find out how we stay
                responsible.
              </p>
            </div>
          </div>
          <button id="aboutReadButton"> Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
