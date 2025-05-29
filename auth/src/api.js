import axios from "axios";

const API = axios.create({
  baseURL: "https://authentication-658c.onrender.com",
  withCredentials: true, // to handle cookies if needed
});

export default API;
