import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/logIn", // Your backend API URL
  withCredentials: true, // This is the key part to include cookies in requests
});

export default axiosInstance;
