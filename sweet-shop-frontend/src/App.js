import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sweets from "./pages/Sweets";
import AddSweet from "./pages/AddSweet";
import { getUserRole, isTokenValid, logout } from "./utils/auth";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    if (isTokenValid()) {
      setLoggedIn(true);
    } else {
      logout();
      setLoggedIn(false);
    }
  }, []);

  const role = getUserRole();

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return showRegister ? (
      <Register onSwitch={() => setShowRegister(false)} />
    ) : (
      <Login
        onLogin={() => setLoggedIn(true)}
        onSwitch={() => setShowRegister(true)}
      />
    );
  }

  return (
    <>
      <div className="dashboard-header">
  <div className="dashboard-title-box">
    🍬 Sweet Shop
    <div className="dashboard-subtitle">
      Sweet Shop Management System
    </div>
  </div>

  <button className="logout" onClick={handleLogout}>
    Logout
  </button>
</div>


      <Sweets />
      {role === "admin" && <AddSweet />}
    </>
  );
}

export default App;
