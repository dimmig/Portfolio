import React from "react";
import "../assets/styles/sections/faq.css";
import "../assets/styles/style-utils/globals-styles.css";

export const Faq = () => {
  return (
    <div className="base-el">
      <div className="title-block faq">
        <div id="faq" className="scrolled">
          <h1 className="section-header questions  animatable transperent">
            Questions left?
          </h1>
          <p className="title-subtext  animatable transperent">
            Contact me then
          </p>
          <div className="form animatable transperent">
            <div className="inputs ">
              <input className="faq-input" placeholder="Email" />
              <input className="faq-input" placeholder="Message" />
            </div>
            <button className="submit-btn animatable transperent">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
