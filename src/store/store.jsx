import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {globalReducer} from "./reducers/globalReducer.jsx";

export const reducers = combineReducers({global : globalReducer})

export  const store = createStore(reducers , applyMiddleware(thunk , logger))