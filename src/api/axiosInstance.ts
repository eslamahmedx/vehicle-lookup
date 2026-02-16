import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.100.102.6:7116",
  headers: {
    "Content-Type": "application/json",
  },
});