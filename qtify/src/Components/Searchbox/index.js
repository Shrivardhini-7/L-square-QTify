import { ReactComponent as SearchIcon } from "./searchIcon.svg";
import "./Searchbox.css";

let Searchbox = () => {
  return (
    <form className="search">
      <input placeholder="Search an album of your choice" />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Searchbox;
