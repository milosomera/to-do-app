import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Navigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import AddTaskForm from "./AddTaskForm";
import PendingTasks from "./PendingTasks";
import DoneTasks from "./DoneTasks";

const Homepage = () => {
  const {
    isLoggedIn,
    user: { name },
    logout,
  } = useContext(MyContext);

  if (!isLoggedIn) {
    return <Navigate to={"to-do-app/login"} replace={true} />;
  }

  return (
    <Container id="body-container">
      <h1 className="position-relative">
        Hello {name}
        <Button
          className="position-absolute top-50 end-0 translate-middle-y"
          variant="dark"
          onClick={logout}
        >
          logout
        </Button>
      </h1>
      <AddTaskForm />
      <PendingTasks />
      <DoneTasks />
    </Container>
  );
};

export default Homepage;
