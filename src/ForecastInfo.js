import React from "react";
import FormattedDate from "./FormattedDate";
import ForecastIcon from "./ForecastIcon";

export default function ForecastInfo(props) {
  return (
    <div>
      <h1 className="temp-number">{Math.round(props.data.temperature)}</h1>
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
      <div className="container">
        <div className="row">
          <div className="col">MON</div>
          <div className="col">TUES</div>
          <div className="col">WED</div>
          <div className="col">THU</div>
          <div className="col">FRI</div>
          <div className="col">SAT</div>
          <div className="col">SUN</div>
        </div>
        <div className="row">
          <div className="col">
            <ForecastIcon code={props.data.icon} />
          </div>
          <div className="col">
            <ForecastIcon code={props.data.icon} />
          </div>{" "}
          <div className="col">
            <ForecastIcon code={props.data.icon} />
          </div>{" "}
          <div className="col">
            <ForecastIcon code={props.data.icon} />
          </div>{" "}
          <div className="col">
            <ForecastIcon code={props.data.icon} />
          </div>
          <div className="col">
            <ForecastIcon code={props.data.icon} />
          </div>
          <div className="col">
            <ForecastIcon code={props.data.icon} />
          </div>
        </div>
        <div className="row">
          <div className="col">60º</div>
          <div className="col">60º</div>
          <div className="col">60º</div>
          <div className="col">60º</div>
          <div className="col">60º</div>
          <div className="col">60º</div>
          <div className="col">60º</div>
        </div>
        <div className="row">
          <div className="col">59º</div>
          <div className="col">59º</div>
          <div className="col">59º</div>
          <div className="col">59º</div>
          <div className="col">59º</div>
          <div className="col">59º</div>
          <div className="col">59º</div>
        </div>
      </div>
    </div>
  );
}