// add the beginning of your app entry
import "vite/modulepreload-polyfill";
import "./index.scss";
//
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
