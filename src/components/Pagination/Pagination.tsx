import useUrlSearchParams from "@/hooks/useUrlSearchParams";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface UniversalPaginationProps {
    total: number;
    perPage?: number;
    currentPage?: number;
}

export const UniversalPagination = ({
    total = 0,
    perPage = 10,
    currentPage = 1,
}: UniversalPaginationProps) => {
    const totalPages = Math.ceil(total / perPage);

    const { writeToUrl } = useUrlSearchParams({ page: 1, limit: 10 });

    if (totalPages <= 1) return null;

    const getDisplayedPages = () => {
        const pages: (number | string)[] = [1];

        if (currentPage > 3) {
            pages.push("...");
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const displayedPages = getDisplayedPages();

    const handlePageChange = (page: number) => {
        writeToUrl("page", page);
    };

    const handlePerPageChange = (perPage: number) => {
        writeToUrl("limit", perPage);
    };

    return (
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-3">
                <div className="px-3 py-1.5 bg-white border border-gray-200 rounded">
                    <span className="text-gray-600 font-medium">Jami: </span>
                    <span className="font-medium text-gray-900">{total}</span>
                </div>

                <div className="px-3 py-1.5 bg-white border border-gray-200 rounded">
                    <span className="text-gray-600">Ko‘rsatilmoqda: </span>
                    <span className="font-medium text-gray-900">{perPage}</span>
                </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
                <button type="button" onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-sm border flex items-center gap-1 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-white`}
                ><ChevronLeft/>Oldingi</button>

                {displayedPages.map((page, idx) => {
                    if (page === "...") {
                        return (<span key={`ellipsis-${idx}`} className="px-3 py-2 text-gray-400 select-none">...</span>);
                    }

                    const isActive = page === currentPage;

                    return (
                        <button key={page} type="button" onClick={() => handlePageChange(page as number)}
                            className={`min-w-9 h-9 flex items-center justify-center rounded-sm border text-gray-700 transition-colors font-medium
              ${isActive ? "bg-blue-500 text-white hover:bg-blue-500/90" : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"}`}
                        >{page}</button>
                    );
                })}

                <button type="button" onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-sm border flex gap-1 items-center border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors disabled:opacity-50 disabled:pointer-events-none disabled:hover:bg-white`}
                >Keyingi <ChevronRight /></button>
            </div>
        </div>
    );
};

export default UniversalPagination;