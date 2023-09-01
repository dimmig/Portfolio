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

          <div className="form animatable transperent">
            <div className="inputs">
              <a href="mailto:galagan.dm@gmai.com">
                <button className="submit-btn  desktop">Contact me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
