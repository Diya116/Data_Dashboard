import React from "react";

interface JsonToCsvDownloaderProps {
  data: Record<string, any>[]; // array of JSON objects
  fileName?: string; // optional file name
}

const ExportCSV: React.FC<JsonToCsvDownloaderProps> = ({
  data,
  fileName = "data.csv",
}) => {
  const convertToCSV = (jsonData: Record<string, any>[]) => {
    if (!jsonData || jsonData.length === 0) return "";

    const headers = Object.keys(jsonData[0]);
    const csvRows = [
      headers.join(","), // header row
      ...jsonData.map((row) =>
        headers
          .map((field) => {
            let value = row[field];
            if (typeof value === "string") {
              // escape commas and quotes
              value = value.replace(/"/g, '""');
              if (value.includes(",") || value.includes("\n")) {
                value = `"${value}"`;
              }
            }
            return value;
          })
          .join(",")
      ),
    ];

    return csvRows.join("\n");
  };

  const handleDownload = () => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
    >
      Download CSV
    </button>
  );
};

export default ExportCSV;
