import React, { useContext } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({adminData}) => {

  const {username}= adminData.loggedInUserData;
  return (
    <div className="p-5 h-screen  w-full  bg-[#1c1c1c] ">
      <Header username={username}/>
     <CreateTask />
     <AllTask />
    </div>
  );
};

export default AdminDashboard;
