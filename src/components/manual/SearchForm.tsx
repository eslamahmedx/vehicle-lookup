
export const SearchForm = () => {
  return (
      <div className="col-span-4 bg-white p-8 rounded-2xl shadow-sm space-y-8">

          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Search Criteria</h3>
            <button className="text-red-600 text-sm font-medium">
              Reset Form
            </button>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Registration (VRM)</label>
            <input
              placeholder="E.G. AB12 CDE"
              className="w-full border p-3 rounded-xl bg-gray-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Make</label>
              <select className="w-full border p-3 rounded-xl bg-gray-50">
                <option>All Makes</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Model</label>
              <select className="w-full border p-3 rounded-xl bg-gray-50">
                <option>Any</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Color</label>
            <select className="w-full border p-3 rounded-xl bg-gray-50">
              <option>All Colors</option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Fuel Type</label>

            <div className="grid grid-cols-2 gap-3">
              <FuelOption label="Petrol" />
              <FuelOption label="Diesel" />
              <FuelOption label="Electric" />
              <FuelOption label="Hybrid" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Result Limit</label>

            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="50"
                defaultValue="50"
                className="w-full accent-red-600"
              />
              <span className="font-semibold">50</span>
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold">
            Run Search
          </button>
        </div>


  )
}
function FuelOption({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 border p-3 rounded-xl bg-gray-50 cursor-pointer">
      <input type="checkbox" />
      {label}
    </label>
  );
}