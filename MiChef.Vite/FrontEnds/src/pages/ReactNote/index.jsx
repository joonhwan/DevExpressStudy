// add the beginning of your app entry
import "vite/modulepreload-polyfill";
//
import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "@/assets/react.svg";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [note, setNote] = React.useState("");

  return (
    <div>
      <h1>Note by React</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <input
        type="text"
        onInput={(e) => setNote(e.target.value)}
        class="border-2 border-red-200 rounded-md px-4 py-2"
      />
      <p>
        Your note is <span>{note}</span>
      </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor id incidunt inventore itaque, labore laboriosam molestiae obcaecati odit perspiciatis placeat, provident quaerat quod, reprehenderit rerum sint vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid id libero quidem similique? A animi aperiam cumque, dicta dolores ea eaque eum fugiat incidunt iste minus quas sed sequi.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor id incidunt inventore itaque, labore laboriosam molestiae obcaecati odit perspiciatis placeat, provident quaerat quod, reprehenderit rerum sint vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid id libero quidem similique? A animi aperiam cumque, dicta dolores ea eaque eum fugiat incidunt iste minus quas sed sequi.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor id incidunt inventore itaque, labore laboriosam molestiae obcaecati odit perspiciatis placeat, provident quaerat quod, reprehenderit rerum sint vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid id libero quidem similique? A animi aperiam cumque, dicta dolores ea eaque eum fugiat incidunt iste minus quas sed sequi.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor id incidunt inventore itaque, labore laboriosam molestiae obcaecati odit perspiciatis placeat, provident quaerat quod, reprehenderit rerum sint vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid id libero quidem similique? A animi aperiam cumque, dicta dolores ea eaque eum fugiat incidunt iste minus quas sed sequi.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor id incidunt inventore itaque, labore laboriosam molestiae obcaecati odit perspiciatis placeat, provident quaerat quod, reprehenderit rerum sint vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid id libero quidem similique? A animi aperiam cumque, dicta dolores ea eaque eum fugiat incidunt iste minus quas sed sequi.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor id incidunt inventore itaque, labore laboriosam molestiae obcaecati odit perspiciatis placeat, provident quaerat quod, reprehenderit rerum sint vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid id libero quidem similique? A animi aperiam cumque, dicta dolores ea eaque eum fugiat incidunt iste minus quas sed sequi.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor id incidunt inventore itaque, labore laboriosam molestiae obcaecati odit perspiciatis placeat, provident quaerat quod, reprehenderit rerum sint vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid id libero quidem similique? A animi aperiam cumque, dicta dolores ea eaque eum fugiat incidunt iste minus quas sed sequi.
        </p>
        
    </div>
  );
}
