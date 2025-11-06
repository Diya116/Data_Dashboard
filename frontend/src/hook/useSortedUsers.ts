import { useMemo } from 'react';
import type { UserData, SortConfig } from '../types/user.type';

export function useSortedUsers(users: UserData[], sortConfig: SortConfig) {
  return useMemo(() => {
    if (!sortConfig.key) return users;

    return [...users].sort((a, b) => {
      const aVal = a[sortConfig.key!];
      const bVal = b[sortConfig.key!];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [users, sortConfig]);
}