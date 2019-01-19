import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormGroup, FormControl, Label } from "react-bootstrap";
import Button from "./components/Button";
import Counter from "./components/Counter";
let object = {
  width: 200,
  height: 500,
  backgroundColor: ""
};

const onClick = function() {
  console.log("Hello");
};
const onEnter = function() {
  console.log("Hello Enter");
};

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Test Props", props.test);

    this.state = {
      name: props.name,
      forms: [
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
      ],
      count: 0
    };
  }

  onChange = e => {
    this.setState({ name: e.target.value });
  };

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate", this.state.name);
    // console.log("nextProps", nextState.name);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate", this.state.name);
    // console.log("nextProps", nextState.name);
    return true;
  }

  componentDidUpdate(prevProps, nextState) {
    // console.log("componentDidUpdate", this.state.name);
    // console.log("prevProps", nextState.name);
  }

  onCount = () => {
    let oldCounter = this.state.count;
    this.setState({ count: ++oldCounter });
    console.log(this.state.count);
  };

  render() {
    console.log("render", this.state.name);
    return (
      <FormGroup className="App" style={object}>
        <Button count={this.state.count} onAdd={this.onCount} />
        <br />
        <Label>{this.state.count}</Label>
        <br />
        <Counter count={this.state.count} />
        {this.state.forms.map((forms, index) => {
          return (
            <React.Fragment key={index}>
              <Label bsStyle="info">
                {forms.label + " " + this.state.name}
              </Label>
              <FormControl
                {...forms.input}
                value={this.state.name}
                onChange={this.onChange}
              />
            </React.Fragment>
          );
        })}
      </FormGroup>
    );
  }
}

export default App;
