import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => decrease()}>Decrease</button>
      <button onClick={() => increase()}>Increse</button>
    </div>
  );
}

export default Counter;
