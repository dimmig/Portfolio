import React from "react";
import "../assets/styles/style-utils/graph.css";

export const TecnicalSkillsGraph = () => {
  return (
    <div className="graph-block">
      <div className="graph">
        <div className="animatable">
          <div className="graph-data">
            <p className="item-name">REACT</p>
          </div>
          <div className="graph-column react" />
        </div>
        <div className="animatable">
          <div className="graph-data">
            <p className="item-name">JS</p>
          </div>
          <div className="graph-column js" />
        </div>
        <div className="animatable">
          <div className="graph-data">
            <p className="item-name">HTML</p>
          </div>
          <div className="graph-column html" />
        </div>
        <div className="animatable">
          <div className="graph-data">
            <p className="item-name">CSS</p>
          </div>

          <div className="graph-column css" />
        </div>
        <div className="animatable">
          <div className="graph-data">
            <p className="item-name">RUST</p>
          </div>

          <div className="graph-column rust" />
        </div>
      </div>
    </div>
  );
};
