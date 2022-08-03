import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Button } from "react-bootstrap";
import { BsFillTrashFill, BsFillCheckCircleFill } from "react-icons/bs";

const TaskRow = (props) => {
  const { deleteTask, doneTask } = useContext(MyContext);

  let tasks = props.tasks.map((task) => {
    if (task.status === "pending") {
      return (
        <tr key={task._id}>
          <td>{task.name}</td>
          <td className="text-end">
            <Button variant="success" id={task._id} onClick={doneTask}>
              <BsFillCheckCircleFill />
            </Button>
            <Button variant="danger" id={task._id} onClick={deleteTask}>
              <BsFillTrashFill />
            </Button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={task.name}>
          <td>{task.name}</td>
          <td className="text-end">
            <Button variant="danger" id={task._id} onClick={deleteTask}>
              <BsFillTrashFill />
            </Button>
          </td>
        </tr>
      );
    }
  });

  return <React.Fragment>{tasks}</React.Fragment>;
};

export default TaskRow;
