import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-emerald-700 flex items-center justify-center rounded-lg">
        <form
          className="flex items-center justify-center flex-col  px-12 py-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex mx-">
            <h1 className="text-3xl font-bold text-zinc-600 mt-2 mb-6">
              Login
            </h1>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 w-full outline-none  placeholder:text-zinc-600 font-semibold  placeholder:text-sm border-emerald-700 mt-5 mx-5  rounded-full p-2.5 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 w-full outline-none placeholder:text-zinc-600 font-semibold placeholder:text-sm border-emerald-700 mx-5 mt-4 rounded-full p-2.5  "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-emerald-600  hover:bg-emerald-900  mb-5 font-semibold p-2  w-24 rounded-full mt-6 ">
            {" "}
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
