import { useEffect, useState } from "react";
import MainLayout from "./../layout/MainLayout";
import { ImagePreview } from "../ocr/ImagePreview";
import UploadArea from "../ocr/UploadArea";
import OCRResult from "../ocr/OCRResult";
import { sendImageToOCR } from "../../api/apiOsr";
import { lookupVehicle } from "../../api/vehicleApi";

export default function OCRPage() {
  const [image, setImage] = useState<string | null>(null);
  const [plate, setPlate] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!imageFile) return;

    const runOCR = async () => {
      setLoading(true);
      setError(null);

      console.log("OCR triggered");

      try {
        const res = await sendImageToOCR(imageFile);
        setPlate(res.plate);
      } catch (e) {
        setError("OCR failed");
      } finally {
        setLoading(false);
      }
    };

    runOCR();
  }, [imageFile]);
  const handleLookup = async () => {
    if (!plate) return;

    setLoading(true);
    const data = await lookupVehicle(plate);
    setVehicle(data);
    setLoading(false);
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7 space-y-6">
          <UploadArea setImage={setImage} setImageFile={setImageFile} />
          <ImagePreview image={image} setImage={setImage} />
        </div>
        <div className="col-span-5 space-y-6">
          <OCRResult
            plate={plate}
            loading={loading}
            onLookup={handleLookup}
            onEdit={(value) => setPlate(value)}
          />
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-700">
            <strong>Pro Tip:</strong> Ensure the license plate is well-lit and not obstructed.
          </div>
          {vehicle && (
            <div className="bg-white p-6 rounded-xl shadow mt-6">
              <p>Owner: {vehicle.owner}</p>
              <p>Model: {vehicle.model}</p>
              <p>Year: {vehicle.year}</p>
              <p>Color: {vehicle.color}</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
