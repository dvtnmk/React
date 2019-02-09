import React, { Component } from "react";
import { increseCount, useCount } from "../CounterHook";

function Counter() {
  const [count, setCount] = useCount(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={increseCount(setCount)}>
        Click me to hook please!!
      </button>
    </div>
  );
}

export default Counter;
