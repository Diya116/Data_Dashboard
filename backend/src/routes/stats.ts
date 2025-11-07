import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

// GET /api/stats - Get all dashboard statistics
router.get("/",(req:Request,res:Response)=>{
      try {
    // Summary Cards Data - Only raw values
    const summaryCards = {
      totalUsers: 2777,
      revenue: 452310,
      conversionRate: 3.241,
      totalUsersTrend: 12.51,
      revenueTrend: 8.31,
      conversionRateTrend: -2.11
    };

    // Monthly Joined Users Data - Simple array of objects with id and joinedUsers
    const monthlyJoinedUsers = [
      { id: 1, joinedUsers: 50 },
      { id: 2, joinedUsers: 80 },
      { id: 3, joinedUsers: 120 },
      { id: 4, joinedUsers: 180 },
      { id: 5, joinedUsers: 220 },
      { id: 6, joinedUsers: 260 },
      { id: 7, joinedUsers: 300 },
      { id: 8, joinedUsers: 280 },
      { id: 9, joinedUsers: 240 },
      { id: 10, joinedUsers: 310 },
      { id: 11, joinedUsers: 350 },
      { id: 12, joinedUsers: 400 }
    ];

    // User Growth and Conversion Data - Monthly data with id, newUsers, and conversionRate
    const userGrowthData = [
      { id: 1, newUsers: 120, conversionRate: 2.5 },
      { id: 2, newUsers: 150, conversionRate: 3.2 },
      { id: 3, newUsers: 180, conversionRate: 3.8 },
      { id: 4, newUsers: 200, conversionRate: 4.5 },
      { id: 5, newUsers: 250, conversionRate: 4.9 },
      { id: 6, newUsers: 300, conversionRate: 5.5 }
    ];

    // User Status Data - Active and Inactive users
    const userStatusData = {
      activeUsers: 200,
      inactiveUsers: 100
    };

    // Complete stats response
    const stats = {
      summaryCards,
      monthlyJoinedUsers,
      userGrowthData,
      userStatusData,
    };

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching statistics",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

export default router;
