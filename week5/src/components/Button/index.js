import React from "react";
import "./styles.css";

function selectClass(color) {
  switch (color) {
    case "primary":
      return "btn primary";
    case "danger":
      return "btn danger";
    default:
      return "btn";
  }
}
function Button({ children, onClick, color }) {
  return (
    <button className={selectClass(color)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
