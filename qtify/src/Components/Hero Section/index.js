import "./HeroSection.css";

let HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text">
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <img
        className="headphone-img"
        src="vibrating-headphone.png"
        alt="headphone_image"
      />
    </div>
  );
};

export default HeroSection;
