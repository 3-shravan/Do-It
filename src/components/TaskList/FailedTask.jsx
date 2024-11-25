import React from 'react'

const FailedTask = ({task}) => {
  return (
   <div className=" flex-shrink-0 bg-red-400  h-full w-[300px] p-4 rounded-xl">
   <div className="  items-center flex justify-between mt-2 ">
     <h2 className="text-white text-xs bg-red-600 rounded px-3 py-1 ">
      {task.category}
     </h2>
     <h3 className=" text-sm">{task.taskDate}</h3>
   </div>
   <h1 className="text-2xl mt-7 text-emerald-950 font-serif">
    {task.taskTitle}
   </h1>
   <p className=" mt-1 text-sm font-bold  ">
     {task.taskDescription}
   </p>
   <div  className=' py-1 flex justify-start text-sm '>
      <button className='bg-red-700 rounded-lg px-3 hover:bg-red-700 py-2 font-semibold  text-sm'>Failed</button>
   </div>
 </div>
  )
}

export default FailedTask