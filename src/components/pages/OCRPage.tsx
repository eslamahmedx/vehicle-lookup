import { useEffect, useState } from "react";
import { toast } from "sonner";
import MainLayout from "./../layout/MainLayout";
import { ImagePreview } from "../ocr/ImagePreview";
import UploadArea from "../ocr/UploadArea";
import OCRResult from "../ocr/OCRResult";
import { sendImageToOCR } from "../../api/apiOsr";
import { lookupVehicle, type Vehicle } from "../../api/vehicleApi";


export default function OCRPage() {
  const [image, setImage] = useState<string | null>(null);
  const [plate, setPlate] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!imageFile) return;

    const runOCR = async () => {
      setLoading(true);
      setError(null);
      setVehicle(null); // Reset previous vehicle



      try {
        const res = await sendImageToOCR(imageFile);
        const ocrPlate = res.plate;
        setPlate(ocrPlate);

        if (ocrPlate) {
          // Bridge: Auto lookup using the plate from OCR
          const data = await lookupVehicle(ocrPlate);

          if (!data || (Array.isArray(data) && data.length === 0)) {
            toast.error("Vehicle not found from OCR plate", {
              description: "The extracted plate did not match any vehicle."
            });
            setVehicle(null);
          } else {
            setVehicle(Array.isArray(data) ? data[0] : data);
            toast.success("Vehicle found automatically");
          }
        }
      } catch (e) {
        setError("OCR failed or vehicle not found");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    runOCR();
  }, [imageFile]);

  const handleLookup = async () => {
    if (!plate) return;

    try {
      setLoading(true);
      const data = await lookupVehicle(plate);

      if (!data || (Array.isArray(data) && data.length === 0)) {
        toast.error("Vehicle not found", {
          description: "Please check the license plate and try again."
        });
        setVehicle(null);
      } else {
        setVehicle(Array.isArray(data) ? data[0] : data);
        toast.success("Vehicle found successfully");
      }
    } catch (error) {

      toast.error("Failed to lookup vehicle");
    } finally {
      setLoading(false);
    }
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
              <p>Make: {vehicle.make}</p>
              <p>Model: {vehicle.model}</p>
              <p>Color: {vehicle.primary_colour}</p>
              <p>Fuel: {vehicle.fuel_type}</p>
              <p>Year: {vehicle.manufacture_date}</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
