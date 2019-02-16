import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./src/components/Button";
function App() {
  return <Button children="Test" />;
}

const selector = document.querySelector("#app");
ReactDOM.render(<App />, selector);
