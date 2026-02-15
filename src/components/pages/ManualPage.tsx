import MainLayout from "../layout/MainLayout";

export default function ManualPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-8">

        {/* Sidebar */}
        <div className="col-span-3 bg-white p-6 rounded-xl shadow-sm space-y-6">
          <h3 className="font-semibold text-lg">Search Criteria</h3>

          <input
            placeholder="E.G. AB12 CDE"
            className="w-full border p-2 rounded"
          />

          <select className="w-full border p-2 rounded">
            <option>All Makes</option>
          </select>

          <select className="w-full border p-2 rounded">
            <option>All Colors</option>
          </select>

          <button className="w-full bg-red-600 text-white py-3 rounded-lg">
            Run Search
          </button>
        </div>

        {/* Results */}
        <div className="col-span-9 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Multiple Results Found
          </h2>

          <table className="w-full text-left">
            <thead className="border-b">
              <tr>
                <th>#</th>
                <th>Registration</th>
                <th>Make & Model</th>
                <th>Color</th>
                <th>Fuel</th>
                <th>MOT Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td>1</td>
                <td>LD62 VXZ</td>
                <td>Ford Fiesta</td>
                <td>Silver</td>
                <td>Petrol</td>
                <td className="text-green-600 font-semibold">VALID</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}


