import { Edit2, Trash2 } from 'lucide-react';
import React from 'react';
import type { UserData } from '../../types/user.type';

interface TableRowProps {
  user: UserData;
  onEdit: (user: UserData) => void;
  onDelete: (userId: string) => void;
}

export const TableRow = React.memo(({ user, onEdit, onDelete }: TableRowProps) => {
  return (
    <tr className="hover:bg-muted transition border-b border-border">
      <td className="px-6 py-4 whitespace-nowrap text-foreground">{user.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-foreground">{user.email}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          user.status === 'Active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}>
          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-foreground">
        {new Date(user.joiningDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onEdit(user)}
            className="p-2 text-primary hover:bg-accent rounded-lg transition cursor-pointer"
            title="Edit"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => user.id && onDelete(user.id)}
            className="p-2 text-destructive hover:bg-accent rounded-lg transition cursor-pointer"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
});

TableRow.displayName = 'TableRow';