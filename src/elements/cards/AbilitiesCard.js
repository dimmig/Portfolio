import React from "react";
import "../../assets/styles/card/abilities.css";

export const AbilitiesCard = (props) => {
  const list = props.abilities.map((ability, i) => (
    <li key={i} className="web-achivs-li">
      {ability}
    </li>
  ));
  return <ul className="web-list">{list}</ul>;
};
