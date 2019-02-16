import React, { Component } from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Hello react</h1>;
}

const selector = document.querySelector("#app");
ReactDOM.render(<App />, selector);
