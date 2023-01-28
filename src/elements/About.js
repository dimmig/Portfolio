import React from "react";
import { TraitCard } from "./cards/TraitCard";
import { OTHER_ABILITIES, TRAITS_DATA } from "../utils/text-data.js";
import { WEB_ABILITIES } from "../utils/text-data.js";
import { AbilitiesCard } from "./cards/AbilitiesCard";
import { TecnicalSkillsGraph } from "./Graph";
import laptopIcon from "../assets/photos/laptop-icon.png";
import bulbIcon from "../assets/photos/bulb-icon.png";
import checkpointIcon from "../assets/photos/checkpoint-icon.png";
import "../assets/styles/style-utils/button.css";
import "../assets/styles/style-utils/globals-styles.css";
import "../assets/styles/sections/about.css";

export const About = () => {
  return (
    <div className="base-el">
      <div className="title-block">
        <h1 className="section-header">About</h1>
      </div>

      <div className="about-content scrolled" id="about-content">
        <div
          className="abilities transperent animatable"
          id="web-abilities-card"
        >
          <h2 className="characteristic-header">Web abilities</h2>
          <AbilitiesCard abilities={WEB_ABILITIES} />
        </div>

        <div
          className="abilities transperent animatable"
          id="other-abilities-card"
        >
          <h2 className="characteristic-header">Other abilities</h2>
          <AbilitiesCard abilities={OTHER_ABILITIES} />
        </div>

        <div
          className="traits-block transperent animatable"
          id="traits-card"
        >
          <h2 className="characteristic-header traits-header">Personal traits</h2>
          <TraitCard image={laptopIcon} traits={TRAITS_DATA.slice(0, 3)} />
          <TraitCard image={bulbIcon} traits={TRAITS_DATA.slice(3, 6)} />
          <TraitCard image={checkpointIcon} traits={TRAITS_DATA.slice(6, 9)} />
        </div>
      </div>
      <div className="skills transperent animatable" id="graph">
        <h2 className="characteristic-header chart">Skills</h2>
        <TecnicalSkillsGraph />
      </div>
      <hr className="content-selector" />
    </div>
  );
};
