export const DELETE_TASK = "DELETE_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const createTask = (task) => {
  return {
    type: CREATE_TASK,
    task,
  };
};

export const updateTask = (id, title) => {
  return {
    type: UPDATE_TASK,
    tid: id,
    title,
  };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, tid: id };
};

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    tid: id,
  };
};
