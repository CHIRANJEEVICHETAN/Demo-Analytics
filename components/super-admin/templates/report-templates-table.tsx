"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Eye, Download } from "lucide-react"

const mockReportTemplates = [
  {
    id: 1,
    name: "Monthly Analytics Report",
    type: "Analytics",
    format: "PDF",
    schedule: "Monthly",
    lastGenerated: "2024-01-15",
    status: "Active",
    subscribers: 45,
  },
  {
    id: 2,
    name: "License Usage Report",
    type: "License",
    format: "Excel",
    schedule: "Weekly",
    lastGenerated: "2024-01-14",
    status: "Active",
    subscribers: 28,
  },
  {
    id: 3,
    name: "Security Audit Report",
    type: "Security",
    format: "PDF",
    schedule: "Quarterly",
    lastGenerated: "2024-01-10",
    status: "Active",
    subscribers: 12,
  },
  {
    id: 4,
    name: "Revenue Summary",
    type: "Financial",
    format: "Excel",
    schedule: "Monthly",
    lastGenerated: "2024-01-08",
    status: "Active",
    subscribers: 34,
  },
  {
    id: 5,
    name: "User Activity Report",
    type: "Analytics",
    format: "PDF",
    schedule: "Daily",
    lastGenerated: "2024-01-15",
    status: "Active",
    subscribers: 67,
  },
]

export function ReportTemplatesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTemplates = mockReportTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Report Templates</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Template
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search report templates..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Template Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Format</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Schedule</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Subscribers</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Generated</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((template) => (
                <tr key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{template.name}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {template.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{template.format}</td>
                  <td className="py-3 px-4 text-gray-600">{template.schedule}</td>
                  <td className="py-3 px-4 text-gray-600">{template.subscribers}</td>
                  <td className="py-3 px-4 text-gray-600">{template.lastGenerated}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {template.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-blue-600" />
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
