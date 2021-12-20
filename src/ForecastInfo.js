import React from "react";
import FormattedDate from "./FormattedDate";
import ForecastIcon from "./ForecastIcon";
import ForecastTemperature from "./ForecastTemperature";

export default function ForecastInfo(props) {
  return (
    <div>
      <div className="forecast-list">
        <ul>
          <li>
            <ForecastTemperature fahrenheit={props.data.temperature} />
          </li>
          <hr/>
          <li className= "mt-5">
            <ForecastIcon code={props.data.icon} />
          </li>
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
