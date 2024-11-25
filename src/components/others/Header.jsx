import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = ({ username }) => {
  const {handleLogout}=useContext(AuthContext)
  return (
    <div className="flex items-center justify-between mx-10">
      <h1 className="text-xl ">
        {" "}
        Hello <br /> <span className="font-bold text-2xl ">{username}👋</span>
      </h1>
      <button className=" bg-red-500 text-white hover:bg-red-800 rounded-sm font-semibold px-3 py-2 text-sm"
      onClick={() => handleLogout() }
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
