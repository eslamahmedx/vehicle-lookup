import axios from "axios";

export type Vehicle = {
  registration: string;
  make: string | null;
  model: string | null;
  primary_colour: string | null;
  fuel_type: string | null;
  manufacture_date: string | null;
  engine_size: number | null;
};

const api = axios.create({
  baseURL: "http://10.100.102.6:7116",
  timeout: 40000,
});

export type VehicleSearchParams = {
  registration?: string;
  make?: string;
  model?: string;
  primary_colour?: string;
  fuel_type?: string;
  limit?: number;
  offset?: number;
};

export const lookupVehicle = async (registration?: string) => {
  const response = await api.get("/api/v1/vehicles/by-registration", {
    params: {
      registration,
    },
  });



  return response.data;
};

export const searchVehicles = async (params: VehicleSearchParams) => {
  if (params.registration) {
    const response = await api.get("/api/v1/vehicles/by-partial-registration", {
      params: {
        ...params,
        partial_registration: params.registration,
        registration: undefined
      },
    });
    return response.data;
  } else {
    const response = await api.get("/api/v1/vehicles/by-details", {
      params: params,
    });
    return response.data;
  }
};