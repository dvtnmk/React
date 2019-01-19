import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormGroup, FormControl, Label } from "react-bootstrap";
let object = {
  width: 200,
  height: 500,
  margin: 10
};

const onClick = function() {
  alert("Hello");
};
const onEnter = function() {
  alert("Hello Enter");
};

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props.test); initial ptop
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
      ]
    };
  }
  // componentWillMount
  onChange = e => {
    let value = e.target.value;
    this.setState({
      name: value
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Update name state in Should Update", this.state.name);
    console.log("Next name state in Should Update", nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Update name state in Should Update", this.state.name);
    console.log("Next name state in Should Update", this.state.name);
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Update State", this.state.name);
    console.log("Update State", this.state.name);
  }
  render() {
    console.log("Render State", this.state.name);

    return (
      <FormGroup className="App" style={object}>
        {this.state.forms.map((forms, index) => {
          return (
            <React.Fragment key={index}>
              <Label>{forms.label + " " + this.state.name} </Label>
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
