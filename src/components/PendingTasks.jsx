import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Container, Table } from "react-bootstrap";
import TaskRow from "./TaskRow";

const PendingTasks = () => {
  const { tasks } = useContext(MyContext);

  let pendingTasks = tasks.filter((task) => {
    return task.status === "pending";
  });

  return (
    <Container>
      {pendingTasks.length === 0 ? (
        <div className="text-center fw-bold">No Pending Tasks</div>
      ) : (
        <Table striped hover>
          <thead>
            <tr>
              <th colSpan="2" className="text-center">
                Pending Tasks
              </th>
            </tr>
          </thead>
          <tbody>
            <TaskRow tasks={pendingTasks} />
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default PendingTasks;
