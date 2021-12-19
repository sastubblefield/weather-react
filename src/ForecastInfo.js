import React from "react";
import FormattedDate from "./FormattedDate";
import ForecastIcon from "./ForecastIcon";

export default function ForecastInfo(props) {
  return (
    <div>
      <h1 className="temp-number">{Math.round(props.data.temperature)}</h1>
      <div className="forecast-icon">
        <ForecastIcon code={props.data.icon} />
      </div>
      <div className="forecast-list">
        <ul>
          <li>{props.data.city}</li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}mph</li>
          <li>{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
