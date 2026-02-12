interface Props {
  setImage: (value: string) => void;
}

export default function UploadArea({ setImage }: Props) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="border-2 border-dashed p-10 text-center rounded-lg bg-white">
      <p className="font-bold mb-2">Upload Vehicle Image</p>
      <input type="file" accept="image/*" onChange={handleFile} />
    </div>
  );
}
