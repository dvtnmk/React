import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";

class Normal extends Component {
  componentDidUpdate() {
    console.log("Normal componentDidUpdate");
  }

  componentDidMount() {
    console.log("Normal componentDidMount");
  }

  render() {
    const { count } = this.props;
    return <h1>Hello Component {count}</h1>;
  }
}

class Pure extends PureComponent {
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return false
  // }

  componentDidMount() {
    console.log("Pure ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Pure Update");
  }

  render() {
    const { count } = this.props;
    return <h1>Hello Pure Component {count}</h1>;
  }
}

const Diver = () => (
  <div>
    <App />
  </div>
);

class App extends Component {
  state = {
    count: 0,
    prepareCount: 0
  };

  setCount = () => {
    this.setState({ count: this.state.prepareCount });
  };
  render() {
    const { count, prepareCount } = this.state;
    return (
      <React.Fragment>
        <Normal count={count} />
        <Pure count={count} />

        <input
          value={prepareCount}
          onChange={e => {
            this.setState({ prepareCount: e.target.value });
          }}
        />
        <button onClick={this.setCount}>save</button>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
