export default store => next => action => {
  const newAction = Object.assign({}, { myData: 111 }, action);
  const oldState = store.getState();
  const isSame = next(action).payload.length !== oldState.post.privacies.length;
  console.log("Is not same State", isSame, oldState);

  //   const nextState = store.dispatch(action);

  //   if (newAction.type !== "hello") {
  //     newAction.type = "hello";
  //   }
  next(newAction);
};
