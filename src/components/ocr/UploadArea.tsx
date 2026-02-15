import upload from "../../assets/cloud-computing.png"
type Props = {
  setImage: (value: string | null) => void;
    setImageFile: (file: File | null) => void;

};

export default function UploadArea({ setImage,setImageFile  }: Props) {
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) return;

    setImage(URL.createObjectURL(file)); // preview
    setImageFile(file); 
  };
  
  return (
    <div className="
  border-2 border-dashed border-gray-300
  rounded-xl p-16 text-center bg-white
  transition duration-300
  hover:bg-red-50 hover:border-red-400
  group
">
  <img
    src={upload}
    className="w-16 mx-auto mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition"
    alt="upload"
  />

  <h2 className="text-xl font-semibold mb-2">
    Upload Vehicle Image
  </h2>

  <p className="text-gray-500 mb-6">
    Drag and drop an image of the vehicle front or rear.
    Supported formats: JPG, PNG, WEBP.
  </p>

  <label className="bg-red-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-red-700 transition">
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

