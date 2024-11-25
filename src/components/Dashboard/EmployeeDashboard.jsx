import React from "react";
import Header from "../others/Header";
import Tasks from "../others/Tasks";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = ({ employeeData }) => {
  
  const { username, taskCounts, tasks } = employeeData.loggedInUserData;

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-screen">
      <Header username={username} />
      <Tasks taskCounts={taskCounts} />
      <Tasklist tasks={tasks} />
    </div>
  );
};

export default EmployeeDashboard;
