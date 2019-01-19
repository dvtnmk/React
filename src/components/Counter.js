import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.count != this.props.count) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  decreaseNumber = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return <p onClick={this.decreaseNumber}>{this.state.count}</p>;
  }
}

export default Counter;
