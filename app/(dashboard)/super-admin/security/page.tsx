"use client"

import { SecurityOverviewCards } from "@/components/super-admin/security/overview-cards"
import { SecurityTabs } from "@/components/super-admin/security/security-tabs"

export default function SecurityPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Security & Compliance</h2>
        <p className="text-gray-600 mt-1">Manage security settings, compliance policies, and audit logs</p>
      </div>

      <SecurityOverviewCards />
      <SecurityTabs />
    </div>
  )
}
