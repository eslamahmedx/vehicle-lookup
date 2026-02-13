import { useState } from "react";
import MainLayout from "./../layout/MainLayout";
import { ImagePreview } from "../ocr/ImagePreview";
import UploadArea from "../ocr/UploadArea";
import OCRResult from "../ocr/OCRResult";

export default function OCRPage() {
  const [image, setImage] = useState<string | null>(null);
   const [plate, setPlate] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7 space-y-6">
          <UploadArea setImage={setImage} />
           <ImagePreview image={image} setImage={setImage} />
        </div>
        <div className="col-span-5 space-y-6">
          <OCRResult plate={plate} />
          {/* Pro Tip */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-700">
            <strong>Pro Tip:</strong> Ensure the license plate is well-lit and not obstructed.
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
