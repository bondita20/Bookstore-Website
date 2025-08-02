import React, { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("❌ Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("✅ Logged in successfully!");
        setUser({ email: "", password: "" });
      } else {
        alert("❌ Invalid credentials or server error.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("❌ Network error.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="brand-heading">📚 Bookcom</h1>
        <h2 className="form-heading">Welcome Back!</h2>
        <p className="form-subtext">Please login to continue to your bookstore</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="register-msg">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}