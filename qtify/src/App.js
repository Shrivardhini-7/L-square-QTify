import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero Section";
import CardsSection from "./Components/CardsSection";
import TabsSection from "./Components/TabsSection";
import FAQAccordion from "./Components/FAQAccordion";

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
    topAlbumsData();
    newAlbumsData();
    genresData();
  }, []);
console.log(topAlbums)
console.log(topAlbums.map((album)=>{
  return Object.keys(album.songs).length
}))

  let topAlbumsData = async () => {
    try {
      let response = await axios.get(`${apiEndpoint}albums/top`);
      setTopAlbums(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  let newAlbumsData = async () => {
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

  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CardsSection name= "top-album-section" subTitle="Top Albums" data={topAlbums} id="1"></CardsSection>
      <CardsSection name= "new-album-section" subTitle="New Albums" data={newAlbums} id="2"></CardsSection>
      <TabsSection subTitle="Songs" genresdata={genres} id="3"></TabsSection>
      <FAQAccordion></FAQAccordion>
    </div>
  );
}

export default App;
