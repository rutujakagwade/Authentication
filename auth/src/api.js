import axios from "axios";

const API = axios.create({
  baseURL: "https://authentication-658c.onrender.com/api",
  withCredentials: true, // needed if backend expects cookies/auth headers
});

export default API;
