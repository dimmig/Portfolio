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
        <div className="project-item animatable transperent">
          <h2 className="project-item-name">Short link</h2>
          <button className="show-more-btn">
            See more
            <img src={arrow} alt="Arrow" className="button-arrow" />
          </button>
        </div>
        <div className="project-item animatable transperent">
          <h2 className="project-item-name">Todo list</h2>
          <button className="show-more-btn">
            See more
            <img src={arrow} alt="Arrow" className="button-arrow" />
          </button>
        </div>
        <div className="project-item animatable transperent">
          <h2 className="project-item-name">Telegram bot</h2>
          <button className="show-more-btn">
            See more
            <img src={arrow} alt="Arrow" className="button-arrow" />
          </button>
        </div>
      </div>
      <hr className="content-selector" />
    </div>
  );
};
