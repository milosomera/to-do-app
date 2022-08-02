import React, { useContext, useState } from "react";
import MyContext from "../MyContext";
import { Form, Button } from "react-bootstrap";

const AddTaskForm = () => {
  const { addTask } = useContext(MyContext);
  const [taskInput, setTaskInput] = useState("");

  const addTaskHandler = () => {
    if (!taskInput) {
      alert("This field can't be blank.");
    } else {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <Form className="position-relative">
      <Form.Control
        type="text"
        value={taskInput}
        placeholder="Make a task"
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <Button
        className="position-absolute top-50 end-0 translate-middle-y opacity-50"
        type="button"
        onClick={addTaskHandler}
      >
        Add Task
      </Button>
    </Form>
  );
};

export default AddTaskForm;
