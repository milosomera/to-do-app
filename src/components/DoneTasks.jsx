import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Container, Table } from "react-bootstrap";
import TaskRow from "./TaskRow";

const DoneTasks = () => {
  const { tasks } = useContext(MyContext);

  let doneTasks = tasks.filter((task) => {
    return task.status === "done";
  });

  return (
    <Container>
      {doneTasks.length === 0 ? (
        <div className="text-center fw-bold">No Done Tasks</div>
      ) : (
        <Table striped hover>
          <thead>
            <tr>
              <th colSpan="2" className="text-center">
                Done Tasks
              </th>
            </tr>
          </thead>
          <tbody>
            <TaskRow tasks={doneTasks} />
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default DoneTasks;
