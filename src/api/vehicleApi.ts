export const lookupVehicle = async (plate: string) => {
  // fake response مؤقت
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        owner: "Mohamed Yasser",
        model: "Toyota Corolla",
        year: 2020,
        color: "White",
      });
    }, 1500);
  });
};