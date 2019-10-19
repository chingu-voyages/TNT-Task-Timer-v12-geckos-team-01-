import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  tasks: taskReducer,
  ui: uiReducer
});
