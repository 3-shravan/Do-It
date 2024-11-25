import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div
      id="alltask"
      className="bg-[#131313] m-3  mt-4  h-40 rounded-lg  font-semibold  "
    >
      <div className="text-sm bg-red-500 p-3  rounded-t-lg   flex   justify-between">
        <h1 className="w-1/5  font-mono h-4 text-center   ">Employee Name</h1>
        <h1 className="w-1/5 font-mono h-4 text-center   ">Active </h1>
        <h1 className="w-1/5 font-mono h-4 text-center   ">New Task </h1>
        <h1 className="w-1/5 font-mono h-4 text-center   ">Completed </h1>
        <h1 className="w-1/5 font-mono h-4 text-center   ">Failed</h1>
      </div>

      <div
        id="scrollbar"
        className="text-grey-400 rounded-lg  overflow-auto h-32   "
      >
        {userData.employee &&
          userData.employee.map((user, idx) => (
            <div
              key={idx}
              className="text-sm bg-[#131313] p-2 font-bold   rounded-lg   flex   justify-between"
            >
              <h1 className="w-1/5 p-1 text-center text-gray-300 ">
                {user.username}
              </h1>
              <h1 className="w-1/5 p-1 text-center text-yellow-300 ">
                {user.taskCounts.active}
              </h1>
              <h1 className="w-1/5 p-1 text-center  text-sky-500 ">
                {user.taskCounts.newTask}
              </h1>
              <h1 className="w-1/5 p-1 text-center text-emerald-500  ">
                {user.taskCounts.completed}
              </h1>
              <h1 className="w-1/5 p-1 text-center text-red-600 ">
                {user.taskCounts.failed}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTask;
