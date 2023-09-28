import React, { useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import MenuComponent from "../components/MenuComponent";
import Navbar from "../components/Navbar";
import Video from "../components/Video";

const useStyles = makeStyles({
  mainBox: {
    width: "100%",
    height: "100%",
  },
  contentBox: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    paddingTop: "71px",
    paddingLeft: "4.2%",
    paddingRight: "4.2%",
    "@media (max-width: 430px)": {
      padding: "100px 40px 0px",
    },
  },
  p: {
    fontFamily: "Poppines-bold",
    width: "38%",
    fontSize: "65px",
    color: "white",
    textAlign: "center",
    marginTop: "71px",
    "@media (max-width: 430px)": {
      display: "none",
    },
  },
  span: {
    fontFamily: "Poppines-medium",
    color: "#F39200",
  },
  hiddenElement: {
    display: "none",
  },
});

const Home = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isMenuOpen ? (
        <Box
          className={`${classes.mainBox} ${
            isMenuOpen ? classes.hiddenElement : ""
          }`}
        >
          <Video />
          <Box className={classes.contentBox}>
            <Navbar
              sx={{ position: "fixed", top: 0 }}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <p className={classes.p}>
              Welcome to our <span className={classes.span}>trustworth</span>{" "}
              <br /> regional trading agency!
            </p>
          </Box>
        </Box>
      ) : (
        <MenuComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  );
};

export default Home;
