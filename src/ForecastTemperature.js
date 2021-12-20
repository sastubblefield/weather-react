import React, { useState } from "react";

export default function ForecastTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function converToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div>
        <h1 className="temp-number">
          {Math.round(props.fahrenheit)}
          <span className="fahrenheit-unit">
            ºF |{" "}
            <a href="/" onClick={converToCelsius}>
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
          {Math.round(props.celsius)}
          <span className="fahrenheit-unit">
            <a href="/" onClick={convertToFahrenheit}>
              ºF
            </a>{" "}
            | ºC
          </span>
        </h1>
      </div>
    );
  }
}
