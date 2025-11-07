import React from "react";
import Button from "../ui/Button";
import { formatDateForDisplay } from "../../utils/dateUtils";

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
            
            // Format dates properly for CSV
            if (field === 'joiningDate' && value) {
              value = formatDateForDisplay(value);
            }
            
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
     console.log("ExportCSV data:", data);
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
    <Button
      onClick={handleDownload}
    >
      Download CSV
    </Button>
  );
};

export default ExportCSV;
