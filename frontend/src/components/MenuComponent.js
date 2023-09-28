import React from "react";
import Box from "@mui/material/Box";
import mainLogo from "../assets/images/main_logo.png";
import earthLogo from "../assets/images/earth.png";
import menuIcon from "../assets/images/menu.png";
import multiRect from "../assets/images/mutiRect.png";
import sigleRect from "../assets/images/rect.png";
import singleCircle from "../assets/images/sigle-circle.png";
import opacitySingleCircle from "../assets/images/opacity-sigle-circle.png";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  mainBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2B3425",
    padding: "71px 4.2% 6.2% 4.2%",
  },
  contentBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media (max-width: 430px)": {
      justifyContent: "space-evenly",
      paddingTop: "20px",
    },
  },
  menuBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "80px",
    paddingRight: "74px",
    paddingBottom: "15px",
    "@media (max-width: 430px)": {
      flexDirection: "column",
      padding: "0px !important",
    },
  },
  menuIcon: {
    cursor: "pointer",
    marginRight: "57px",
    "@media (max-width: 430px)": {
      width: "27px",
      height: "27px",
      marginRight: "0",
    },
  },
  logoLine: {
    display: "none",
    height: "1px",
    backgroundColor: "grey",
    "@media (max-width: 430px)": {
      display: "block",
      width: "60px",
    },
  },
  secondMenuBar: {
    marginTop: "10px",
  },
  earthLogo: {
    display: "none",
    "@media (max-width: 430px)": {
      display: "block",
      width: "27px",
      height: "27px",
    },
  },
  mainLogo: {
    "@media (max-width: 430px)": {
      margin: "0",
      width: "150px",
    },
  },
  listItemText: {
    fontSize: "64px !important",
    textAlign: "center",
    color: "#F39200",
    fontFamily: "MicroSquare !important",
    fontWeight: "bold",
    "@media (max-width: 430px)": {
      fontSize: "40px !important",
    },
  },
  singleRect: {
    width: "21%",
    alignSelf: "flex-start",
    opacity: "0.7",
    "@media (max-width: 430px)": {
      display: "none",
    },
  },
  singleCircle: {
    width: "35%",
    alignSelf: "flex-end",
    display: "none",
    "@media (max-width: 430px)": {
      display: "block",
      marginTop: "-38px",
    },
  },
  multiRect: {
    width: "21%",
    alignSelf: "flex-end",
    opacity: "0.7",
    "@media (max-width: 430px)": {
      display: "none",
    },
  },
  opacitySingleCircle: {
    width: "35%",
    alignSelf: "flex-start",
    display: "none",
    "@media (max-width: 430px)": {
      display: "block",
    },
  },
  buttonStyle: {
    fontFamily: "Poppins-Medium",
    background:
      "linear-gradient(90deg, " +
      "#81fe88 1.26%, " +
      "#84fd85 26.90%, " +
      "#8ffd7d 49.97%, " +
      "#a1fc6f 72.05%, " +
      "#bbfa5c 93.40%, " +
      "#c5fa55 100.00%)",
    fontSize: "24px !important",
    width: "197px",
    height: "58px",
    boxShadow: "none !important",
    fontWeight: "normal",
    color: "#141518",
    borderRadius: "50px !important",
    marginTop: "97px !important",
    marginBottom: "50px !important",
    "@media (max-width: 430px)": {
      marginBottom: "0 !important",
    },
  },
});

const MenuComponent = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuList = ["Home", "Services", "Contact Us", "Discover Us"];

  const classes = useStyles();

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Box className={classes.mainBox}>
        <Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <Box className={classes.contentBox}>
              <Box onClick={toggleMenu}>
                <img className={classes.menuIcon} src={menuIcon} alt="img" />
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
                <img src={earthLogo} className={classes.earthLogo} alt="img" />
              </Box>
            </Box>
            <Box className={classes.menuBox}>
              <img src={multiRect} className={classes.multiRect} alt="img" />
              <img
                src={singleCircle}
                className={classes.singleCircle}
                alt="img"
              />
              <List sx={{ textAlign: "center", alignSelf: "center" }}>
                {menuList.map((item) => (
                  <ListItem button key={item}>
                    <ListItemText
                      primaryTypographyProps={{
                        className: classes.listItemText,
                      }}
                      primary={item}
                    />
                  </ListItem>
                ))}
                <Button variant="contained" className={classes.buttonStyle}>
                  Join Us
                </Button>
              </List>
              <img className={classes.singleRect} src={sigleRect} alt="img" />
              <img
                className={classes.opacitySingleCircle}
                src={opacitySingleCircle}
                alt="img"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

MenuComponent.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired, // isMenuOpen should be a boolean and is required
  setIsMenuOpen: PropTypes.func.isRequired, // setIsMenuOpen should be a function and is required
};

export default MenuComponent;
