import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormGroup, FormControl, Label } from "react-bootstrap";
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
    input: { type: "email", value: "", placeholder: "Enter an Email" }
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
    input: { onClick: onEnter, value: "", placeholder: "Enter an number" }
  }
];
class App extends Component {
  render() {
    return (
      <FormGroup className="App" style={object}>
        {forms.map(function(forms) {
          return (
            <React.Fragment>
              <label>{forms.label}</label>
              <FormControl {...forms.input} />
            </React.Fragment>
          );
        })}
      </FormGroup>
    );
  }
}

export default App;
