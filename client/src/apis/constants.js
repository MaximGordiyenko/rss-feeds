import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});
