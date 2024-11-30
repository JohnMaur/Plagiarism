import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, ContinueWithGmail } from "../components";
import { useUser } from "./UserContext";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser(); // Use login from context
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend API
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data; // Extract token
        login(username, token); // Pass token to context
        navigate("/plagiarism-checker"); // Redirect to plagiarism checker page
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="pt-32 pb-10 w-full h-full overflow-auto flex justify-center items-center bg-gray-50">
      <div className="w-[25rem] bg-white p-8 rounded-lg shadow-sm flex items-center flex-col border-[1px] border-solid border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>

        <form className="w-full" onSubmit={handleLogin}>
          {/* Name Input */}
          <TextInput
            label="Username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>

        <ContinueWithGmail />
      </div>
    </div>
  );
};

export default Login;
