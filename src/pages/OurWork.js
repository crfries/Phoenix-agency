import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//image import
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//animation import
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/UseScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie ref={element1} animate={controls1} initial="show">
        <motion.h2 variants={fade}>the athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athlete}
              alt="the athlete"
            />
          </Hide>
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>the racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={racer} alt="the racer" />
        </Link>
      </Movie>

      <Movie
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>the goodtimes</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-goodtimes">
          <img src={goodtimes} alt="the goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: lightblue;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #1ca9c9;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #8823cc;
`;

const Frame3 = styled(Frame1)`
  background: #1dbe0f;
`;

const Frame4 = styled(Frame1)`
  background: #f3a909;
`;

export default OurWork;
