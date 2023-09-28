import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import HomeVideo from "../assets/video/home_video.mp4";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  video: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
});

const Video = () => {
  const classes = useStyles();
  const vidRef = useRef(null);
  const setHeightRef = useRef(null);

  useEffect(() => {
    const playbackConst = 1000;
    const setHeight = setHeightRef.current;

    const vid = vidRef.current;
    function handleLoadedMetadata() {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    }

    vid.addEventListener("loadedmetadata", handleLoadedMetadata);

    function scrollPlay() {
      const frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);

    return () => {
      window.cancelAnimationFrame(scrollPlay);
    };
  }, []);

  return (
    <>
      <Box style={{ position: "fixed", width: "100%", height: "100%" }}>
        <video ref={vidRef} className={classes.video} autoPlay loop>
          <source src={HomeVideo} type="video/mp4" />
        </video>
      </Box>
      <div ref={setHeightRef}></div>
    </>
  );
};

export default Video;
