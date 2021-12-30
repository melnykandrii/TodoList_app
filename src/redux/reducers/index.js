import { combineReducers } from "redux";
import taskReducer from "./tasks.reducer";
import modalReducer from "./modal.reducer";

const rootReduces = combineReducers({
  tasks: taskReducer,
  modal: modalReducer,
});

export default rootReduces;
