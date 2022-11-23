import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalContext from "./components/GlobalContext";
import { RouteSwitch } from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <GlobalContext>
    <RouteSwitch />
  </GlobalContext>
  // </React.StrictMode>
);
