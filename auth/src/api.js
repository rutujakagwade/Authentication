import axios from "axios";

const API = axios.create({
  baseURL: "https://authentication-9r4c.onrender.com/api", // Your backend deployed URL
  withCredentials: true,  // Important for sending cookies
});

export default API;
