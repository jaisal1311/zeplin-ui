import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";

export const reducer = combineReducers({
  eventReducer: eventReducer,
});
