import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero Section";
import CardsSection from "./Components/CardsSection";

function App() {
  let apiEndpoint = "https://qtify-backend-labs.crio.do/";
  let [topAlbums, setTopAlbums] = useState([]);
  let [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${apiEndpoint}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${apiEndpoint}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  let apiCall = async () => {
    try {
      let response1 = await axios.get(`${apiEndpoint}albums/top`);
      setTopAlbums(response1.data);
      let response2 = await axios.get(`${apiEndpoint}albums/new`);
      setNewAlbums(response2.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(topAlbums);
  console.log("/n");
  console.log(newAlbums);
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CardsSection subTitle="Top Albums" data={topAlbums}></CardsSection>
      <CardsSection subTitle="New Albums" data={newAlbums}></CardsSection>
    </div>
  );
}

export default App;
