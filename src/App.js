import React from 'react';
import AddTaskForm from "./components/AddTaskForm";
import PendingTasks from "./components/PendingTasks";
import DoneTasks from "./components/DoneTasks";
import './App.css';

const App = () => {

  return (
    <div className="app-body">
      <AddTaskForm/>
      <PendingTasks/>
      <DoneTasks/>
    </div>
  );

}

export default App;