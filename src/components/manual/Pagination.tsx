import React from 'react'

export const Pagination = () => {
    return (
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
    )
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
            className={`w-8 h-8 rounded-lg ${active
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
        >
            {children}
        </button>
    );
}