type ImagePreviewProps = {
  image: string | null;
  setImage: (value: string | null) => void;
};

export const ImagePreview = ({ image, setImage }: ImagePreviewProps) => {
  if (!image) return null;

  return (
    <div className="bg-gray-200 rounded-xl overflow-hidden">
      <div className="flex justify-between p-4 bg-gray-300">
        <span>Image Preview</span>
        <button
          onClick={() => setImage(null)}
          className="text-red-600"
        >
          Remove
        </button>
      </div>
      <img src={image} className="w-full" />
    </div>
  );
};
