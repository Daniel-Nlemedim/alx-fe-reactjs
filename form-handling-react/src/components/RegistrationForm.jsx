import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Validation inside handleSubmit
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    alert("Registration successful!");

    // Clear form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label className="block text-grey-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Enter username"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-grey-700">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-grey-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
