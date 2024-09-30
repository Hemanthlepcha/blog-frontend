import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/", // Your backend API URL
  withCredentials: true, // This is the key part to include cookies in requests
});
