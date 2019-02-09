import React, { Component } from "react";
import Counter from "../../components/Counter";
import CounterHook from "../../components/CounterHook";
class AppContainer extends Component {
  render() {
    return (
      <div>
        <span>No hook</span>
        <Counter />
        <br />
        <br />
        <span>With Hook</span>
        <CounterHook />
      </div>
    );
  }
}

export default AppContainer;
