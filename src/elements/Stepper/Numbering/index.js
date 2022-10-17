import React from "react";

import Fade from "react-reveal/Fade";

import propTypes from "prop-types";

import "./index.scss";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);
  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : ""; //didkasih clasname active kl ngga kosong aja //
          if (index + 1 === KeysOfData.length) {
            isActive = "";  //ga punya class//
            return null;   //jangn dirender //
          }

          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}   
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
