"use client"

import { DashboardBuilderOverviewCards } from "@/components/super-admin/dashboard-builder/overview-cards"
import { DashboardsTable } from "@/components/super-admin/dashboard-builder/dashboards-table"

export default function DashboardBuilderPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Builder</h2>
        <p className="text-gray-600 mt-1">Create and manage custom dashboards with drag-and-drop widgets</p>
      </div>

      <DashboardBuilderOverviewCards />
      <DashboardsTable />
    </div>
  )
}
