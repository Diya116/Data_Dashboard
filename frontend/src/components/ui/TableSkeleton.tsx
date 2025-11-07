export const TableSkeleton = () => (
  <div className="bg-card border border-border rounded-lg shadow overflow-hidden">
    <div className="animate-pulse">
      {/* Table header skeleton */}
      <div className="bg-muted/50 border-b border-border">
        <div className="grid grid-cols-5 gap-4 px-6 py-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-muted rounded"></div>
          ))}
        </div>
      </div>
      {/* Table rows skeleton */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border-b border-border">
          <div className="grid grid-cols-5 gap-4 px-6 py-4">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="h-4 bg-muted/30 rounded"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
