import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", input);
      if (res.data.success) {
        // Since token is stored in httpOnly cookie, no need to save user in localStorage
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/home"), 2500);
      }
    } catch (err) {
      toast.error("Login failed. Redirecting to Register...", {
        position: "top-right",
      });
      setTimeout(() => navigate("/register"), 2500);
    }
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto mt-10 bg-white p-8 shadow-md rounded"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Login
        </button>
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline"
            type="button"
          >
            Register here
          </button>
        </p>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};

export default LoginForm;
