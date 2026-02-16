import MainLayout from "../layout/MainLayout";
import { Pagination } from "../manual/Pagination";
import { ResultsTable } from "../manual/ResultsTable";
import { SearchForm } from "../manual/SearchForm";

export default function ManualPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-8">
        <SearchForm/>
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
            <ResultsTable/>
            {/* Footer */}
            <Pagination/>
        

          </div>
        </div>
      </div>
    </MainLayout>
  );
}







