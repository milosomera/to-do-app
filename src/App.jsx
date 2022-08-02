import React, { useContext } from "react";
import MyContext from "./MyContext";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const { logUser } = useContext(MyContext);

  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/to-do-app/login" element={<Login logUser={logUser} />} />
    </Routes>
  );
};

export default App;
