import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      navigate("/login");
    }
  }, [location, navigate]);

  const user = location.state;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-md">
        <img
          src="https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Hello, {user?.name}</h1>
        <p className="mb-6">Welcome back! You're logged in.</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
