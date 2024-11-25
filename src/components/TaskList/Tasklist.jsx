import React from "react";
import "../../index.css";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ tasks }) => {
  return (
    <div
      id="tasklist"
      className=" flex items-center justify-start ml-7 mr-7 w-full h-[55%] overflow-x-auto  rounded-lg gap-5 flex-nowrap py-5  "
    >
      {tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} task={task} />;
        }
        if (task.newTask) {
          return <NewTask key={index} task={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={index} task={task} />;
        }
        if (task.failed) {
          return <FailedTask key={index} task={task} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
