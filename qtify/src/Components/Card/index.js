import "./Card.css";

let Card = () => {
  return (
    <div className="card">
      <img
        src="Bollywood.png"
        alt="Bollywoodimage"
        style={{ borderRadius: "8px 8px 0 0", height: 170 }}
      />
      <div className="whitebg"></div>
      <div className="followers">100 Follows</div>
      <p
        style={{ height: 25, color: "white", fontSize: 14, fontWeight: "400" }}
      >
        New Bollywood
      </p>
    </div>
  );
};
export default Card;
