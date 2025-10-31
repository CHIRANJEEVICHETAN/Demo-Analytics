"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Eye, Download } from "lucide-react"

const mockPolicies = [
  {
    id: 1,
    name: "Password Policy",
    category: "Authentication",
    severity: "Critical",
    status: "Active",
    enforced: true,
    lastUpdated: "2024-01-15",
    affectedUsers: 1245,
  },
  {
    id: 2,
    name: "Data Retention Policy",
    category: "Data Management",
    severity: "High",
    status: "Active",
    enforced: true,
    lastUpdated: "2024-01-10",
    affectedUsers: 1245,
  },
  {
    id: 3,
    name: "Access Control Policy",
    category: "Authorization",
    severity: "Critical",
    status: "Active",
    enforced: true,
    lastUpdated: "2024-01-08",
    affectedUsers: 1245,
  },
  {
    id: 4,
    name: "Encryption Policy",
    category: "Security",
    severity: "Critical",
    status: "Active",
    enforced: true,
    lastUpdated: "2024-01-05",
    affectedUsers: 1245,
  },
  {
    id: 5,
    name: "Session Timeout Policy",
    category: "Authentication",
    severity: "Medium",
    status: "Active",
    enforced: false,
    lastUpdated: "2024-01-03",
    affectedUsers: 856,
  },
]

export function PoliciesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPolicies = mockPolicies.filter(
    (policy) =>
      policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800"
      case "High":
        return "bg-orange-100 text-orange-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Security Policies</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Policies
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Policy
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search policies..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Policy Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Severity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Enforced</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Affected Users</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Updated</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPolicies.map((policy) => (
                <tr key={policy.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{policy.name}</td>
                  <td className="py-3 px-4 text-gray-600">{policy.category}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(policy.severity)}`}>
                      {policy.severity}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {policy.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${policy.enforced ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
                    >
                      {policy.enforced ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{policy.affectedUsers.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{policy.lastUpdated}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-gray-600" />
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
