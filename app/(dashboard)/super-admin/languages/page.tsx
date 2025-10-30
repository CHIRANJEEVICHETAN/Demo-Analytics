"use client"

import { LanguagesOverviewCards } from "@/components/super-admin/languages/overview-cards"
import { LanguagesTable } from "@/components/super-admin/languages/languages-table"

export default function LanguagesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Languages & Localization</h2>
        <p className="text-gray-600 mt-1">Manage multi-language support and translations</p>
      </div>

      <LanguagesOverviewCards />
      <LanguagesTable />
    </div>
  )
}
