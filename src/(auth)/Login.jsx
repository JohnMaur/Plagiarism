import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, ContinueWithGmail } from "../components";
import { useUser } from "./UserContext";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const { login } = useUser(); 
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Clear any previous errors
    try {
      // Send login request to backend API
      const response = await axios.post("https://plagiarism-database-connection-2-24-26.onrender.com/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data; // Extract token
        login(username, token); // Pass token to context
        navigate("/plagiarism-checker"); 
      }
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false); 
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
            textStyle="text-gray-600"
            placeholder="Username"
            borderColor="border-gray-300"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            textStyle="text-gray-600"
            placeholder="Password"
            borderColor="border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full text-white py-2 rounded-lg focus:outline-none focus:ring-2 ${
              loading
                ? "bg-blue-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
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
