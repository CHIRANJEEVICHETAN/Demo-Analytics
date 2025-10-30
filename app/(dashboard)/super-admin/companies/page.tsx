"use client"

import { useState } from "react"
import { Plus, Upload, Download } from "lucide-react"
import { CompaniesOverviewCards } from "@/components/super-admin/companies/overview-cards"
import { CompaniesTable } from "@/components/super-admin/companies/companies-table"
import { AddCompanyModal } from "@/components/super-admin/companies/add-company-modal"

export default function CompaniesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>Super Admin</span>
            <span className="text-gray-400">/</span>
            <span className="text-red-600 font-medium">Company Management</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Company Management</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
            <Upload size={18} />
            Bulk Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
            <Download size={18} />
            Export
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            <Plus size={18} />
            Add New Company
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <CompaniesOverviewCards />

      {/* Companies Table */}
      <CompaniesTable />

      {/* Add Company Modal */}
      <AddCompanyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
