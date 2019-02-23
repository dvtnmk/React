import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./src/components/Button";
import { Button as AntButton } from "antd";
import "antd/dist/antd.css";
function App() {
  return <Button children="Test" />;
}

const selector = document.querySelector("#app");
ReactDOM.render(<App />, selector);
