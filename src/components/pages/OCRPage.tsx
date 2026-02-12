import { useState } from "react";
import MainLayout from "./../layout/MainLayout";

export default function OCRPage() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-8">

        {/* Left Side */}
        <div className="col-span-7 space-y-6">

          {/* Upload Box */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center bg-white">
            <h2 className="text-xl font-semibold mb-2">
              Upload Vehicle Image
            </h2>
            <p className="text-gray-500 mb-6">
              Drag and drop an image of the vehicle front or rear.
              Supported formats: JPG, PNG, WEBP.
            </p>

            <label className="bg-red-600 text-white px-6 py-3 rounded-lg cursor-pointer">
              Browse Files
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImage(reader.result as string);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>

          {/* Image Preview */}
          {image && (
            <div className="bg-gray-200 rounded-xl overflow-hidden">
              <div className="flex justify-between p-4 bg-gray-300">
                <span>Image Preview</span>
                <button
                  onClick={() => setImage(null)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
              <img src={image} className="w-full" />
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="col-span-5 space-y-6">

          {/* OCR Processing Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">OCR Processing</h3>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                Active
              </span>
            </div>

            <div className="bg-yellow-400 text-black text-3xl tracking-widest font-bold text-center py-6 rounded-lg">
              BT62 SVO
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
              Confirm & Lookup Vehicle
            </button>

            <button className="w-full border py-3 rounded-lg text-gray-600">
              Edit Result
            </button>
          </div>

          {/* Pro Tip */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-700">
            <strong>Pro Tip:</strong> Ensure the license plate is well-lit and not obstructed.
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
