import React, { useState } from "react";
import axios from "axios";
import ForecastIcon from "./ForecastIcon";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">MON</div>
        </div>
        <div className="row">
          <div className="col">
            <ForecastIcon data={forecast[0]} />
          </div>
        </div>
        <div className="row">
          <div className="col">{forecast[0].temp.max}º</div>
        </div>
        <div className="row">
          <div className="col">{forecast[0].temp.min}º</div>
        </div>
      </div>
    );
  } else {
    let latitude = 40.7;
    let longitude = 70;
    let apiKey = "73bb802b6842545f8bc067782928d7ae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
