import axios from "axios";

const API = axios.create({
  baseURL: "https://authentication-sau6.onrender.com/api",
  withCredentials: true, // to handle cookies if needed
});

export default API;
