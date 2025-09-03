// src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // simulate authentication
    navigate("/profile"); // redirect to profile
  };

  return (
    <div className="p-4">
      <h2>Login Page</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
