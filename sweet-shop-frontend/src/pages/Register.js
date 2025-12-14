import React, { useState } from "react";
import API from "../api/api";

function Register({ onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/register", {
        name: name.trim(),
        email: email.trim(),
        password
      });

      alert("Registered successfully. Please login.");
      onSwitch();
    } catch (err) {
      alert("Registration failed. Email may already exist.");
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
        Create your account to manage sweets efficiently
      </div>

      {/* REGISTER CARD */}
      <div className="login-box">
        <h2 style={{ marginBottom: "15px" }}>Register</h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="buy"
          style={{ width: "100%", marginTop: "10px" }}
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p style={{ textAlign: "center", marginTop: "14px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#6A89A7", cursor: "pointer", fontWeight: 600 }}
            onClick={onSwitch}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
