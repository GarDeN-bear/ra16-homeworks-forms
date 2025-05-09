import React, { useState } from "react";

const Hex2Rgb = () => {
  const defaultHexColor = "#34495e";
  const defaultRgbColor = "rgb(52, 73, 94)";
  const [hexInput, setHexInput] = useState(defaultHexColor);
  const [rgbOutput, setRgbOutput] = useState(defaultRgbColor);

  const getRgbOutput = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const getRgbOutputText = (rgb) => {
    if (!rgb) {
      return "Ошибка!";
    }
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };

  const setBackgroundColor = (color, rgb) => {
    const errorColor = "#FF0000";

    if (rgb) {
      document.body.style.backgroundColor = color;
    } else {
      document.body.style.backgroundColor = errorColor;
    }
  };

  const handleOnChange = (ev) => {
    ev.preventDefault();

    const hexText = ev.target.value;
    const rgb = getRgbOutput(hexText);
    const rgbText = getRgbOutputText(rgb);

    setHexInput(hexText);
    setRgbOutput(rgbText);
    setBackgroundColor(rgbText, rgb);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form id="hex2rgb-form" onSubmit={handleFormSubmit}>
      <input
        id="hex-input"
        type="text"
        name="hex-text"
        value={hexInput}
        onChange={handleOnChange}
        maxLength={7}
      ></input>
      <p id="rgb-output">{rgbOutput}</p>
    </form>
  );
};

export default Hex2Rgb;
