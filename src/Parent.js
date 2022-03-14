import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [parentColor, setParentColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setParentColor(newRandomColor);
    setChildrenColor(newChildColor);
  }
  return (
    <div className='parent' style={{ backgroundColor: parentColor }}>
      <Child
        onChangeColorFunction={handleChangeColor}
        childrenColor={childrenColor}
      />
      <Child
        onChangeColorFunction={handleChangeColor}
        childrenColor={childrenColor}
      />
    </div>
  );
}

export default Parent;
