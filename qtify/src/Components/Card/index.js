import "./Card.css";

let Card = ({ imgSrc, noOfFollowers, label }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={imgSrc}
          alt="Bollywoodimage"
          style={{ borderRadius: "8px 8px 0 0", height: 170 }}
        />
      </div>

      <div className="whitebg"></div>
      <div className="followers">{noOfFollowers} Follows</div>
      <p
        style={{ height: 25, color: "white", fontSize: 14, fontWeight: "400" }}
      >
        {label}
      </p>
    </div>
  );
};
export default Card;
