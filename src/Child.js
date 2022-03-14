import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColorFunction, childrenColor }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColorFunction(newColor);
  }
  return (
    <div
      className='child'
      style={{ backgroundColor: childrenColor }}
      onClick={handleClick}
    />
  );
}

export default Child;
