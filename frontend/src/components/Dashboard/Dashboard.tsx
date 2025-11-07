import { useStats } from "../../context/StatsContext";
import Loader from "../ui/Loader";
import DashboardContent from "./DashboardContent";
import { prepareChartData } from "./chartDataHelpers";

function Dashboard() {
  const { stats, loading, error } = useStats();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="w-full bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Dashboard</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  // Prepare chart data
  //TODO:Use useMemo to so data recomputed only when stats change
  const { barChartData, lineChartData, pieChartData } = prepareChartData(stats);

  return (
    <DashboardContent
      stats={stats}
      barChartData={barChartData}
      lineChartData={lineChartData}
      pieChartData={pieChartData}
    />
  );
}

export default Dashboard;
