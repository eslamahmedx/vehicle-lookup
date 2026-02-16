

interface PaginationProps {
    currentPage: number;
    hasNextPage: boolean;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
    currentCount: number;
}

export const Pagination = ({ currentPage, hasNextPage, onPageChange, itemsPerPage, currentCount }: PaginationProps) => {
    // Calculate range for display
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = (currentPage - 1) * itemsPerPage + currentCount;

    return (
        <div className="flex justify-between items-center p-4 border-t text-sm text-gray-500">
            <p>Showing {currentCount > 0 ? start : 0} {currentCount > 0 ? `to ${end}` : ''} results</p>

            <div className="flex items-center gap-4">
                <span>Rows per page: {itemsPerPage}</span>

                <div className="flex gap-2">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-lg border ${currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        Previous
                    </button>

                    <div className="flex items-center px-4 font-medium">
                        Page {currentPage}
                    </div>

                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={!hasNextPage}
                        className={`px-3 py-1 rounded-lg border ${!hasNextPage
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
// Removed unused PageButton component because we use Previous/Next logic due to unknown total count
