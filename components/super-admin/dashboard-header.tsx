"use client"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Dashboards</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Analytics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
      </div>
    </div>
  )
}
