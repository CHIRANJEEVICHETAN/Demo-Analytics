"use client"

import { SecurityOverviewCards } from "@/components/super-admin/security/overview-cards"
import { PoliciesTable } from "@/components/super-admin/security/policies-table"

export default function SecurityPoliciesPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Security & Compliance</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Security Policies</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Security Policies</h1>
        <p className="text-gray-600 mt-1">Manage organization-wide security policies and enforcement rules</p>
      </div>

      <SecurityOverviewCards />
      <PoliciesTable />
    </div>
  )
}
