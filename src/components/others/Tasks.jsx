import React from 'react';

const Tasks = ({taskCounts}) => {
  return (
    <div className="flex flex-wrap justify-between gap-5 m-7">
      <div className="bg-red-400 px-5 py-9 rounded-xl w-full sm:w-[45%] lg:w-[22%]">
        <h2 className="text-3xl font-semibold">{taskCounts.newTask}</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-400 px-5 py-9 rounded-xl w-full sm:w-[45%] lg:w-[22%]">
        <h2 className="text-3xl font-semibold">{taskCounts.completed}</h2>
        <h3 className="text-2xl font-medium">Completed</h3>
      </div>
      <div className="bg-green-400 px-5 py-9 rounded-xl w-full sm:w-[45%] lg:w-[22%]">
        <h2 className="text-3xl font-semibold">{taskCounts.active}</h2>
        <h3 className="text-2xl font-medium">Accepted </h3>
      </div>
      <div className="bg-yellow-400 px-5 py-9 rounded-xl w-full sm:w-[45%] lg:w-[22%]">
        <h2 className="text-3xl font-semibold">{taskCounts.failed}</h2>
        <h3 className="text-2xl font-medium">Failed</h3>
      </div>
    </div>
  );
}

export default Tasks;
