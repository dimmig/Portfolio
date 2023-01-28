import React from "react";
import "../../assets/styles/card/trait.css";

export const TraitCard = (props) => {
  const { image, traits } = props;

  return (
    <div className="trait-card transperent animatable">
      <img src={image} alt="laptop" />
      <ul className="traits-list">
        {traits.map((trait, i) => (
          <li key={i} className="trait-li">
            {trait}
          </li>
        ))}
      </ul>
    </div>
  );
};
