import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") ? true : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  const [tasks, setTasks] = useState([]);

  const logUser = async (email, password) => {
    const { data: user } = await axios.post(
      "http://to-do-app-server.herokuapp.com/users/login",
      {
        email,
        password,
      }
    );
    if (user.error) {
      alert(user.error);
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      setUser(user);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const addTask = async (task) => {
    const newTask = await axios.post(
      "http://to-do-app-server.herokuapp.com/tasks/add",
      {
        name: task,
        user_id: user._id,
      }
    );
    setTasks([...tasks, newTask]);
  };

  const doneTask = async (e) => {
    const tasksCopy = [...tasks];
    tasksCopy.map((task) => {
      if (e.currentTarget.id === task._id) {
        task.status = "done";
      }
      return tasksCopy;
    });
    await axios.patch(
      "http://to-do-app-server.herokuapp.com/tasks/done/" + e.currentTarget.id,
      {}
    );
    setTasks([...tasksCopy]);
  };

  const deleteTask = async (e) => {
    const tasksCopy = [...tasks];
    tasksCopy.map((task) => {
      if (e.currentTarget.id === task._id) {
        tasksCopy.splice(tasksCopy.indexOf(task), 1);
      }
      return tasksCopy;
    });
    await axios.delete(
      `http://to-do-app-server.herokuapp.com/tasks/delete/${e.currentTarget.id}/${user._id}`
    );
    setTasks([...tasksCopy]);
  };

  const state = {
    isLoggedIn,
    user,
    tasks,
    setTasks,
    logUser,
    logout,
    addTask,
    doneTask,
    deleteTask,
  };

  useEffect(() => {
    const userTasks = async () => {
      const {
        data: { tasks: userTasks },
      } = await axios(
        "http://to-do-app-server.herokuapp.com/users/" + user._id
      );
      userTasks ? setTasks(userTasks) : setTasks([]);
    };
    userTasks();
  }, [user, tasks.length]);

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default MyProvider;
