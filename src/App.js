import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control form-control-lg input-box"
          />
          <input
            type="button"
            value="search"
            className="input-button mt-4 btn btn-lg btn-block"
          />
        </form>
        <ForecastInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "73bb802b6842545f8bc067782928d7ae";
    let city = "Austin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

export default App;
