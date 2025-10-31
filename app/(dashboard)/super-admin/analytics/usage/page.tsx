"use client"

import { AnalyticsOverviewCards } from "@/components/super-admin/analytics/overview-cards"
import { UsageCharts } from "@/components/super-admin/analytics/usage-charts"

export default function AnalyticsUsagePage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Menu Analytics</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Usage Statistics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Usage Statistics</h1>
        <p className="text-gray-600 mt-1">Analyze feature usage and user activity across the platform</p>
      </div>

      <AnalyticsOverviewCards />
      <UsageCharts />
    </div>
  )
}
