import MainLayout from "../layout/MainLayout";

export default function ManualPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-8">

        {/* ================= SIDEBAR ================= */}
        <div className="col-span-4 bg-white p-8 rounded-2xl shadow-sm space-y-8">

          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Search Criteria</h3>
            <button className="text-red-600 text-sm font-medium">
              Reset Form
            </button>
          </div>

          {/* Registration */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Registration (VRM)</label>
            <input
              placeholder="E.G. AB12 CDE"
              className="w-full border p-3 rounded-xl bg-gray-50"
            />
          </div>

          {/* Make & Model */}
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

          {/* Color */}
          <div>
            <label className="text-sm font-medium">Color</label>
            <select className="w-full border p-3 rounded-xl bg-gray-50">
              <option>All Colors</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Fuel Type</label>

            <div className="grid grid-cols-2 gap-3">
              <FuelOption label="Petrol" />
              <FuelOption label="Diesel" />
              <FuelOption label="Electric" />
              <FuelOption label="Hybrid" />
            </div>
          </div>

          {/* Result Limit */}
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

        {/* ================= RESULTS ================= */}
       <div className="col-span-8 space-y-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Multiple Results Found
                <span className="ml-3 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                  12 matches
                </span>
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Criteria: All Makes, Petrol, 50 Limit
              </p>
            </div>

            <input
              placeholder="Filter results..."
              className="border p-3 rounded-xl bg-gray-50 w-64"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b text-gray-600 text-sm">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Registration</th>
                  <th className="p-4">Make & Model</th>
                  <th className="p-4">Color</th>
                  <th className="p-4">Fuel</th>
                  <th className="p-4">MOT Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <Row
                  index={1}
                  reg="LD62 VXZ"
                  make="Ford Fiesta"
                  model="Zetec TDCi"
                  color="Silver"
                  fuel="Petrol"
                  status="VALID"
                />

                <Row
                  index={2}
                  reg="KU18 HPO"
                  make="BMW 3 Series"
                  model="320i M Sport"
                  color="Blue"
                  fuel="Petrol"
                  status="EXPIRED"
                />

                <Row
                  index={3}
                  reg="WM65 FLX"
                  make="Volkswagen Golf"
                  model="Match TSI BlueMotion"
                  color="White"
                  fuel="Petrol"
                  status="VALID"
                />
              </tbody>
            </table>

            {/* Footer */}
            <div className="flex justify-between items-center p-4 border-t text-sm text-gray-500">
              <p>Showing 1 to 5 of 12 results</p>

              <div className="flex items-center gap-4">
                <span>Rows per page: 20</span>

                <div className="flex gap-2">
                  <PageButton active>1</PageButton>
                  <PageButton>2</PageButton>
                  <PageButton>3</PageButton>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}

/* ================= COMPONENTS ================= */

function FuelOption({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 border p-3 rounded-xl bg-gray-50 cursor-pointer">
      <input type="checkbox" />
      {label}
    </label>
  );
}

function Row({
  index,
  reg,
  make,
  model,
  color,
  fuel,
  status,
}: {
  index: number;
  reg: string;
  make: string;
  model: string;
  color: string;
  fuel: string;
  status: "VALID" | "EXPIRED" | "DUE SOON";
}) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4 text-gray-500">{index}</td>

      <td className="p-4">
        <span className="bg-gray-100 px-3 py-1 rounded-lg font-semibold">
          {reg}
        </span>
      </td>

      <td className="p-4">
        <div className="font-semibold">{make}</div>
        <div className="text-gray-500 text-xs">{model}</div>
      </td>

      <td className="p-4">{color}</td>
      <td className="p-4">{fuel}</td>

      <td className="p-4">
        <StatusBadge status={status} />
      </td>

      <td className="p-4 text-gray-400">⋮</td>
    </tr>
  );
}

function StatusBadge({
  status,
}: {
  status: "VALID" | "EXPIRED" | "DUE SOON";
}) {
  const styles =
    status === "VALID"
      ? "bg-green-100 text-green-600"
      : status === "EXPIRED"
      ? "bg-red-100 text-red-600"
      : "bg-yellow-100 text-yellow-700";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles}`}>
      {status}
    </span>
  );
}

function PageButton({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`w-8 h-8 rounded-lg ${
        active
          ? "bg-red-600 text-white"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}
