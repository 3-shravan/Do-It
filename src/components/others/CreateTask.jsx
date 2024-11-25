import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { userData, setUserData } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      failed: false,
      completed: false,
      newTask: true,
      active: false,
      taskDate,
      category,
    };

    const updatedEmployees = userData.employee.map((user) => {
      if (user.username === assignTo) {
        return {
          ...user,
          tasks: [...(user.tasks || []), newTask],
          taskCounts: {
            ...user.taskCounts,
            newTask: (user.taskCounts.newTask || 0) + 1,
          },
        };
      }
      return user;
    });

    const updatedUserData = {
      ...userData,
      employee: updatedEmployees,
    };
    setUserData(updatedUserData);

    localStorage.setItem("employee", JSON.stringify(updatedEmployees));
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className=" bg-[#131313] m-3 mt-3 p-1 rounded-lg">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className=" flex flex-wrap items-start justify-between "
      >
        <div className="w-[43%] px-9 py-2 ">
          <div>
            <h3 className=" font-semibold text-sm  text-zinc-300 ml-1">
              Task Title{" "}
            </h3>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="border-2 p-2 border-zinc-600  font-bold text-emerald-500 outline-none rounded-lg text-xs  w-full mt-2 mb-2"
              placeholder="Enter your title"
              required
            />
          </div>

          <div>
            <h3 className=" font-semibold text-sm text-zinc-300 ml-1">Date</h3>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="border-2 p-2 font-bold text-emerald-900 border-zinc-600 outline-none rounded-lg text-xs   mt-2 mb-2"
              required
            />
          </div>
          <div>
            <h3 className=" font-semibold text-sm text-zinc-300 ml-1">
              Assign To
            </h3>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              placeholder="employee name"
              className="border-2 p-2 font-bold text-emerald-500 border-zinc-600 outline-none rounded-lg text-xs  w-full mt-2 mb-2"
              required
            />
          </div>
          <div>
            <h3 className=" font-semibold text-sm text-zinc-300 ml-1">
              Category
            </h3>
            <input
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="design , dev , etc"
              className="border-2 p-2 font-bold text-emerald-500 border-zinc-600 outline-none rounded-lg text-xs  w-full mt-2 mb-2"
              required
            />
          </div>
        </div>

        <div className="flex items-center  justify-center w-[45%] px-12  py-3">
          <div className="w-full">
            <h3 className=" font-semibold text-sm text-zinc-300 ml-1">
              Description
            </h3>
            <textarea
              rows="9"
              cols="45"
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              placeholder="Detailed description of your task..."
              className="border-2 font-bold text-emerald-500 border-zinc-600 outline-none rounded-lg text-xs p-3 w-full mt-1 mb-2"
              required
            ></textarea>
            <button className="bg-emerald-600 hover:bg-emerald-900 w-full text-white font-bold py-2 px-4 rounded-sm mt-7 ">
              Create Task{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
