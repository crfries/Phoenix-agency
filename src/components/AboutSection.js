import React from "react";
import home1 from "../img/home1.png";
import { useScroll } from "../components/UseScroll";

//framer motion
import { motion } from "framer-motion";

//style
import { About, Description, Hide, Image } from "../styles";

//animation
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  const [element1, controls1] = useScroll();
  return (
    <About ref={element1} animate={controls1} initial="show">
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any media ideas you have. We are professionals with
          world class skills.
        </motion.p>
        <motion.button variants={fade}> contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with camera"
        ></motion.img>
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
