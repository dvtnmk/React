const actionTypes = {
  ADD_FRIED: "ADD_FRIEND"
};

const addFriend = dispatch => (friendId, targetFriendId) => {
  dispatch({
    type: actionTypes.ADD_FRIEND,
    payload: { friendId, targetFriendId }
  });
};
export { actionTypes, addFriend };
