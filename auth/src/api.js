import axios from "axios";

const API = axios.create({
  baseURL: "https://authentication-9r4c.onrender.com/api",
  withCredentials: true, // to handle cookies if needed
});

export default API;
