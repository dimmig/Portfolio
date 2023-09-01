import React from "react";
import arrow from "../assets/photos/arrow.svg";
import "../assets/styles/sections/projects.css";
import "../assets/styles/style-utils/globals-styles.css";

export const Projects = () => {
  return (
    <div className="base-el">
      <div className="title-block">
        <h1 className="section-header">My projects</h1>
      </div>

      <div className="projects scrolled" id="projects">
        <div>
          <h2 className="project-item-name">Json-logic validator</h2>

          <div className="project-item animatable transperent">
            <div className="json-validator blurred-bg" />
            <a
              className="href-btn"
              href="https://dimmig.github.io/jsonLogic-validator/"
            >
              <button className="show-more-btn">
                See more
                <img src={arrow} alt="Arrow" className="button-arrow" />
              </button>
            </a>
          </div>
        </div>
        <div>
          <h2 className="project-item-name">Crypto market</h2>
          <div className="project-item animatable transperent">
            <div className="web-market blurred-bg" />
            <a
              className="href-btn"
              href="https://dimmig.github.io/web-crypto-market/"
            >
              <button className="show-more-btn">
                See more
                <img src={arrow} alt="Arrow" className="button-arrow" />
              </button>
            </a>
          </div>
        </div>
        <div>
          <h2 className="project-item-name">Near.sps </h2>
          <div className="project-item animatable transperent">
            <div className="near-sps blurred-bg" />
            <a className="href-btn" href="https://dimmig.github.io/NEAR-SPS/">
              <button className="show-more-btn">
                See more
                <img src={arrow} alt="Arrow" className="button-arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr className="content-selector" />
    </div>
  );
};
