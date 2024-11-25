import React, { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [loggedInAs, setLoggedInAs] = useState(() =>
    localStorage.getItem("loggedInAs")
  );

  const [loggedInUserData, setLoggedInUserData] = useState(() =>
    JSON.parse(localStorage.getItem("loggedInUserData"))
  );

  useEffect(() => {
    setLocalStorage();
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  }, []);

  const handleLogin = (email, password) => {
    if (userData) {
      const admin = userData.admin.find(
        (user) => user.email === email && user.password === password
      );

      if (admin) {
        setLoggedInAs("admin");
        setLoggedInUserData(admin);
        localStorage.setItem("loggedInAs", "admin");
        localStorage.setItem("loggedInUserData", JSON.stringify(admin));
        return;
      }

      const employee = userData.employee.find(
        (user) => user.email == email && user.password == password
      );
      if (employee) {
        setLoggedInUserData(employee);
        setLoggedInAs("employee");

        localStorage.setItem("loggedInAs", "employee");
        localStorage.setItem("loggedInUserData", JSON.stringify(employee));
        return;
      }
    }
    alert("Invalid credentials");
  };

  const handleLogout = () => {
    setLoggedInAs(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInAs");
    localStorage.removeItem("loggedInUserData");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        loggedInAs,
        loggedInUserData,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
