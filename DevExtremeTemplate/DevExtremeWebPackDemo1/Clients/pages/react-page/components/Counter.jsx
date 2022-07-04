import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Counter Demo</h3>
      <div className="form-group">
        <p className="display-1">{count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          증가하기(+)
        </button>
        <button className="btn btn-warning" onClick={() => setCount(count - 1)}>
          감소하기(-)
        </button>
      </div>
    </>
  );
}
