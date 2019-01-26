import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label || 0
    };
  }

  render() {
    const { label } = this.state;
    return <span>{label}</span>;
  }
}

export default Counter;
