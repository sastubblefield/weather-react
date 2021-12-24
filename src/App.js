import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import WeeklyForecast from "./WeeklyForecast";

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, cityInput] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    cityInput(event.target.value);
  }

  function search() {
    const apiKey = "73bb802b6842545f8bc067782928d7ae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="button"
            value="search"
            className="input-button mt-3 btn btn-lg btn-block"
          />
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control form-control-lg mt-4 input-box"
            onChange={handleCityInput}
          />
        </form>
        <ForecastInfo data={weatherData} />
        <WeeklyForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default App;
