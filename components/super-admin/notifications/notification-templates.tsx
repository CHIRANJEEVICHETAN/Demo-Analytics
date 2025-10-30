"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Eye, Copy, Trash2 } from "lucide-react"

export function NotificationTemplates() {
  const templates = [
    {
      id: 1,
      name: "Welcome Email",
      type: "Email",
      subject: "Welcome to Eagle Analytics",
      status: "Active",
      lastModified: "2025-01-10",
    },
    {
      id: 2,
      name: "Password Reset",
      type: "Email",
      subject: "Reset Your Password",
      status: "Active",
      lastModified: "2025-01-08",
    },
    {
      id: 3,
      name: "License Expiry Warning",
      type: "Email",
      subject: "Your License Expires Soon",
      status: "Active",
      lastModified: "2025-01-05",
    },
    {
      id: 4,
      name: "System Alert",
      type: "SMS",
      subject: "Critical System Alert",
      status: "Active",
      lastModified: "2025-01-12",
    },
    {
      id: 5,
      name: "License Renewal",
      type: "WhatsApp",
      subject: "License Renewal Notification",
      status: "Inactive",
      lastModified: "2024-12-28",
    },
  ]

  return (
    <Card className="border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>Notification Templates</CardTitle>
          <Button className="bg-red-500 hover:bg-red-600 text-white">+ Create Template</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Template Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Modified</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template) => (
                <tr key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{template.name}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{template.type}</Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{template.subject}</td>
                  <td className="py-3 px-4">
                    <Badge
                      className={
                        template.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }
                    >
                      {template.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-xs">{template.lastModified}</td>
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
