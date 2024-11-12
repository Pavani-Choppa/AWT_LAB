import React, { useState } from "react";
import './Counter.css'
const Counter = () => {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  // Step 2: Event handlers
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);
<button onClick={reset}>Reset</button>


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button 
        onClick={increment} 
        style={{ padding: "10px 20px", margin: "5px", fontSize: "16px" }}
      >
        Increment
      </button>
      <button 
        onClick={decrement} 
        style={{ padding: "10px 20px", margin: "5px", fontSize: "16px" }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
