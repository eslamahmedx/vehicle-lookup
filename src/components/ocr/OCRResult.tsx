type Props = {
  plate: string | null;
};

export default function OCRResult({ plate }: Props) {
  return (
    <div className="col-span-5 space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">OCR Processing</h3>
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
            Active
          </span>
        </div>
        <div className="bg-yellow-400 text-black text-1xl tracking-widest font-bold text-center py-6 rounded-lg">
          {plate ?? "Waiting for image..."}
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
          Confirm & Lookup Vehicle
        </button>

        <button className="w-full border py-3 rounded-lg text-gray-600">
          Edit Result
        </button>
      </div>
    </div>
  );
}