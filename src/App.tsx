import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import OCRPage from "./components/pages/OCRPage";
//import ManualPage from "./components/pages/ManualPage";

function App() {
  return (
    <BrowserRouter>
      <div className="p-6 border-b flex gap-4">
        <Link to="/ocr" className="text-blue-600">
          OCR
        </Link>
        <Link to="/manual" className="text-blue-600">
          Manual
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/ocr" />} />
        <Route path="/ocr" element={<OCRPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
