export const ChartSkeleton: React.FC<{ height?: string }> = ({ height = "360px" }) => (
  <div className="w-full animate-pulse" style={{ height }}>
    <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        <p className="mt-2 text-sm text-muted-foreground">Loading chart...</p>
      </div>
    </div>
  </div>
);