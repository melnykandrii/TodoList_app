import React from "react";
import ReactModal from "react-modal";
import TaskForm from "../task-form/TaskForm";
import { RiCloseCircleLine } from "react-icons/ri";

const TaskModal = (props) => {
  return (
    <ReactModal
      isOpen={props.showModal}
      ariaHideApp={false}
      className="task-modal"
    >
      <RiCloseCircleLine
        onClick={props.closeModal}
        className="close-icon"
        size={30}
      />
      {props.edit ? <h1>Update your Task</h1> : <h1>Add New Task</h1>}
      <TaskForm
        edit={props.edit}
        onSubmit={props.onSubmit}
        closeModal={props.closeModal}
      />
    </ReactModal>
  );
};

export default TaskModal;
