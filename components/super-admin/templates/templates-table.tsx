"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Edit2, Trash2, Plus, Eye } from "lucide-react"

const mockTemplates = [
  {
    id: 1,
    name: "Super Admin Menu",
    category: "Menu",
    type: "Pre-built",
    downloads: 245,
    lastUpdated: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Company Admin Menu",
    category: "Menu",
    type: "Pre-built",
    downloads: 189,
    lastUpdated: "2024-01-14",
    status: "Active",
  },
  {
    id: 3,
    name: "Manager Dashboard",
    category: "Dashboard",
    type: "Custom",
    downloads: 156,
    lastUpdated: "2024-01-13",
    status: "Active",
  },
  {
    id: 4,
    name: "Report Template",
    category: "Report",
    type: "Custom",
    downloads: 98,
    lastUpdated: "2024-01-12",
    status: "Active",
  },
  {
    id: 5,
    name: "Email Notification",
    category: "Notification",
    type: "Pre-built",
    downloads: 342,
    lastUpdated: "2024-01-11",
    status: "Active",
  },
]

export function TemplatesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTemplates = mockTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Template Library</CardTitle>
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
              placeholder="Search templates..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Downloads</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Updated</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((template) => (
                <tr key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{template.name}</td>
                  <td className="py-3 px-4 text-gray-600">{template.category}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {template.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{template.downloads}</td>
                  <td className="py-3 px-4 text-gray-600">{template.lastUpdated}</td>
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
