import { api } from "../utils/axiosInstance";

export interface SummaryCards {
  totalUsers: number;
  revenue: number;
  conversionRate: number;
  totalUsersTrend: number;
  revenueTrend: number;
  conversionRateTrend: number;
}

export interface MonthlyJoinedUser {
  id: number;
  joinedUsers: number;
}

export interface UserGrowth {
  id: number;
  newUsers: number;
  conversionRate: number;
}

export interface UserStatus {
  activeUsers: number;
  inactiveUsers: number;
}

export interface StatsData {
  summaryCards: SummaryCards;
  monthlyJoinedUsers: MonthlyJoinedUser[];
  userGrowthData: UserGrowth[];
  userStatusData: UserStatus;
}

export interface StatsResponse {
  success: boolean;
  data: StatsData;
}

export const statsService = {
  // Get all dashboard statistics
  getStats: async (): Promise<StatsData> => {
    const response = await api.get<StatsResponse>("/api/stats");
    return response.data.data;
  },
};
