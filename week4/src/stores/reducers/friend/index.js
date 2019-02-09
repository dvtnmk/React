import { actionTypes } from "../../actions";

const initialState = [
  {
    id: 1,
    firstName: "Peter",
    lastName: "Parker",
    age: 20,
    friends: []
  },
  {
    id: 2,
    firstName: "Steve",
    lastName: "Roger",
    age: 100,
    friends: []
  }
];

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FRIEND: {
      const { friendId, targetFriendId } = action.payload;
      let friend1Index = null,
        friend2Index = null;
      const friend1 = state.find((person, i) => {
        const isMatch = person.id == friendId;
        if (isMatch) {
          friend1Index = i;
        }
        return isMatch;
      });
      const friend2 = state.find((person, i) => {
        const isMatch = person.id == targetFriendId;
        if (isMatch) {
          friend2Index = i;
        }
        return isMatch;
      });
      if (!friend1 || !friend2) {
        return state;
      }
      friend1.friends.push(targetFriendId);
      friend2.friends.push(friendId);
      let newState = [...state];
      newState[friend1Index] = friend1;
      newState[friend2Index] = friend2;
      return newState;
    }
    default:
      return state;
  }
};

export default friendReducer;
