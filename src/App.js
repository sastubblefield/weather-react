import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span className="temperature">78</span>
          <span className="degrees">
            <a className="fahrenheit-link" href="#">
              {" "}
              °F{" "}
            </a>{" "}
            |
            <a className="celcius-link" href="#">
              {" "}
              °C{" "}
            </a>
          </span>
        </h1>
        <h2>
          <div className="location">SAN DIEGO</div>
          <div className="date">Friday 5:00</div>
          <div className="other">
            humidity: <span className="humidity">83</span>%<br />
            wind: <span className="wind">2</span>mph
            <br />
          </div>
          <div className="description">clear</div>
        </h2>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
