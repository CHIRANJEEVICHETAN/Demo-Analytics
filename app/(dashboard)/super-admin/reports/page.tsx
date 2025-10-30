"use client"

import { ReportsOverviewCards } from "@/components/super-admin/reports/overview-cards"
import { ReportsTable } from "@/components/super-admin/reports/reports-table"

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Reports & Analytics</h2>
        <p className="text-gray-600 mt-1">Generate and view comprehensive system reports</p>
      </div>

      <ReportsOverviewCards />
      <ReportsTable />
    </div>
  )
}
