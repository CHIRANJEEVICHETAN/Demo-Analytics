"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Eye, Edit, Copy } from "lucide-react"

export function RolesTable() {
  const systemRoles = [
    {
      id: 1,
      name: "Super Admin",
      description: "Full system access with tenant management capabilities",
      userCount: 3,
      permissions: "Full Access",
      type: "System",
    },
    {
      id: 2,
      name: "Company Admin",
      description: "Full access within own company/tenant",
      userCount: 47,
      permissions: "All company-level permissions",
      type: "System",
    },
    {
      id: 3,
      name: "Manager",
      description: "Department/section management with reporting access",
      userCount: 145,
      permissions: "28 permissions",
      type: "System",
    },
    {
      id: 4,
      name: "Supervisor",
      description: "Production monitoring and basic operations",
      userCount: 234,
      permissions: "18 permissions",
      type: "System",
    },
    {
      id: 5,
      name: "Operator",
      description: "Shop floor operations and data entry",
      userCount: 567,
      permissions: "12 permissions",
      type: "System",
    },
    {
      id: 6,
      name: "Quality Inspector",
      description: "Quality control and inspection management",
      userCount: 89,
      permissions: "15 permissions",
      type: "System",
    },
    {
      id: 7,
      name: "Maintenance Technician",
      description: "Maintenance scheduling and execution",
      userCount: 112,
      permissions: "14 permissions",
      type: "System",
    },
    {
      id: 8,
      name: "Viewer",
      description: "Read-only access to dashboards and reports",
      userCount: 78,
      permissions: "8 permissions",
      type: "System",
    },
  ]

  return (
    <Card className="border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>System Roles</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Search roles..." className="w-64" />
            <Button variant="outline">Filter</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Role Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Users</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Permissions</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {systemRoles.map((role) => (
                <tr key={role.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{role.name}</div>
                      <Badge variant="outline" className="mt-1">
                        {role.type}
                      </Badge>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{role.description}</td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{role.userCount}</div>
                    <div className="text-xs text-gray-500">users assigned</div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{role.permissions}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded" title="View">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Edit">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Clone">
                        <Copy className="w-4 h-4 text-gray-600" />
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
