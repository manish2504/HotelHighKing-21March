// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import App component

ReactDOM.render(
  <BrowserRouter> {/* Wrap your App component inside BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById("root") // Assuming your root div has id="root"
);
