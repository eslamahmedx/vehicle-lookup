
type Props = {
  setImage: (value: string | null) => void;
};

export default function UploadArea({ setImage }: Props) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
    return;
  }
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
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
          accept="image/png,image/jpeg,image/webp"
          onChange={handleFile}
        />
      </label>
    </div>
  );
}

