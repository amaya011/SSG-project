import React from "react";
import Box from "@mui/material/Box";
import mainLogo from "../assets/images/main_logo.png";
import earthLogo from "../assets/images/earth.png";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  menuBar: {
    width: "50px",
    height: "5px",
    borderRadius: "5px",
    backgroundColor: "#F39200",
    "@media (max-width: 430px)": {
      width: "27px",
    },
  },
  secondMenuBar: {
    marginTop: "10px",
    marginLeft: "-20px",
    "@media (max-width: 430px)": {
      marginTop: "8px",
      marginLeft: "-10px",
    },
  },
  mainLogo: {
    margin: "0 100px",
    "@media (max-width: 430px)": {
      margin: "0",
      width: "150px",
    },
  },
  logoLine: {
    width: "250px",
    height: "1px",
    backgroundColor: "grey",
    "@media (max-width: 430px)": {
      width: "60px",
    },
  },
  menuIcon: {
    cursor: "pointer",
  },
  earthLogo: {
    "@media (max-width: 430px)": {
      width: "27px",
      height: "27px",
    },
  },
});

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const classes = useStyles();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: "71px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box className={classes.menuIcon} onClick={toggleMenu}>
        <div className={classes.menuBar}></div>
        <div className={`${classes.menuBar} ${classes.secondMenuBar}`}></div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className={classes.logoLine}></div>
        <img className={classes.mainLogo} src={mainLogo} alt="img" />
        <div className={classes.logoLine}></div>
      </Box>
      <Box>
        <img className={classes.earthLogo} src={earthLogo} alt="img" />
      </Box>
    </Box>
  );
};

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
