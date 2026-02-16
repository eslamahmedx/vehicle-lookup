import { type Vehicle } from "../../api/vehicleApi";

interface ResultsTableProps {
  vehicles: Vehicle[];
  loading: boolean;
}

export const ResultsTable = ({ vehicles, loading }: ResultsTableProps) => {
  return (
    <>
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b text-gray-600 text-sm">
          <tr>
            <th className="p-4">#</th>
            <th className="p-4">Registration</th>
            <th className="p-4">Make</th>
            <th className="p-4">Model</th>
            <th className="p-4">Color</th>
            <th className="p-4">Fuel</th>
            <th className="p-4">Year</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((v, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4 text-gray-500">
                {index + 1}
              </td>

              <td className="p-4 font-semibold">
                {v.registration}
              </td>

              <td className="p-4">{v.make}</td>
              <td className="p-4">{v.model}</td>
              <td className="p-4">{v.primary_colour}</td>
              <td className="p-4">{v.fuel_type}</td>
              <td className="p-4">
                {v.manufacture_date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {vehicles.length === 0 && !loading && (
        <div className="p-6 text-center text-gray-500">
          No results found
        </div>
      )}

      {loading && (
        <div className="p-6 text-center text-gray-500">
          Loading...
        </div>
      )}
    </>
  )
}