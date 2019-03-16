import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import reducers from "./reducers";
const store = createStore(combineReducers(reducers), devToolsEnhancer());

export default store;
