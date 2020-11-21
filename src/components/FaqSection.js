import React from "react";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        any questions <span>FAQ</span>{" "}
      </h2>

      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="question">
        <h4>daily schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="question">
        <h4>payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="question">
        <h4>what products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

    </div>
  );
};

export default FaqSection;
