import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OCRPage from "./components/pages/OCRPage";
//import ManualPage from "./components/pages/ManualPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ocr" />} />
        <Route path="/ocr" element={<OCRPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
