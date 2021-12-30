import React, { useState } from "react";
import { RiEditBoxFill, RiCloseCircleLine } from "react-icons/ri";
import TaskModal from "../task-modal/TaskModal";
import { useDispatch, useSelector } from "react-redux";
import { showUpdateModal } from "../../redux/actions/modal.actions";

const TasksList = ({ tasks, completeTask, removeTask, updateTask }) => {
  const dispatch = useDispatch();
  const stateUpdateModal = useSelector((state) => state.modal.updateModal);
  const toggleUpdateModal = () => {
    dispatch(showUpdateModal());
    setEdit({ id: null, value: "" });
  };
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  const onEditTask = (task) => {
    setEdit({ id: task.id, value: task.text });
    dispatch(showUpdateModal());
  };
  if (edit.id) {
    return (
      <TaskModal
        edit={edit}
        onSubmit={submitUpdate}
        closeModal={toggleUpdateModal}
        showModal={stateUpdateModal}
      />
    );
  }
  if (!tasks.length) {
    <div className="empty-label">No task yet</div>;
  }
  return (
    <>
      {tasks.map((task, index) => (
        <div
          className={task.isComplete ? "task-row complete" : "task-row"}
          key={index}
        >
          <div key={task.id} onClick={() => completeTask(task.id)}>
            {task.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTask(task.id)}
              className="delete-icon"
            />
            <RiEditBoxFill
              onClick={() => onEditTask(task)}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TasksList;
