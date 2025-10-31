"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter } from "lucide-react"

const mockAuditLogs = [
  {
    id: 1,
    timestamp: "2024-01-15 14:32:18",
    user: "admin@example.com",
    action: "User Login",
    resource: "Authentication",
    ipAddress: "192.168.1.100",
    status: "Success",
    details: "Successful login from Chrome browser",
  },
  {
    id: 2,
    timestamp: "2024-01-15 14:28:45",
    user: "john.doe@example.com",
    action: "Company Created",
    resource: "Company Management",
    ipAddress: "192.168.1.105",
    status: "Success",
    details: "Created new company: ABC Manufacturing",
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:15:22",
    user: "sarah.admin@example.com",
    action: "Failed Login Attempt",
    resource: "Authentication",
    ipAddress: "192.168.1.250",
    status: "Failed",
    details: "Invalid password - 3rd attempt",
  },
  {
    id: 4,
    timestamp: "2024-01-15 13:45:10",
    user: "admin@example.com",
    action: "Security Policy Updated",
    resource: "Security Settings",
    ipAddress: "192.168.1.100",
    status: "Success",
    details: "Updated password policy requirements",
  },
  {
    id: 5,
    timestamp: "2024-01-15 13:30:55",
    user: "mike.manager@example.com",
    action: "License Assigned",
    resource: "License Management",
    ipAddress: "192.168.1.110",
    status: "Success",
    details: "Assigned Enterprise license to Tech Corp",
  },
  {
    id: 6,
    timestamp: "2024-01-15 12:15:30",
    user: "admin@example.com",
    action: "User Deleted",
    resource: "User Management",
    ipAddress: "192.168.1.100",
    status: "Success",
    details: "Deleted inactive user account",
  },
  {
    id: 7,
    timestamp: "2024-01-15 11:45:12",
    user: "jane.admin@example.com",
    action: "Role Modified",
    resource: "Roles & Permissions",
    ipAddress: "192.168.1.115",
    status: "Success",
    details: "Updated permissions for Manager role",
  },
  {
    id: 8,
    timestamp: "2024-01-15 10:30:22",
    user: "system@internal",
    action: "Backup Completed",
    resource: "System",
    ipAddress: "127.0.0.1",
    status: "Success",
    details: "Automated daily backup completed successfully",
  },
]

export function AuditLogsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  const filteredLogs = mockAuditLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !filterStatus || log.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    return status === "Success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Audit Logs</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Logs
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search logs..."
              className="pl-10 border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Timestamp</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Resource</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">IP Address</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">{log.timestamp}</td>
                  <td className="py-3 px-4 font-medium text-gray-900">{log.user}</td>
                  <td className="py-3 px-4 text-gray-600">{log.action}</td>
                  <td className="py-3 px-4 text-gray-600">{log.resource}</td>
                  <td className="py-3 px-4 text-gray-600 font-mono text-xs">{log.ipAddress}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 max-w-xs truncate">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing {filteredLogs.length} of {mockAuditLogs.length} logs</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
