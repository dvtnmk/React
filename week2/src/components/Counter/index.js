import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label || 0
    };
  }
  componentDidUpdate = prevProp => {
    if (prevProp.label !== this.props.label) {
      const { label } = this.props;
      this.setState({ label });
    }
  };
  render() {
    const { label } = this.state;
    return (
      <div>
        <span>{label}</span>
        <br />
      </div>
    );
  }
}

export default Counter;
