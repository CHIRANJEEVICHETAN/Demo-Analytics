"use client"

import { useState } from "react"
import { Eye, Edit2, Pause, Trash2 } from "lucide-react"

interface Company {
  id: string
  name: string
  logo?: string
  industry: string
  contact: string
  email: string
  phone: string
  licenseType: string
  activeUsers: number
  onboardedDate: string
  lastActivity: string
  status: "active" | "inactive" | "suspended" | "trial"
}

const mockCompanies: Company[] = [
  {
    id: "COMP-001",
    name: "ABC Manufacturing",
    industry: "Automotive",
    contact: "John Smith",
    email: "john@abc.com",
    phone: "+1-555-0101",
    licenseType: "Enterprise",
    activeUsers: 45,
    onboardedDate: "2024-01-15",
    lastActivity: "2 hours ago",
    status: "active",
  },
  {
    id: "COMP-002",
    name: "XYZ Electronics",
    industry: "Electronics",
    contact: "Sarah Johnson",
    email: "sarah@xyz.com",
    phone: "+1-555-0102",
    licenseType: "Premium",
    activeUsers: 28,
    onboardedDate: "2024-02-20",
    lastActivity: "30 minutes ago",
    status: "active",
  },
  {
    id: "COMP-003",
    name: "Tech Solutions",
    industry: "Medical",
    contact: "Mike Davis",
    email: "mike@tech.com",
    phone: "+1-555-0103",
    licenseType: "Standard",
    activeUsers: 12,
    onboardedDate: "2024-03-10",
    lastActivity: "1 day ago",
    status: "active",
  },
  {
    id: "COMP-004",
    name: "Global Industries",
    industry: "Food Processing",
    contact: "Emma Wilson",
    email: "emma@global.com",
    phone: "+1-555-0104",
    licenseType: "Basic",
    activeUsers: 8,
    onboardedDate: "2024-04-05",
    lastActivity: "3 days ago",
    status: "trial",
  },
  {
    id: "COMP-005",
    name: "Innovation Labs",
    industry: "Pharma",
    contact: "Robert Brown",
    email: "robert@innovation.com",
    phone: "+1-555-0105",
    licenseType: "Enterprise",
    activeUsers: 52,
    onboardedDate: "2024-01-20",
    lastActivity: "1 hour ago",
    status: "suspended",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-100 text-gray-800",
  suspended: "bg-red-100 text-red-800",
  trial: "bg-yellow-100 text-yellow-800",
}

const licenseColors = {
  Basic: "bg-blue-100 text-blue-800",
  Standard: "bg-green-100 text-green-800",
  Premium: "bg-purple-100 text-purple-800",
  Enterprise: "bg-red-100 text-red-800",
}

export function CompaniesTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterIndustry, setFilterIndustry] = useState("")
  const [filterLicense, setFilterLicense] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  const filteredCompanies = mockCompanies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.contact.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = !filterIndustry || company.industry === filterIndustry
    const matchesLicense = !filterLicense || company.licenseType === filterLicense
    const matchesStatus = !filterStatus || company.status === filterStatus

    return matchesSearch && matchesIndustry && matchesLicense && matchesStatus
  })

  const toggleSelectAll = () => {
    if (selectedRows.length === filteredCompanies.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(filteredCompanies.map((c) => c.id))
    }
  }

  const toggleSelectRow = (id: string) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Filters */}
      <div className="p-6 border-b border-gray-200 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by company name, ID, or contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filterIndustry}
            onChange={(e) => setFilterIndustry(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Industries</option>
            <option value="Automotive">Automotive</option>
            <option value="Electronics">Electronics</option>
            <option value="Medical">Medical</option>
            <option value="Food Processing">Food Processing</option>
            <option value="Pharma">Pharma</option>
          </select>
          <select
            value={filterLicense}
            onChange={(e) => setFilterLicense(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All License Types</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
            <option value="trial">Trial</option>
          </select>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">Clear Filters</button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedRows.length > 0 && (
        <div className="px-6 py-3 bg-blue-50 border-b border-gray-200 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">{selectedRows.length} selected</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium">Activate</button>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium">Suspend</button>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
              Send Notification
            </button>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium">Export</button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === filteredCompanies.length && filteredCompanies.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-gray-300"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Company</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Industry</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">License</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Users</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Onboarded</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Last Activity</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(company.id)}
                    onChange={() => toggleSelectRow(company.id)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{company.name}</p>
                    <p className="text-xs text-gray-500">{company.id}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.industry}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{company.contact}</p>
                    <p className="text-xs text-gray-500">{company.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${licenseColors[company.licenseType as keyof typeof licenseColors]}`}
                  >
                    {company.licenseType}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.activeUsers}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.onboardedDate}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{company.lastActivity}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[company.status]}`}>
                    {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
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
                    <button className="p-1 hover:bg-gray-200 rounded" title="Delete">
                      <Trash2 size={16} className="text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing 1 to {filteredCompanies.length} of {mockCompanies.length} companies
        </p>
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
