import axios from "axios";

export const vehicleApi = axios.create({
  baseURL: import.meta.env.VITE_VEHICLE_API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 40000,
});

export const ocrApi = axios.create({
  baseURL: import.meta.env.VITE_OCR_API_BASE,
  timeout: 40000,
});
