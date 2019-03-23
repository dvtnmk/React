import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middlewares from "./middlewares";
import reducers from "./reducers";
const mw = [...middlewares];
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...mw))
);

export default store;
