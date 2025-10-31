"use client"

import { DashboardBuilderOverviewCards } from "@/components/super-admin/dashboard-builder/overview-cards"
import { WidgetLibrary } from "@/components/super-admin/dashboard-builder/widget-library"

export default function BuilderWidgetsPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Dashboard Builder</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Widget Library</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Widget Library</h1>
        <p className="text-gray-600 mt-1">Browse available widgets to add to your dashboards</p>
      </div>

      <DashboardBuilderOverviewCards />
      <WidgetLibrary />
    </div>
  )
}
