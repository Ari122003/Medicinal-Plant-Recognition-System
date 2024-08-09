import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery } from "@mui/material";
import homebg from "./images/bgg.jpg";
import HomePageContainer from "./HomePageContainer";
import lg from "./images/logofront.png";


const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); 

  const divStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
  };

  const backgroundStyle = {
    backgroundImage: `url(${homebg})`,
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    minHeight: "132%",
    filter: "blur(1px)",
    
    backgroundAttachment: "fixed",
    margin: 0,
    padding:0

  };

  const contentStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    color: "white",
    backdropFilter: "blur(2px)",
  };

  return (
    <div style={divStyle}>
      <div style={backgroundStyle}></div>
      <div style={contentStyle}>
        <AppBar position="static">
          <Toolbar>
            <img
              src={lg}
              alt="logo"
              height={isSmallScreen ? "50px" : "70px"}
              width={isSmallScreen ? "50px" : "70px"}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AN INNOVATION OF MINISTRY OF AYUSH
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <HomePageContainer />
       
      </div>
    </div>
  );
}

export default Home;
