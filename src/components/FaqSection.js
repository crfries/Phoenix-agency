import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        any questions <span>FAQ</span>{" "}
      </h2>
      <AnimateSharedLayout>
        <Toggle title="who are you?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              commodi ad culpa optio iure placeat voluptas temporibus itaque
              veritatis recusandae!
            </p>
          </div>
        </Toggle>

        <Toggle title="what is the meaning of life">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              commodi ad culpa optio iure placeat voluptas temporibus itaque
              veritatis recusandae!
            </p>
          </div>
        </Toggle>

        <Toggle title="hello world">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              commodi ad culpa optio iure placeat voluptas temporibus itaque
              veritatis recusandae!
            </p>
          </div>
        </Toggle>

        <Toggle title="ayyyye">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              commodi ad culpa optio iure placeat voluptas temporibus itaque
              veritatis recusandae!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
