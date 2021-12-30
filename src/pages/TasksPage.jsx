import React from "react";
import TasksList from "../components/tasks-list/TasksList";
import TaskModal from "../components/task-modal/TaskModal";
import { useDispatch, useSelector } from "react-redux";
import { showNewModal } from "../redux/actions/modal.actions";
import * as tasksActions from "../redux/actions/tasks.actions";

const TasksPage = () => {
  const dispatch = useDispatch();
  const availableTasks = useSelector((state) => state.tasks.allTasks);
  const stateNewModal = useSelector((state) => state.modal.newModal);
  
  const toggleNewModal = () => {
    dispatch(showNewModal());
  };

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    dispatch(tasksActions.createTask(task));
  };

  const updateTask = (id, value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    dispatch(tasksActions.updateTask(id, value));
  };

  const removeTask = (id) => {
    dispatch(tasksActions.deleteTask(id));
  };

  const completeTask = (id) => {
    dispatch(tasksActions.completeTask(id));
  };

  return (
    <div>
      <h1>Todays To Do List.</h1>
      <button onClick={toggleNewModal} className="task-button">
        Add New Task
      </button>
      {!availableTasks.length && <h2 className="empty-label">No Task Yet.</h2>}
      <TasksList
        tasks={availableTasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />

      <TaskModal
        onSubmit={addTask}
        closeModal={toggleNewModal}
        showModal={stateNewModal}
      />
    </div>
  );
};

export default TasksPage;
