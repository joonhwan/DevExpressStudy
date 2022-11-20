import { useState } from "react";

function Counter({ initial }) {
  const [count, setCount] = useState(parseInt(initial || "1"));

  return (
    <div className="card">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 rounded border border-blue-200 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-400"
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/pages/ReactCounter/index.js</code> and save to test HMR
      </p>
    </div>
  );
}

export default Counter;
