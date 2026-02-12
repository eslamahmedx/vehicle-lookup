import { NavLink } from "react-router-dom";

export default function Tabs() {
  return (
    <div className="border-b border-gray-200 mb-4">
      <nav className="flex gap-6">
        <NavLink
          to="/ocr"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary pb-2 font-bold text-primary"
              : "pb-2 text-gray-500"
          }
        >
          OCR Search
        </NavLink>

        <NavLink
          to="/manual"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary pb-2 font-bold text-primary"
              : "pb-2 text-gray-500"
          }
        >
          Manual Search
        </NavLink>
      </nav>
    </div>
  );
}
