import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);

      console.log("Backend Response:", response);

      // Save token and role in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      alert("Login successful!");

      // Redirect based on user role
      if (response.data.role === "admin") {
        console.log("Redirecting to /admin");
        navigate("/admin");
      } else {
        console.log("Redirecting to /trains");
        navigate("/trains");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(`Error: ${error.response?.data?.error || "Something went wrong"}`);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
