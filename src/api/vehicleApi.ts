import { vehicleApi } from "./axiosInstance";

export type Vehicle = {
  registration: string;
  make: string | null;
  model: string | null;
  primary_colour: string | null;
  fuel_type: string | null;
  manufacture_date: string | null;
  engine_size: number | null;
};

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
  const response = await vehicleApi.get(
    "/api/v1/vehicles/by-registration",
    {
      params: { registration },
    }
  );

  return response.data;
};

export const searchVehicles = async (
  params: VehicleSearchParams
) => {
  if (params.registration) {
    const response = await vehicleApi.get(
      "/api/v1/vehicles/by-partial-registration",
      {
        params: {
          ...params,
          partial_registration: params.registration,
          registration: undefined,
        },
      }
    );

    return response.data;
  }

  const response = await vehicleApi.get(
    "/api/v1/vehicles/by-details",
    {
      params,
    }
  );

  return response.data;
};
