import React, { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black"];
  const randomIndex = Math.trunc(Math.random() * 4);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color_box") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{backgroundColor: color}}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
