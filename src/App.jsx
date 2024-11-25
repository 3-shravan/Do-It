import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { loggedInAs, loggedInUserData } = useContext(AuthContext);

  return (
    <>
      {!loggedInAs && <Login />}
      {loggedInAs === "admin" && (
        <AdminDashboard adminData={{ loggedInUserData, loggedInAs }} />
      )}
      {loggedInAs === "employee" && (
        <EmployeeDashboard employeeData={{ loggedInUserData, loggedInAs }} />
      )}
    </>
  );
}

export default App;
