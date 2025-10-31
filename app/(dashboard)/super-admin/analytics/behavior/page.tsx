"use client"

import { AnalyticsOverviewCards } from "@/components/super-admin/analytics/overview-cards"
import { BehaviorCharts } from "@/components/super-admin/analytics/behavior-charts"

export default function AnalyticsBehaviorPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Menu Analytics</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">User Behavior</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">User Behavior</h1>
        <p className="text-gray-600 mt-1">Understand how users navigate and interact with the application</p>
      </div>

      <AnalyticsOverviewCards />
      <BehaviorCharts />
    </div>
  )
}
