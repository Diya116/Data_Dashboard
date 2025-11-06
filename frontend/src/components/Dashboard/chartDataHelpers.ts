import type { StatsData } from "../../service/statsService";

// Month names for chart labels
const MONTH_NAMES_FULL = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_NAMES_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

/**
 * Prepare all chart data from stats
 */
export const prepareChartData = (stats: StatsData) => {
  // Bar Chart Data
  const barChartData = {
    labels: stats.monthlyJoinedUsers.map(item => MONTH_NAMES_FULL[item.id - 1]),
    datasets: [
      {
        label: "New Users Joined",
        data: stats.monthlyJoinedUsers.map(item => item.joinedUsers),
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: "rgba(37, 99, 235, 0.9)",
      },
    ],
  };

  // Line Chart Data
  const lineChartData = {
    labels: stats.userGrowthData.map(item => MONTH_NAMES_SHORT[item.id - 1]),
    datasets: [
      {
        label: "New Users Joined",
        data: stats.userGrowthData.map(item => item.newUsers),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        fill: true,
      },
      {
        label: "Conversion Rate (%)",
        data: stats.userGrowthData.map(item => item.conversionRate),
        borderColor: "rgb(168, 85, 247)",
        backgroundColor: "rgba(168, 85, 247, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "rgb(168, 85, 247)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        fill: true,
        yAxisID: "y1",
      },
    ],
  };

  // Pie Chart Data
  const pieChartData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        label: "User Status",
        data: [stats.userStatusData.activeUsers, stats.userStatusData.inactiveUsers],
        backgroundColor: [
          "rgba(34, 197, 94, 0.8)",
          "rgba(239, 68, 68, 0.8)",
        ],
        borderColor: [
          "rgba(34, 197, 94, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  return {
    barChartData,
    lineChartData,
    pieChartData,
  };
};
