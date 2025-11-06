// Bar Chart Options
export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        padding: 16,
        font: {
          size: 13,
          weight: "bold" as const,
        },
        usePointStyle: true,
        pointStyle: "circle" as const,
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: 12,
      titleFont: {
        size: 14,
        weight: "bold" as const,
      },
      bodyFont: {
        size: 13,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Number of Users",
        font: {
          size: 13,
          weight: "bold" as const,
        },
        color: "#6b7280",
      },
      grid: {
        color: "rgba(229, 231, 235, 0.5)",
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#6b7280",
      },
    },
    x: {
      title: {
        display: true,
        text: "Month",
        font: {
          size: 13,
          weight: "bold" as const,
        },
        color: "#6b7280",
      },
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#6b7280",
      },
    },
  },
};

// Line Chart Options
export const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        padding: 16,
        font: {
          size: 13,
          weight: "bold" as const,
        },
        usePointStyle: true,
        pointStyle: "circle" as const,
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: 12,
      titleFont: {
        size: 14,
        weight: "bold" as const,
      },
      bodyFont: {
        size: 13,
      },
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      beginAtZero: true,
      title: {
        display: true,
        text: "New Users",
        font: {
          size: 13,
          weight: "bold" as const,
        },
        color: "#6b7280",
      },
      grid: {
        color: "rgba(229, 231, 235, 0.5)",
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#6b7280",
      },
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      beginAtZero: true,
      title: {
        display: true,
        text: "Conversion Rate (%)",
        font: {
          size: 13,
          weight: "bold" as const,
        },
        color: "#6b7280",
      },
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#6b7280",
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#6b7280",
      },
    },
  },
};

// Pie Chart Options
export const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 16,
        font: {
          size: 13,
          weight: "bold" as const,
        },
        usePointStyle: true,
        pointStyle: "circle" as const,
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: 12,
      titleFont: {
        size: 14,
        weight: "bold" as const,
      },
      bodyFont: {
        size: 13,
      },
      callbacks: {
        label: function (context: any) {
          const label = context.label || "";
          const value = context.parsed || 0;
          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${label}: ${percentage}%`;
        },
      },
    },
  },
};
