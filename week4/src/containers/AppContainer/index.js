import React, { Component } from "react";
import Counter from "../../components/Counter";
import CounterHook from "../../components/CounterHook";
import { connect } from "react-redux";
import { addFriend } from "../../stores/actions";
import { from } from "rxjs";
class AppContainer extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ hide: true });
    }, 2000);
  };

  componentDidUpdate = () => {
    const { friend } = this.props;
    console.log("Friend", friend);
  };
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

const mapStateToProps = ({ friend }) => ({ friend });

const mapDispachToProps = dispatch => {
  return {
    addFriend: addFriend(dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(AppContainer);
