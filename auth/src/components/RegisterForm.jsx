import React, { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", input);
      if (res.data.success) {
        toast.success("Registered successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/login"), 2500);
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error("Registration failed: " + err.response.data.message, {
          position: "top-right",
        });
      } else {
        toast.error("Registration failed: Network or server error", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className="max-w-md mx-auto mt-10 bg-white p-8 shadow-md rounded"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          className="w-full mb-6 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Register
        </button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login here
          </Link>
        </p>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};

export default RegisterForm;
