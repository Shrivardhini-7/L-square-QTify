import "./Card.css";
import Tooltip from '@mui/material/Tooltip';

let Card = ({ imgSrc, noOfFollowers, label, followsOrLikes, noOfSongs }) => {
  return (
    <div className="card">
      <Tooltip title={noOfSongs} arrow>
      <div className="card-image">
        <img
          src={imgSrc}
          alt="Bollywoodimage"
          style={{ borderRadius: "8px 8px 0 0", height: 170 }}
        />
      </div>

      <div className="whitebg"></div>
      <div className="followers">{noOfFollowers} {followsOrLikes}</div>
      <p
        style={{ color: "white", fontSize: 14, fontWeight: "400" }}
      >
        {label}
      </p>
      </Tooltip>
      
    </div>
  );
};
export default Card;
