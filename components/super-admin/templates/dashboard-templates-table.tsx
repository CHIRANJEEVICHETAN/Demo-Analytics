"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Eye, Copy } from "lucide-react"

const mockDashboardTemplates = [
  {
    id: 1,
    name: "Executive Dashboard",
    widgets: 12,
    category: "Management",
    uses: 245,
    rating: 4.8,
    lastModified: "2024-01-15",
    status: "Published",
  },
  {
    id: 2,
    name: "Sales Dashboard",
    widgets: 8,
    category: "Sales",
    uses: 189,
    rating: 4.5,
    lastModified: "2024-01-14",
    status: "Published",
  },
  {
    id: 3,
    name: "Operations Dashboard",
    widgets: 15,
    category: "Operations",
    uses: 156,
    rating: 4.7,
    lastModified: "2024-01-12",
    status: "Published",
  },
  {
    id: 4,
    name: "HR Analytics",
    widgets: 6,
    category: "HR",
    uses: 98,
    rating: 4.3,
    lastModified: "2024-01-10",
    status: "Draft",
  },
  {
    id: 5,
    name: "Finance Overview",
    widgets: 10,
    category: "Finance",
    uses: 342,
    rating: 4.9,
    lastModified: "2024-01-08",
    status: "Published",
  },
]

export function DashboardTemplatesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTemplates = mockDashboardTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    return status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Dashboard Templates</CardTitle>
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
              placeholder="Search dashboard templates..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Widgets</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Uses</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Rating</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Modified</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((template) => (
                <tr key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{template.name}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {template.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{template.widgets}</td>
                  <td className="py-3 px-4 text-gray-600">{template.uses}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium text-gray-900">{template.rating}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
                      {template.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{template.lastModified}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Copy className="w-4 h-4 text-blue-600" />
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
