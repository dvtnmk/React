import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let object = {
  width: 200,
  height: 500,
  backgroundColor: "red"
};

const onClick = function() {
  alert("Hello");
};
const onEnter = function() {
  alert("Hello Enter");
};

let forms = [
  {
    label: "Email",
    input: { value: "", placeholder: "Enter an Email" }
  },
  {
    label: "First name",
    input: { value: "", placeholder: "Enter an first name" }
  },
  {
    label: "Last name",
    input: { value: "", placeholder: "Enter an last name" }
  },
  {
    label: "Phone number",
    input: { value: "", placeholder: "Enter an number" }
  }
];
class App extends Component {
  render() {
    return (
      // syntax style : style={}
      <div
        className="App"
        style={object}
        // onClick={onClick}
        // onMouseEnter={onEnter}
        // onMouseOver={onEnter}
      >
        {forms.map(function(forms) {
          return (
            <div>
              <label>{forms.label}</label>
              <input value={forms.input.placeholder} />
            </div>
          );
        })}
        <div />
      </div>
    );
  }
}

export default App;
