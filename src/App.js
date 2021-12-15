import "./App.css";

function App() {
  return (
    <div>
      <weather />
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
      <h1 className="temp-number">60º</h1>
      <div className="forecast-list">
        <ul>
          <li>San Diego</li>
          <li>Tuesday 4:30</li>
          <li>Humidity: 86%</li>
          <li>Wind: 10mph</li>
          <li>clouds</li>
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
              src="https://openweathermap.org/img/wn/01d@2x.png"
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
}

export default App;
