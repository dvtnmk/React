import React, { useEffect, useState } from "react";

const initial = 0;
// store.set(() => {}) //call as function
// store.set(0);//not call function
export function useCount(initial) {
  return useState(initial);
}

export const increseCount = setter => () => {
  setter(count => count + 1);
};

const ComponentDidMount = () => {
  console.log("ComponentDidMount");
};

const componentWillUnMount = () => {
  console.log("componentWillUnMount");
};

const componentDidUpdate = () => {
  console.log("componentDidUpdate");
};
function CouterHook() {
  const [count, setCount] = useCount(initial);
  useEffect(() => {
    if (1 < 0) {
      ComponentDidMount();
    }
    return componentWillUnMount;
  }, []);
  useEffect(componentDidUpdate, [count]);
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
