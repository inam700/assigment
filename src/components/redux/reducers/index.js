import { combineReducers } from "redux";
import postReducer from "./PostReducers";

export default combineReducers({
  post: postReducer,
});
