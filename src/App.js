import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";
import axios from "axios";

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
        <h1 className="temp-number">{Math.round(weatherData.temperature)}</h1>
        <div className="forecast-list">
          <ul>
            <li>{weatherData.city}</li>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}mph</li>
            <li>{weatherData.description}</li>
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
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                width="40"
              />
            </div>
            <div className="col">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
              />
            </div>{" "}
            <div className="col">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
              />
            </div>{" "}
            <div className="col">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
              />
            </div>{" "}
            <div className="col">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
              />
            </div>
            <div className="col">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
              />
            </div>
            <div className="col">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
              />
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
  } else {
    const apiKey = "73bb802b6842545f8bc067782928d7ae";
    let city = "Austin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

export default App;
