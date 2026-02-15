import { Link, useLocation } from "react-router-dom";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  const activeTab = location.pathname;

  return (
    <div className="min-h-screen mt-8 max-w-7xl mx-auto px-4 bg-gray-50 ">
      <h1 className="text-4xl font-bold text-gray-800">
        Vehicle Identification
      </h1>
      <p className="text-gray-500 mt-2">
        Upload a photo to automatically extract the license plate number using AI OCR.
      </p>

      {/* Tabs */}
      <div className="flex gap-8 mt-8 border-b">
        <Link
          to="/ocr"
          className={`pb-3 ${
            activeTab === "/ocr"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-500"
          }`}
        >
          OCR Search
        </Link>

        <Link
          to="/manual"
          className={`pb-3 ${
            activeTab === "/manual"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-500"
          }`}
        >
          Manual Search
        </Link>
      </div>

      <div className="mt-8 ">{children}</div>
    </div>
  );
}
