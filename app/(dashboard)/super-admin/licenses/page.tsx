"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LicenseOverviewCards } from "@/components/super-admin/licenses/overview-cards"
import { LicensesTable } from "@/components/super-admin/licenses/licenses-table"
import { LicensePlans } from "@/components/super-admin/licenses/license-plans"

export default function LicensesPage() {
  const [activeTab, setActiveTab] = useState("licenses")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">License Management</h2>
          <p className="text-gray-600 mt-1">Manage licenses, plans, and renewals across all companies</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Bulk Renew</Button>
          <Button variant="outline">Generate Report</Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white">+ Create New License</Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("licenses")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "licenses"
              ? "border-red-500 text-red-500"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Active Licenses
        </button>
        <button
          onClick={() => setActiveTab("plans")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "plans"
              ? "border-red-500 text-red-500"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          License Plans
        </button>
      </div>

      {/* Content */}
      {activeTab === "licenses" && (
        <div className="space-y-6">
          <LicenseOverviewCards />
          <LicensesTable />
        </div>
      )}

      {activeTab === "plans" && (
        <div>
          <LicensePlans />
        </div>
      )}
    </div>
  )
}
