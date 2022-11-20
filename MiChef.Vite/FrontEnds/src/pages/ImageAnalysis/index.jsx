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
  return (
    <div>
      <h2>Image 분석</h2>
    </div>
  );
}
