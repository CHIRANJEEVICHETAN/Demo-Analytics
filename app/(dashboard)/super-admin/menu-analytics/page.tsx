"use client"

import { AnalyticsOverviewCards } from "@/components/super-admin/analytics/overview-cards"
import { MenuUsageTable } from "@/components/super-admin/analytics/menu-usage-table"

export default function MenuAnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Menu Analytics</h2>
        <p className="text-gray-600 mt-1">Track menu usage, user behavior, and performance metrics</p>
      </div>

      <AnalyticsOverviewCards />
      <MenuUsageTable />
    </div>
  )
}
