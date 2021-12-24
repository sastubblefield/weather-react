import React, { useState } from "react";

export default function ForecastTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <h1 className="temp-number fw-lighter">
          {Math.round(props.fahrenheit)}
          <span className="fahrenheit-unit">
            ºF |{" "}
            <a href="/" onClick={showCelsius}>
              ºC
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div>
        <h1 className="temp-number">
          {Math.round(celsius)}
          <span className="fahrenheit-unit">
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>{" "}
            | ºC
          </span>
        </h1>
      </div>
    );
  }
}
