import React, { useState } from "react";

const Hex2Rgb = () => {
  const defaultHexColor = "#34495e";
  const defaultRgbColor = "rgb(52, 73, 94)";
  const [hexInput, setHexInput] = useState(defaultHexColor);
  const [rgbOutput, setRgbOutput] = useState(defaultRgbColor);
  const [backgroundColor, setBackgroundColor] = useState(defaultRgbColor);

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

  const handleOnChange = (ev) => {
    ev.preventDefault();
    const errorColor = "#FF0000";

    const hexText = ev.target.value;
    const rgb = getRgbOutput(hexText);
    const rgbText = getRgbOutputText(rgb);

    setHexInput(hexText);
    setRgbOutput(rgbText);
    if (rgb) {
      setBackgroundColor(rgbText);
    } else {
      setBackgroundColor(errorColor);
    }
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="hex2rgb-page">
      <div className="background" style={{ backgroundColor: backgroundColor }}>
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
      </div>
    </div>
  );
};

export default Hex2Rgb;
