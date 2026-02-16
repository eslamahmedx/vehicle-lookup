
import { SearchForm } from "../manual/SearchForm";
import { ResultsTable } from "../manual/ResultsTable";
import { Pagination } from "../manual/Pagination";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { searchVehicles, type Vehicle, type VehicleSearchParams } from "../../api/vehicleApi";

export default function ManualPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Pagination State
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50); // Default limit, can be updated by SearchForm if needed
  const [currentParams, setCurrentParams] = useState<VehicleSearchParams | null>(null);

  const handleSearch = async (params: VehicleSearchParams) => {
    setLoading(true);
    setError("");
    setPage(1); // Reset to first page on new search
    setLimit(params.limit || 50);
    setCurrentParams(params); // Save params for pagination

    try {
      const data = await searchVehicles({ ...params, offset: 0 }); // offset 0 for page 1
      setVehicles(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch vehicles");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (newPage: number) => {
    if (!currentParams) return;

    setLoading(true);
    setError("");
    setPage(newPage);

    const offset = (newPage - 1) * limit;

    try {
      const data = await searchVehicles({ ...currentParams, limit, offset });
      setVehicles(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch page");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-8">
        <SearchForm onSearch={handleSearch} loading={loading} />
        <div className="col-span-8 space-y-6">
          <h2 className="text-2xl font-semibold">
            Results
            <span className="ml-3 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
              {vehicles.length} matches
            </span>
          </h2>

          {error && (
            <div className="text-red-600 text-sm mb-4">{error}</div>
          )}

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <ResultsTable vehicles={vehicles} loading={loading} />

            {/* Show pagination only if we have results or are on a later page (to allow going back if empty result on last page) */}
            {(vehicles.length > 0 || page > 1) && (
              <Pagination
                currentPage={page}
                hasNextPage={vehicles.length === limit} // Assume next page exists if we got full limit
                onPageChange={handlePageChange}
                itemsPerPage={limit}
                currentCount={vehicles.length}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}







