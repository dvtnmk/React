import React from "react";
import "./styles.css";
import { Button as AntButton } from "antd";

// function selectClass(color) {
//   switch (color) {
//     case "primary":
//       return "btn primary";
//     case "danger":
//       return "btn danger";
//     case "green":
//       return "btn green";
//     default:
//       return "btn";
//   }
// }

function Button({ children, onClick, color, ...rest }) {
  return (
    <AntButton onClick={onClick} {...rest}>
      {children}
    </AntButton>
  );
}

export default Button;
