"use client"

import { SecurityOverviewCards } from "@/components/super-admin/security/overview-cards"
import { AuditLogsTable } from "@/components/super-admin/security/audit-table"

export default function SecurityAuditLogsPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Security & Compliance</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Audit Logs</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
        <p className="text-gray-600 mt-1">Track system changes, user access, and security events</p>
      </div>

      <SecurityOverviewCards />
      <AuditLogsTable />
    </div>
  )
}
