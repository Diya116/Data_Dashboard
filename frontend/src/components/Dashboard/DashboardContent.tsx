import React, { Suspense, lazy } from "react";
import SummaryCard from "../ui/SummaryCard";
import { Users, DollarSign, TrendingUp } from "lucide-react";
import { barChartOptions, lineChartOptions, pieChartOptions } from "../../config/chartConfig";
import type { StatsData } from "../../service/statsService";
import { ChartSkeleton } from "../ui/ChartSkeleton";
// Lazy load chart components
const LineChart = lazy(() => import("../charts/LineChart"));
const PieChart = lazy(() => import("../charts/PieChart"));
const BarChart = lazy(() => import("../charts/BarChart"));

// Chart loading skeleton component


interface DashboardContentProps {
  stats: StatsData;
  barChartData: any;
  lineChartData: any;
  pieChartData: any;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  stats,
  barChartData,
  lineChartData,
  pieChartData,
}) => {
  return (
    <div className="w-full bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Dashboard Overview
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          <SummaryCard
            title="Total Users"
            value={stats.summaryCards.totalUsers.toLocaleString()}
            icon={Users}
            trend={{
              value: stats.summaryCards.totalUsersTrend,
              isPositive: stats.summaryCards.totalUsersTrend > 0,
            }}
            variant="info"
          />

          <SummaryCard
            title="Revenue"
            value={`$${stats.summaryCards.revenue.toLocaleString()}`}
            icon={DollarSign}
            trend={{
              value: stats.summaryCards.revenueTrend,
              isPositive: stats.summaryCards.revenueTrend > 0,
            }}
            variant="success"
          />

          <SummaryCard
            title="Conversion Rate"
            value={`${stats.summaryCards.conversionRate}%`}
            icon={TrendingUp}
            trend={{
              value: stats.summaryCards.conversionRateTrend,
              isPositive: stats.summaryCards.conversionRateTrend > 0,
            }}
            variant="warning"
          />
        </div>

        {/* Two Column Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 mb-8 sm:mb-10">
          {/* Line Chart Card */}
          <div className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border overflow-hidden">
            <div className="px-5 sm:px-6 lg:px-7 pt-5 sm:pt-6 lg:pt-7 pb-4 border-b border-border">
              <h2 className="text-lg sm:text-xl font-bold text-card-foreground">
                User Growth & Conversion
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Track user acquisition and conversion metrics
              </p>
            </div>
            <div className="p-4 sm:p-5 lg:p-6">
              <div className="h-[280px] sm:h-[320px] lg:h-[360px]">
                <Suspense fallback={<ChartSkeleton height="280px" />}>
                  <LineChart data={lineChartData} options={lineChartOptions} />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Pie Chart Card */}
          <div className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border overflow-hidden">
            <div className="px-5 sm:px-6 lg:px-7 pt-5 sm:pt-6 lg:pt-7 pb-4 border-b border-border">
              <h2 className="text-lg sm:text-xl font-bold text-card-foreground">
                Active vs Inactive Users
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                User engagement status distribution
              </p>
            </div>
            <div className="p-4 sm:p-5 lg:p-6">
              <div className="flex justify-center items-center h-[280px] sm:h-[320px] lg:h-[360px]">
                <Suspense fallback={<ChartSkeleton height="280px" />}>
                  <PieChart data={pieChartData} options={pieChartOptions} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Bar Chart Section */}
        <div className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border overflow-hidden">
          <div className="px-5 sm:px-6 lg:px-7 pt-5 sm:pt-6 lg:pt-7 pb-4 border-b border-border">
            <h2 className="text-lg sm:text-xl font-bold text-card-foreground">
              New Users per Month
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Monthly user registration trends over the year
            </p>
          </div>
          <div className="p-4 sm:p-5 lg:p-6">
            <div className="h-[280px] sm:h-[360px] lg:h-[420px]">
              <Suspense fallback={<ChartSkeleton height="420px" />}>
                <BarChart data={barChartData} options={barChartOptions} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
