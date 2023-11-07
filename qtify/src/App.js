import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero Section";
import Card from "./Components/Card";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Card />
    </div>
  );
}

export default App;
