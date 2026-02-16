type Props = {
  plate: string | null;
};

export default function LicensePlate({ plate }: Props) {
  return (
    <div className="flex justify-center">
      <div className="relative bg-[#FFD400] rounded-xl px-8 py-5 border-[6px] border-black shadow-md">
        <div className="absolute left-0 top-0 h-full w-16 bg-blue-800 rounded-l-lg flex flex-col items-center justify-center text-white text-xs font-semibold">
          <span>★★★★★</span>
          <span className="mt-1">UK</span>
        </div>
        <div className="ml-16  md:text-2xl font-extrabold tracking-[0.3em] text-black">
          {plate ?? "— — —"}
        </div>
      </div>
    </div>
  );
}
