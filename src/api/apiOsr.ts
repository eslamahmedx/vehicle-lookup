export const sendImageToOCR = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://10.100.102.6:7114/tailgating-license-plate-ocr-api/v3/plates/get_plate", {
    method: "POST",
    body: formData,
  });

  return res.json();
};
