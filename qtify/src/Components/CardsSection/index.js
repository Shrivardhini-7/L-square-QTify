import "./cardsSection.css";
import Card from "../Card";
import { useState } from "react";
import Carousel from "../Carousel";

let CardsSection = ({ subTitle, data }) => {
  let [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="cards-section">
      <div className="cards-section-header">
        <h1 className="sub-titles">{subTitle}</h1>
        <h1
          className="toggle-button"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </h1>
      </div>
      {isCollapsed ? (
        <>
          <Carousel data={data}></Carousel>
        </>
      ) : (
        <div className="album-section">
          {data.map((cardData) => (
            <Card
              key={cardData.id}
              imgSrc={cardData.image}
              noOfFollowers={cardData.follows}
              label={cardData.title}
            ></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsSection;
