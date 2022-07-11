import React from "react";

//components
import Bestsellers from "./Bestsellers/Bestsellers";
import Ceramics from "./Ceramics/Ceramics";

function Home() {
  return (
    <div className="home-container">
      <Ceramics />
      <Bestsellers />
    </div>
  );
}

export default Home;
