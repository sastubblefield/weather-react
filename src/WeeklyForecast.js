import axios from "axios";
import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function WeeklyForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "73bb802b6842545f8bc067782928d7ae";
  let latitude = 74;
  let longitude = 40.7;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=4${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">MON</div>
      </div>
      <div className="row">
        <div className="col">
          <ForecastIcon code="01d" size={30} />
        </div>
      </div>
      <div className="row">
        <div className="col">60º</div>
      </div>
      <div className="row">
        <div className="col">59º</div>
      </div>
    </div>
  );
}
