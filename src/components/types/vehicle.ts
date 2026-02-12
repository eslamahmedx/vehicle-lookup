export interface Vehicle {
  id: number;
  registration: string;
  make: string;
  model: string;
  color: string;
  fuel: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  motStatus: "Valid" | "Expired" | "Due Soon";
}
