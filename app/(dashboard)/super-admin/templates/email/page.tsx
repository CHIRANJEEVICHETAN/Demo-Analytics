"use client"

import { TemplatesOverviewCards } from "@/components/super-admin/templates/overview-cards"
import { EmailTemplatesTable } from "@/components/super-admin/templates/email-table"

export default function EmailTemplatesPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Template Library</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Email Templates</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Email Templates</h1>
        <p className="text-gray-600 mt-1">Create and manage email templates for notifications and communications</p>
      </div>

      <TemplatesOverviewCards />
      <EmailTemplatesTable />
    </div>
  )
}
