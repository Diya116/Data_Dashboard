import React from "react";
import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "primary" | "success" | "warning" | "info";
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  variant = "primary",
}) => {
  // Theme-aware variant styles using CSS variables
  const variantStyles = {
    primary: {
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    success: {
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600 dark:text-green-500",
    },
    warning: {
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600 dark:text-purple-500",
    },
    info: {
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-500",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <div className="group relative bg-card rounded-2xl  hover:shadow-xl transition-all duration-300 border border-border overflow-hidden">
      {/* Gradient accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          {/* Left Content */}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 truncate">
              {title}
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mb-3 truncate">
              {value}
            </h3>
            
            {trend && (
              <div className="flex items-center gap-2 flex-wrap">
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    trend.isPositive
                      ? "bg-green-500/10 text-green-700 dark:text-green-500"
                      : "bg-red-500/10 text-red-700 dark:text-red-500"
                  }`}
                >
                  {trend.isPositive ? (
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                  <span>
                    {trend.isPositive ? "+" : ""}
                    {trend.value}%
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                  vs last month
                </span>
              </div>
            )}
          </div>

          {/* Icon Container */}
          <div className={`flex-shrink-0 ${currentVariant.iconBg} ${currentVariant.iconColor} p-3 sm:p-4 rounded-xl sm:rounded-  group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;