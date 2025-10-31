"use client"

import { AnalyticsOverviewCards } from "@/components/super-admin/analytics/overview-cards"
import { PopularMenusChart } from "@/components/super-admin/analytics/popular-menus-chart"

export default function AnalyticsPopularPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Menu Analytics</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Popular Menus</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Popular Menus</h1>
        <p className="text-gray-600 mt-1">Discover which menus are most frequently accessed by users</p>
      </div>

      <AnalyticsOverviewCards />
      <PopularMenusChart />
    </div>
  )
}
