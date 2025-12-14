import React, { useState } from "react";
import API from "../api/api";

function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email: email.trim(),
        password
      });

      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* MAIN HEADING */}
      <div className="auth-title">
        🍬 Sweet Shop Management System
      </div>

      <div className="auth-subtitle">
        Manage inventory, purchases, and stock efficiently
      </div>

      {/* LOGIN CARD */}
      <div className="login-box">
        <h2 style={{ marginBottom: "15px" }}>Login</h2>

        {/* FORM WITH AUTOCOMPLETE DISABLED */}
        <form autoComplete="off" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="buy"
            style={{ width: "100%", marginTop: "10px" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "14px" }}>
          New user?{" "}
          <span
            style={{ color: "#6A89A7", cursor: "pointer", fontWeight: 600 }}
            onClick={onSwitch}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
