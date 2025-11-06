import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type{ UserData,SortConfig} from '../../types/user.type';

interface TableHeaderProps {
  label: string;
  field: keyof UserData;
  sortConfig: SortConfig;
  onSort: (field: keyof UserData) => void;
}

export const TableHeader = React.memo(({ 
  label, 
  field, 
  sortConfig, 
  onSort 
}: TableHeaderProps) => {
  const isSorted = sortConfig.key === field;

  return (
    <th
      onClick={() => onSort(field)}
      className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:bg-muted"
    >
      <div className="flex items-center gap-2">
        {label}
        <div className="flex flex-col">
          <ChevronUp 
            className={`w-3 h-3 ${
              isSorted && sortConfig.direction === 'asc'
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          />
          <ChevronDown 
            className={`w-3 h-3 -mt-1 ${
              isSorted && sortConfig.direction === 'desc'
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          />
        </div>
      </div>
    </th>
  );
});

TableHeader.displayName = 'TableHeader';