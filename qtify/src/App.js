import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero Section";
import CardsSection from "./Components/CardsSection";
import TabsSection from "./Components/TabsSection";

function App() {
  let apiEndpoint = "https://qtify-backend-labs.crio.do/";
  let [topAlbums, setTopAlbums] = useState([]);
  let [newAlbums, setNewAlbums] = useState([]);
  let [genres,setGenres] = useState([]);

  useEffect(() => {
    // axios.get(`${apiEndpoint}albums/top`).then(({ data }) => {
    //   setTopAlbums(data);
    // });
    // axios.get(`${apiEndpoint}albums/new`).then(({ data }) => {
    //   setNewAlbums(data);
    // });
    apiCall1();
    apiCall2();
    genresData();
  }, []);

  let apiCall1 = async () => {
    try {
      let response = await axios.get(`${apiEndpoint}albums/top`);
      setTopAlbums(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  let apiCall2 = async () => {
    try {
      let response = await axios.get(`${apiEndpoint}albums/new`);
      setNewAlbums(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  let genresData = async () => {
    try{
     let response = await axios.get(`${apiEndpoint}genres`);
     setGenres(response.data.data)
    }catch(e){
     console.log(e);
    }
  }

  // console.log(topAlbums);
  //console.log(newAlbums);
  //console.log(genres);
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CardsSection subTitle="Top Albums" data={topAlbums} id="1"></CardsSection>
      <CardsSection subTitle="New Albums" data={newAlbums} id="2"></CardsSection>
      <TabsSection subTitle="Songs" genresdata={genres} id="3"></TabsSection>
    </div>
  );
}

export default App;
