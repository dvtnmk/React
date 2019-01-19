import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  addNumber = () => {
    this.props.onAdd();
  };

  render() {
    return <button onClick={this.addNumber}>Add</button>;
  }
}

export default Button;
