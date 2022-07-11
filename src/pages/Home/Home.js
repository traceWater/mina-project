import React from "react";

//components
import AboutMina from "./AboutMina/AboutMina";
import Bestsellers from "./Bestsellers/Bestsellers";
import Ceramics from "./Ceramics/Ceramics";
import HomeDecor from "./HomeDecor/HomeDecor";

function Home() {
  return (
    <div className="home-container">
      <Ceramics />
      <Bestsellers />
      <HomeDecor />
      <AboutMina />
    </div>
  );
}

export default Home;
