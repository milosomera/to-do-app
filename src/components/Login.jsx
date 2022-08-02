import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

const Login = ({ logUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationModal, setRegistrationModal] = useState(false);

  const navigate = useNavigate();
  const showModal = () => setRegistrationModal(true);
  const hideModal = () => setRegistrationModal(false);

  const submitHandler = async () => {
    await logUser(email, password);
    navigate("/to-do-app", { replace: true });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center fullScreen">
      <Form className="p-3 w-50 rounded-3 login">
        <Form.Group className="m-2">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="text-center px-2">
          <Button onClick={submitHandler} className="w-100">
            Log in
          </Button>
          <div className="p-2 border-bottom"></div>
          <Button onClick={showModal} className="mt-3 bg-success">
            Create new account
          </Button>
        </div>
      </Form>
      <Register
        registrationModal={registrationModal}
        hideModal={hideModal}
        logUser={logUser}
      />
    </Container>
  );
};

export default Login;
