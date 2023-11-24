

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./TabsSection.css"
import { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import axios from 'axios';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsSection({subTitle, genresdata,id}) {
  let apiEndpoint = "https://qtify-backend-labs.crio.do/";
  const [value, setValue] = React.useState(0);
  let [songs,setSongs] = useState([]);

  useEffect(() => {
    songsData()
  }, []);


  let songsData = async () => {
    try{
     let response = await axios.get(`${apiEndpoint}songs`);
     setSongs(response.data)
    }catch(e){
     console.log(e);
    }
  }
  
 // console.log(songs);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filter-section">
    <h1 className="sub-titles">{subTitle}</h1>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
    style: {
      backgroundColor: "#34c94b"
    }
  }}>
          <Tab className="tab-label"  sx={{textTransform :"none"}} label="All"></Tab>
          {genresdata.map((genre)=>(
            <Tab className="tab-label" sx={{textTransform :"none"}} label={genre.label} />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="tabs-carousel-section">
      <Carousel data={songs} id={id} followsOrLikes="Likes"></Carousel>
      </div>
      </CustomTabPanel>
      {genresdata.map((genre)=>(
            <CustomTabPanel value={value} index={genresdata.indexOf(genre)+1} >
              <Carousel data={songs.filter(function(song){
    return song.genre.label === genre.label
  })} id={id} followsOrLikes="Likes"></Carousel>
            </CustomTabPanel>
          ))}
    </Box>
    </div>
  );
}

//export default TabsSection;