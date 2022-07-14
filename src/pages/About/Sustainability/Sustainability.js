import React from "react";
import "./Sustainability.css";

function Sustainability() {
  return (
    <div>
      <span id="sustainabilitySustainabilityTitle">Sustainability</span>
      <img
        id="sustainabilityHeroLeafImage"
        src={process.env.PUBLIC_URL + "/AboutImages/Frame-AGBpDkZaG5cRpbaw.png"}
        alt="HeroImage"
      />
      <div id="sustainabilityTaglineWeCare">
        We care about our planet. For this reason, Sustainability aims to
        <br /> be operating sustainably and ethically at every level.
      </div>
      <div className="sustainabilityGridContainer">
        <img
          id="sustainabilityWorkingEthosImage"
          src={process.env.PUBLIC_URL + "/AboutImages/A1aynE83WJc9WylX.avif"}
          alt="EthosImage"
        />
        <div className="sustainabilityWorkingEthosTextWrapper">
          <p id="sustainabilityWorkingEthosTitle"> Working Ethos </p>
          <p id="sustainabilityWorkingEthosText">
            For Alex and Laura, planning ahead is a central component of
            sustainable design. Work begins with sketches of ideas before any
            clay is modeled. Fully conceptualizing and refining each design
            beforehand helps us to reduce material waste.
            <br />
            <p />
            We strive to work collaboratively at every stage. Our team efforts
            minimize energy usage in the studio.
          </p>
          <br />
          <br />
        </div>

        <img
          id="sustainabilityImageOrange"
          src={process.env.PUBLIC_URL + "/AboutImages/pp-AoP0LMM1VPTawJL6.avif"}
          alt="OrangePlantImage"
        />

        <div className="sustainabilityMaterialsWrapper">
          <div id="sustainabilityTitleMaterials">Materials </div>
          <p id="sustainabilityTextMaterials">
            Surrounded by beautiful landscapes, it is only right that our studio
            is stocked with only the finest local materials that haven't had to
            travel far to get to us. Our clay is as locally sourced as possible
            for every product.
            <br />
            <p />
            We ensure that the paint we use on our products is low-VOC and never
            washed into local waterways during production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sustainability;
