
export const ResultsTable = () => {
  return (
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
  )
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