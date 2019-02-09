import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { friend } from "./reducers";

const store = createStore(friend, composeWithDevTools());
export default store;
