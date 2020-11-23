import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//image import
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//animation import
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>the athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="the athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>the racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={racer} alt="the racer" />
        </Link>
      </Movie>

      <Movie>
        <h2>the goodtimes</h2>
        <div className="line"></div>
        <Link to="/work/the-goodtimes">
          <img src={goodtimes} alt="the goodtimes" />
        </Link>
      </Movie>
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
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
