export const lookupVehicle = async (plate: string) => {
  const res = await fetch(
    "http://10.100.102.6:7114/vehicle/get-info",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plate }),
    }
  );

  if (!res.ok) {
    throw new Error("Lookup failed");
  }

  return res.json();
};
