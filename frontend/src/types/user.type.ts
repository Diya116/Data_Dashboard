export interface UserData {
  id?: string;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  joiningDate: string;
}
export interface SortConfig {
  key: keyof UserData | null;
  direction: 'asc' | 'desc';
}

export interface Filters {
  status: string;
  dateFrom: string;
  dateTo: string;
}