import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const store = createStore(combineReducers(reducers), composeWithDevTools());
export default store;
