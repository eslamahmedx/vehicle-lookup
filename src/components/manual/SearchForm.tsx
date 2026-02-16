import { useState } from "react";
import { type VehicleSearchParams } from "../../api/vehicleApi";

interface SearchFormProps {
  onSearch: (params: VehicleSearchParams) => void;
  loading: boolean;
}

export const SearchForm = ({ onSearch, loading }: SearchFormProps) => {
  const [params, setParams] = useState<VehicleSearchParams>({
    registration: "",
    make: "",
    model: "",
    primary_colour: "",
    fuel_type: "", 
    limit: 50,
  });


  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);

  const handleFuelChange = (fuel: string) => {
    setSelectedFuels(prev => {
      const newFuels = prev.includes(fuel)
        ? prev.filter(f => f !== fuel)
        : [...prev, fuel];
      return newFuels;
    });
  };

  const handleChange = (field: keyof VehicleSearchParams, value: any) => {
    setParams(prev => ({ ...prev, [field]: value }));
  };

  const handleSearchClick = () => {
    const searchParams: VehicleSearchParams = {
      ...params,
      fuel_type: selectedFuels.length > 0 ? selectedFuels[0] : undefined, 
    };
    if (!searchParams.registration) delete searchParams.registration;
    if (!searchParams.make || searchParams.make === "All Makes") delete searchParams.make;
    if (!searchParams.model) delete searchParams.model;
    if (!searchParams.primary_colour || searchParams.primary_colour === "All Colors") delete searchParams.primary_colour;

    onSearch(searchParams);
  };

  const handleReset = () => {
    setParams({
      registration: "",
      make: "",
      model: "",
      primary_colour: "",
      fuel_type: "",
      limit: 50,
    });
    setSelectedFuels([]);
  };

  return (
    <div className="col-span-4 bg-white p-8 rounded-2xl shadow-sm space-y-8">

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg hover:text-red-700 transition duration-300 cursor-pointer flex items-center gap-2">
          <span className="text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
          </span>
          Search Criteria
        </h3>
        <button onClick={handleReset} className="text-red-600 text-sm font-medium hover:text-red-800 transition">
          Reset Form
        </button>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Registration (VRM)</label>
        <input
          value={params.registration}
          onChange={(e) => handleChange("registration", e.target.value)}
          placeholder="E.G. AB12 CDE"
          className="w-full border p-3 rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-100 outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Make</label>
          <select
            value={params.make}
            onChange={(e) => handleChange("make", e.target.value)}
            className="w-full border p-3 rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-100 outline-none"
          >
            <option value="">All Makes</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Ford">Ford</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Model</label>
          <input
            value={params.model}
            onChange={(e) => handleChange("model", e.target.value)}
            placeholder="Any"
            className="w-full border p-3 rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-100 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Color</label>
        <select
          value={params.primary_colour}
          onChange={(e) => handleChange("primary_colour", e.target.value)}
          className="w-full border p-3 rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-100 outline-none"
        >
          <option value="">All Colors</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Silver">Silver</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Grey">Grey</option>
        </select>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium">Fuel Type</label>

        <div className="grid grid-cols-2 gap-3">
          <FuelOption label="Petrol" selected={selectedFuels.includes("Petrol")} onChange={() => handleFuelChange("Petrol")} />
          <FuelOption label="Diesel" selected={selectedFuels.includes("Diesel")} onChange={() => handleFuelChange("Diesel")} />
          <FuelOption label="Electric" selected={selectedFuels.includes("Electric")} onChange={() => handleFuelChange("Electric")} />
          <FuelOption label="Hybrid" selected={selectedFuels.includes("Hybrid")} onChange={() => handleFuelChange("Hybrid")} />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium">Result Limit</label>

        <div className="flex items-center gap-3">
          <input
            type="range"
            min="1"
            max="50"
            value={params.limit}
            onChange={(e) => handleChange("limit", parseInt(e.target.value))}
            className="w-full accent-red-600 cursor-pointer"
          />
          <span className="font-semibold min-w-[2ch]">{params.limit}</span>
        </div>
      </div>

      <button
        onClick={handleSearchClick}
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.98] transition text-white py-3 rounded-xl font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Searching..." : "Run Search"}
      </button>
    </div>


  )
}
function FuelOption({ label, selected, onChange }: { label: string, selected: boolean, onChange: () => void }) {
  return (
    <label className={`flex items-center gap-2 border p-3 rounded-xl cursor-pointer transition ${selected ? 'bg-red-50 border-red-200 text-red-700' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
      <input type="checkbox" checked={selected} onChange={onChange} className="accent-red-600 w-4 h-4" />
      {label}
    </label>
  );
}