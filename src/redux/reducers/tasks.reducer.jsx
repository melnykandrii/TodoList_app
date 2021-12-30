import {
  DELETE_TASK,
  CREATE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
} from "../actions/tasks.actions";

const initialState = {
  allTasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      const newTasks = [action.task, ...state.allTasks];
      return {
        ...state,
        allTasks: newTasks,
      };
    case UPDATE_TASK:
      return {
        ...state,
        allTasks: state.allTasks.map((task) =>
          task.id === action.tid ? action.title : task
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== action.tid),
      };

    case COMPLETE_TASK:
      let updatedTasks = state.allTasks.map((task) => {
        if (task.id === action.tid) {
          task.isComplete = !task.isComplete;
        }
        return task;
      });
      return {
        ...state,
        allTasks: updatedTasks,
      };

    default:
      return state;
  }
};

export default taskReducer;
