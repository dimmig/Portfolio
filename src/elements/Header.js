import React, { useContext } from "react";
import { ContextManager } from "..";
import profilePhoto from "../assets/photos/portfile-photo.jpg";
import arrow from "../assets/photos/arrow.svg";
import "../assets/styles/sections/header.css";
import "../assets/styles/style-utils/button.css";
import "../assets/styles/style-utils/globals-styles.css";

export const Header = () => {
  const context = useContext(ContextManager);

  const seeMore = (el) => {
    let delay = 100;
    const aboutElements = el.querySelectorAll(".animatable");
    el.parentElement.scrollIntoView({ behavior: "smooth" });

    if (el.classList.contains("scrolled")) {
      context.animate(aboutElements, delay);
    }
  };

  return (
    <div>
      <div className="base-el header">
        <div className="menu">
          <p className="menu-item item-1" id="menu-home">
            Home
          </p>
          <p
            className="menu-item item-2"
            onClick={() => seeMore(document.getElementById("about-content"))}
          >
            About
          </p>
          <p
            className="menu-item item-3"
            onClick={() => seeMore(document.getElementById("projects"))}
          >
            Projects
          </p>
          <p
            className="menu-item item-4"
            onClick={() => seeMore(document.getElementById("faq"))}
          >
            Contacts
          </p>
        </div>
        <div className="preview">
          <div className="main-text-block">
            <h1>
              Hi there, I'm <span className="highlighted-name">Dima</span>
            </h1>
          </div>
          <div className="profile-photo">
            <div className="portfile-image">
              <img src={profilePhoto} alt="Profile" />
            </div>
          </div>
        </div>
        <div className="header-btn">
          <h2>Why i could be useful for you?</h2>
          <button
            className="show-more-btn"
            onClick={() => seeMore(document.getElementById("about-content"))}
          >
            See more
            <img src={arrow} alt="Arrow" className="button-arrow" />
          </button>
        </div>
      </div>
      <hr className="content-selector" />
    </div>
  );
};
