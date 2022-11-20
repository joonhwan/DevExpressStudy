// add the beginning of your app entry
import "vite/modulepreload-polyfill";
//
import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "@/assets/react.svg";
import Counter from "@/components/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const initial = document.getElementById("reactCountInitialCount").value;
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter initial={initial} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
