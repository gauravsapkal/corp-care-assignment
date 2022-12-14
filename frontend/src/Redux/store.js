import {
    legacy_createStore as createStore,
    applyMiddleware
  } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
  
  
const middlewares = applyMiddleware(thunk);

export const store = createStore(reducer, middlewares);
