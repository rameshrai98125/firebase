import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyState from "./context/data/MyState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyState>
  </React.StrictMode>
);
