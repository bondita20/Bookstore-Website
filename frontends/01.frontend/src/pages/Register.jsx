import React, { useState } from "react";
import "../styles/Register.css";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      alert("❌ Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Registered successfully! You can now log in.");
        setUser({ name: "", email: "", password: "" });
        
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("❌ Network error.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1 className="brand-heading">📚 Bookcom</h1>
        <h2 className="form-heading">Create Account</h2>
        <p className="form-subtext">Join the bookstore community today!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="login-msg">
          Already have an account? <a href="/login">Login</a>
        </p>        
      </div>
    </div>
  );
}