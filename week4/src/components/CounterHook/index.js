import React, { useEffect, useState } from "react";

const initial = 0;

export function useCount() {
  const [count, setCount] = useState(initial);
  return [count, setCount];
}

export const increseCount = setter => () => {
  setter(count => count + 1);
};
function CouterHook() {
  const [count, setCount] = useCount(initial);
  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={increseCount(setCount)}>
        Click me to hook please!!
      </button>
    </div>
  );
}

export default CouterHook;
