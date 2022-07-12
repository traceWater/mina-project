import React from "react";

//components
import AboutMina from "./AboutMina/AboutMina";
import Bestsellers from "./Bestsellers/Bestsellers";
import Ceramics from "./Ceramics/Ceramics";
import HomeDecor from "./HomeDecor/HomeDecor";
import Instagram from "./Instagram/Instagram";
import Newsletter from "./Newsletter/Newsletter";

function Home() {
  return (
    <div className="home-container">
      <Ceramics />
      <Bestsellers />
      <HomeDecor />
      <AboutMina />
      <Newsletter />
      <Instagram />
    </div>
  );
}

export default Home;
