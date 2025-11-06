import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieChartProps {
  data: any;
  options?: ChartOptions<"pie">;
}

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  return (
    <div className="w-full h-full max-w-sm mx-auto flex items-center justify-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
