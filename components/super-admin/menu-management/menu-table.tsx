"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Eye, Edit, Copy, Trash2, GripVertical } from "lucide-react"

export function MenuTable() {
  const menuItems = [
    {
      id: "MENU_001",
      name: "Dashboard",
      icon: "📊",
      parent: "Top Level",
      route: "/dashboard",
      order: 1,
      roles: ["Super Admin", "Company Admin", "Manager"],
      status: "Active",
      visible: "All Companies",
    },
    {
      id: "MENU_002",
      name: "Production",
      icon: "🏭",
      parent: "Top Level",
      route: "/production",
      order: 2,
      roles: ["Company Admin", "Manager", "Supervisor"],
      status: "Active",
      visible: "All Companies",
    },
    {
      id: "MENU_003",
      name: "OEE Dashboard",
      icon: "⚙️",
      parent: "Production",
      route: "/production/oee",
      order: 1,
      roles: ["Company Admin", "Manager"],
      status: "Active",
      visible: "All Companies",
    },
    {
      id: "MENU_004",
      name: "Energy",
      icon: "⚡",
      parent: "Top Level",
      route: "/energy",
      order: 3,
      roles: ["Company Admin", "Manager"],
      status: "Active",
      visible: "Specific Companies",
    },
    {
      id: "MENU_005",
      name: "Reports",
      icon: "📄",
      parent: "Top Level",
      route: "/reports",
      order: 4,
      roles: ["Company Admin", "Manager", "Supervisor"],
      status: "Active",
      visible: "All Companies",
    },
  ]

  return (
    <Card className="border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>Menu Items (Table View)</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Search menus..." className="w-64" />
            <Button variant="outline">Filter</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 w-8"></th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Menu ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Parent</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Route</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Order</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Roles</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900">{item.id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{item.parent}</td>
                  <td className="py-3 px-4 text-gray-700 font-mono text-xs">{item.route}</td>
                  <td className="py-3 px-4 text-gray-700">{item.order}</td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {item.roles.slice(0, 2).map((role) => (
                        <Badge key={role} variant="outline" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                      {item.roles.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{item.roles.length - 2}
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className="bg-green-100 text-green-800">{item.status}</Badge>
                  </td>
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
                      <button className="p-1 hover:bg-gray-100 rounded" title="Delete">
                        <Trash2 className="w-4 h-4 text-gray-600" />
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
