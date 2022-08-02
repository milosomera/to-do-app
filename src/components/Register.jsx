import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ registrationModal, hideModal, logUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPasswordError, setMatchPasswordError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    if (password !== confirmPassword) {
      setMatchPasswordError("Passwords do not match");
    } else {
      const { data: user } = await axios.post(
        "http://localhost:8080/users/register",
        {
          name,
          email,
          password,
        }
      );
      if (user.error) {
        alert(user.error);
      } else {
        await logUser(email, password);
        navigate("/to-do-app", { replace: true });
      }
    }
  };

  return (
    <Modal
      show={registrationModal}
      onHide={hideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="p-3 w-100">
          <Form.Group className="m-2">
            <Form.Control
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
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
          <Form.Group className="m-2">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Form.Text>{matchPasswordError}</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-center w-100">
          <Button
            type="submit"
            className="w-50"
            variant="success"
            onClick={submitHandler}
          >
            Sign up
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Register;
