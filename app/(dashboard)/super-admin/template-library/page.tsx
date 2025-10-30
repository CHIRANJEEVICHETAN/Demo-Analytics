"use client"

import { TemplatesOverviewCards } from "@/components/super-admin/templates/overview-cards"
import { TemplatesTable } from "@/components/super-admin/templates/templates-table"

export default function TemplateLibraryPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Template Library</h2>
        <p className="text-gray-600 mt-1">Manage pre-built and custom templates for menus, dashboards, and reports</p>
      </div>

      <TemplatesOverviewCards />
      <TemplatesTable />
    </div>
  )
}
