import SearchBox from "../Searchbox";
import Button from "../Button";
import "./navbar.css";

let Navbar = () => {
  return (
    <div className="navbar">
      <img src="qtifylogo.png" alt="qtify logo" width={67} height={34} />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};
export default Navbar;
