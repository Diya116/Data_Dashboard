import { useState } from 'react';
import type{ UserData,SortConfig,Filters} from '../../types/user.type';
import { useFilteredUsers } from '../../hook/useFilteredUsers';
import { useSortedUsers } from '../../hook/useSortedUsers';
import { usePagination } from '../../hook/usePagination';
import { SearchBar } from './SearchBar';
import { UserFilters } from './UserFilters';
import { TableView } from './TableView';
import { Pagination } from './Pagination';
import Loader from '../ui/Loader';
interface UserTableProps {
  users: UserData[];
  loading: boolean;
  error: string | null;
  onEdit: (user: UserData) => void;
  onDelete: (userId: string) => void;
}

export function UserTable({ users, loading, error, onEdit, onDelete }: UserTableProps) {
  // State management (UI only)
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({
    status: 'all',
    dateFrom: '',
    dateTo: ''
  });
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc'
  });

  // Derived data using custom hooks
  const filteredUsers = useFilteredUsers(users, searchQuery, filters);
  const sortedUsers = useSortedUsers(filteredUsers, sortConfig);
  const pagination = usePagination<UserData>(sortedUsers, 10);

  // Event handlers
  const handleSort = (field: keyof UserData) => {
    setSortConfig(prev => ({
      key: field,
      direction: prev.key === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ status: 'all', dateFrom: '', dateTo: '' });
    setSearchQuery('');
  };

  // Loading state
  if (loading) {
    return (
     <Loader/>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* Search and Filters Section */}
      <div className="bg-card border border-border p-4 rounded-lg shadow space-y-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by name or email..."
        />

        <UserFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
        />

        <div className="text-sm text-muted-foreground">
          Showing {pagination.startIndex + 1}-{pagination.endIndex} of {pagination.totalItems} results
        </div>
      </div>

      {/* Table Section */}
      <TableView
        users={pagination.paginatedItems}
        sortConfig={sortConfig}
        onSort={handleSort}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      {/* Pagination Section */}
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.goToPage}
        onNext={pagination.nextPage}
        onPrev={pagination.prevPage}
      />
    </div>
  );
}