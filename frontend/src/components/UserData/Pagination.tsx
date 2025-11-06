import React from 'react';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Pagination = React.memo(({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  onNext, 
  onPrev 
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="bg-card border border-border p-4 rounded-lg shadow flex items-center justify-between">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed hover:opacity-90 transition"
      >
        Previous
      </button>
      
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === page
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {page}
              </button>
            );
          } else if (page === currentPage - 2 || page === currentPage + 2) {
            return <span key={page} className="px-2 py-2 text-muted-foreground">...</span>;
          }
          return null;
        })}
      </div>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed hover:opacity-90 transition"
      >
        Next
      </button>
    </div>
  );
});

Pagination.displayName = 'Pagination';