import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer";
import { Provider } from "react-redux";
import store from "../../stores";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
