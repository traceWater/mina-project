import React from "react";

//components
import AboutMinaCard from "./AboutMinaCard/AboutMinaCard";

//list
import { aboutList } from "./AboutMinaList";

//styles
import "./AboutMina.css";

function AboutMina() {
  return (
    <div className="about-mina-container">
      {aboutList.map((item) => {
        return (
          <AboutMinaCard
            key={item.id}
            title={item.title}
            image={item.image}
            content={item.content}
            page={item.page}
          />
        );
      })}
    </div>
  );
}

export default AboutMina;
