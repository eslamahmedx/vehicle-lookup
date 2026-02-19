import { ocrApi } from "./axiosInstance";

export const sendImageToOCR = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await ocrApi.post(
    "/tailgating-license-plate-ocr-api/v3/plates/get_plate",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
