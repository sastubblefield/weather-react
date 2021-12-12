import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>Weather App</h1>
      <App />
    </div>
    <small>
      <p className="gitlink mt-2">
        <a className="opensource" href="https://github.com/sastubblefield">
          Open-source Code
        </a>
        , by Shannon Stubblefield
      </p>
    </small>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
