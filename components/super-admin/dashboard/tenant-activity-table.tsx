"use client"

import { useState } from "react"
import { Eye, Edit2, Pause, DotSquare as LogSquare } from "lucide-react"

interface TenantData {
  id: string
  name: string
  industry: string
  licenseType: string
  activeUsers: number
  expiryDate: string
  usage: number
  lastActivity: string
  status: "active" | "suspended" | "inactive" | "trial"
}

const mockTenants: TenantData[] = [
  {
    id: "COMP-001",
    name: "ABC Manufacturing",
    industry: "Automotive",
    licenseType: "Enterprise",
    activeUsers: 45,
    expiryDate: "2025-12-31",
    usage: 78,
    lastActivity: "2 hours ago",
    status: "active",
  },
  {
    id: "COMP-002",
    name: "XYZ Electronics",
    industry: "Electronics",
    licenseType: "Premium",
    activeUsers: 28,
    expiryDate: "2025-08-15",
    usage: 65,
    lastActivity: "30 minutes ago",
    status: "active",
  },
  {
    id: "COMP-003",
    name: "Tech Solutions",
    industry: "Medical",
    licenseType: "Standard",
    activeUsers: 12,
    expiryDate: "2025-06-20",
    usage: 45,
    lastActivity: "1 day ago",
    status: "active",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800",
  suspended: "bg-red-100 text-red-800",
  inactive: "bg-gray-100 text-gray-800",
  trial: "bg-yellow-100 text-yellow-800",
}

const expiryColors = (days: number) => {
  if (days < 15) return "text-red-600"
  if (days < 30) return "text-yellow-600"
  return "text-green-600"
}

export function TenantActivityTable() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diff = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return diff
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Company</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Industry</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">License</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Users</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Expiry</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Usage</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockTenants.map((tenant) => {
              const daysUntilExpiry = getDaysUntilExpiry(tenant.expiryDate)
              return (
                <tr key={tenant.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{tenant.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{tenant.industry}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{tenant.licenseType}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{tenant.activeUsers}</td>
                  <td className={`px-6 py-4 text-sm font-medium ${expiryColors(daysUntilExpiry)}`}>
                    {daysUntilExpiry} days
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${tenant.usage}%` }} />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[tenant.status]}`}>
                      {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-200 rounded" title="View">
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded" title="Edit">
                        <Edit2 size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded" title="Suspend">
                        <Pause size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded" title="Logs">
                        <LogSquare size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 1 to 3 of 47 companies</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
