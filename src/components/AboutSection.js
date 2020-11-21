import React from "react";
import home1 from "../img/home1.png";

//style
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any media ideas you have. We are proffesionals with
          world class skills.
        </p>
        <button>contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with camera"></img>
      </Image>
    </About>
  );
};

export default AboutSection;
