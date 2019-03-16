import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./styles.css";
import Route from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(<Route />, rootElement);
