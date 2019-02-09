import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../../stores/actions";
import AddFriend from "../../components/AddFriend";
class AppContainer extends Component {
  state = { hide: false };
  componentDidMount = () => {};

  componentDidUpdate = () => {
    const { friend } = this.props;
    console.log("Friend", friend);
  };

  onAddFriend = (friendId, targetFriendId) => {
    const { addFriend } = this.props;
    addFriend(friendId, targetFriendId);
  };

  render() {
    const { hide } = this.state;
    return (
      <div>
        <AddFriend onAddFriend={this.onAddFriend} />
      </div>
    );
  }
}

const mapStateToProps = ({ friend }) => ({ friend });

const mapDispatchToProps = dispatch => {
  return {
    addFriend: addFriend(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
