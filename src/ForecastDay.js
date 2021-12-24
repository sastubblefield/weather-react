import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>
      <ForecastIcon code={props.data.weather[0].icon} size="35" />
      <div>
        <span>{maxTemperature()}</span>
        <br/>
        <span className="temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
