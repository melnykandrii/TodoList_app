import React, { useState, useEffect, useRef } from "react";

const TaskForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
    props.closeModal();
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.edit ? "Update the task" : "Add a task"}
        value={input}
        name="text"
        className={props.edit ? "task-input edit" : "task-input"}
        onChange={handleChange}
        ref={inputRef}
      />
      {props.edit ? (
        <button className="task-button edit">Update</button>
      ) : (
        <button className="task-button">Add Task</button>
      )}
    </form>
  );
};

export default TaskForm;
