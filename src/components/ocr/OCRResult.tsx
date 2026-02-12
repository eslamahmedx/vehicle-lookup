interface Props {
  plate: string;
}

export default function OCRResult({ plate }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold mb-4">OCR Result</h2>

      <div className="flex items-center justify-center h-20 bg-yellow-300 border-4 border-black rounded-lg">
        <span className="font-mono text-3xl tracking-widest">
          {plate}
        </span>
      </div>

      <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg">
        Confirm & Lookup
      </button>
    </div>
  );
}
