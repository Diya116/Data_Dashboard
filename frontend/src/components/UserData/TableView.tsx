import React from "react";
import type { UserData, SortConfig } from '../../types/user.type';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
interface TableViewProps {
  users: UserData[];
  sortConfig: SortConfig;
  onSort: (field: keyof UserData) => void;
  onEdit: (user: UserData) => void;
  onDelete: (userId: string) => void;
}

export const TableView = React.memo(({ 
  users, 
  sortConfig, 
  onSort, 
  onEdit, 
  onDelete 
}: TableViewProps) => {
  if (users.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg shadow">
        <div className="text-center py-12 text-muted-foreground">
          No users found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow overflow-hidden border border-border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <TableHeader 
                label="Name" 
                field="name" 
                sortConfig={sortConfig} 
                onSort={onSort} 
              />
              <TableHeader 
                label="Email" 
                field="email" 
                sortConfig={sortConfig} 
                onSort={onSort} 
              />
              <TableHeader 
                label="Status" 
                field="status" 
                sortConfig={sortConfig} 
                onSort={onSort} 
              />
              <TableHeader 
                label="Joining Date" 
                field="joiningDate" 
                sortConfig={sortConfig} 
                onSort={onSort} 
              />
              <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {users.map((user) => (
              <TableRow 
                key={user.id} 
                user={user} 
                onEdit={onEdit} 
                onDelete={onDelete} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

TableView.displayName = 'TableView';

export default TableView;