import { useMemo } from 'react';
import type { UserData, Filters } from '../types/user.type';

export function useFilteredUsers(
  users: UserData[],
  searchQuery: string,
  filters: Filters
) {
  return useMemo(() => {
    return users.filter(user => {
      // Search filter
      const matchesSearch = 
        user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchQuery.toLowerCase());

      // Status filter
      console.log(user.status, filters.status);
      const matchesStatus = filters.status === 'all' || user.status === filters.status;
     console.log(matchesStatus)
      // Date range filter
      let matchesDateRange = true;
      if (filters.dateFrom || filters.dateTo) {
        const userDate = new Date(user.joiningDate);
        if (filters.dateFrom) {
          matchesDateRange = matchesDateRange && userDate >= new Date(filters.dateFrom);
        }
        if (filters.dateTo) {
          matchesDateRange = matchesDateRange && userDate <= new Date(filters.dateTo);
        }
      }

      return matchesSearch && matchesStatus && matchesDateRange;
    });
  }, [users, searchQuery, filters]);
}