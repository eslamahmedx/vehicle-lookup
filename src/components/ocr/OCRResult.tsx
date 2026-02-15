import { useEffect, useState } from "react";
import LicensePlate from "./LicensePlate";

type Props = {
  plate: string | null;
  loading: boolean;
  onLookup: () => void;
  onEdit: (value: string) => void;
};

export default function OCRResult({ plate, loading, onLookup, onEdit }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (plate) {
      setValue(plate);
    }
  }, [plate]);

  return (
    <div className="col-span-5 space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">OCR Processing</h3>
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
            Active
          </span>
        </div>

        {editMode ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border p-3 rounded-lg text-xl font-bold"
          />
        ) : (
          <div className=" py-6 rounded-lg">
            <LicensePlate plate={plate}/>
          </div>
        )}

        <button
          onClick={onLookup}
          disabled={!plate || loading}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Loading..." : "Confirm & Lookup Vehicle"}
        </button>

        <button
          onClick={() => {
            if (editMode) {
              onEdit(value); 
            }
            setEditMode(!editMode);
          }}
          className="w-full border py-3 rounded-lg text-gray-600"
        >
          {editMode ? "Save Result" : "Edit Result"}
        </button>
      </div>
    </div>
  );
}
