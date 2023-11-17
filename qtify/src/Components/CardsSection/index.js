import "./cardsSection.css";
import Card from "../Card";

let CardsSection = ({ subTitle, data }) => {
  return (
    <div className="cards-section">
      <h1 className="sub-titles">{subTitle}</h1>
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
    </div>
  );
};

export default CardsSection;
