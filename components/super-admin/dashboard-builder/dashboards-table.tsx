"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Eye, Share2 } from "lucide-react"

const mockDashboards = [
  {
    id: 1,
    name: "Executive Dashboard",
    owner: "Admin",
    widgets: 12,
    users: 45,
    lastModified: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Sales Analytics",
    owner: "Sales Manager",
    widgets: 8,
    users: 23,
    lastModified: "2024-01-14",
    status: "Active",
  },
  {
    id: 3,
    name: "Operations Overview",
    owner: "Operations",
    widgets: 15,
    users: 67,
    lastModified: "2024-01-13",
    status: "Active",
  },
  {
    id: 4,
    name: "HR Dashboard",
    owner: "HR Manager",
    widgets: 6,
    users: 12,
    lastModified: "2024-01-12",
    status: "Draft",
  },
  {
    id: 5,
    name: "Finance Summary",
    owner: "Finance",
    widgets: 10,
    users: 34,
    lastModified: "2024-01-11",
    status: "Active",
  },
]

export function DashboardsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDashboards = mockDashboards.filter(
    (dashboard) =>
      dashboard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dashboard.owner.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Dashboards</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Dashboard
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search dashboards..."
              className="pl-10 border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Dashboard Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Owner</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Widgets</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Shared Users</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Modified</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDashboards.map((dashboard) => (
                <tr key={dashboard.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{dashboard.name}</td>
                  <td className="py-3 px-4 text-gray-600">{dashboard.owner}</td>
                  <td className="py-3 px-4 text-gray-600">{dashboard.widgets}</td>
                  <td className="py-3 px-4 text-gray-600">{dashboard.users}</td>
                  <td className="py-3 px-4 text-gray-600">{dashboard.lastModified}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(dashboard.status)}`}>
                      {dashboard.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Share2 className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
