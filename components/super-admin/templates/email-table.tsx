"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Eye, Copy } from "lucide-react"

const mockEmailTemplates = [
  {
    id: 1,
    name: "Welcome Email",
    subject: "Welcome to Eagle Analytics",
    category: "Onboarding",
    language: "English",
    lastModified: "2024-01-15",
    status: "Active",
    uses: 1245,
  },
  {
    id: 2,
    name: "Password Reset",
    subject: "Reset Your Password",
    category: "Security",
    language: "English",
    lastModified: "2024-01-14",
    status: "Active",
    uses: 856,
  },
  {
    id: 3,
    name: "Invoice Notification",
    subject: "Your Invoice is Ready",
    category: "Billing",
    language: "English",
    lastModified: "2024-01-12",
    status: "Active",
    uses: 542,
  },
  {
    id: 4,
    name: "License Expiry Warning",
    subject: "Your License Expires Soon",
    category: "Notification",
    language: "English",
    lastModified: "2024-01-10",
    status: "Active",
    uses: 234,
  },
  {
    id: 5,
    name: "System Maintenance",
    subject: "Scheduled Maintenance Notice",
    category: "System",
    language: "English",
    lastModified: "2024-01-08",
    status: "Draft",
    uses: 0,
  },
]

export function EmailTemplatesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTemplates = mockEmailTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Email Templates</CardTitle>
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
              placeholder="Search email templates..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Language</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Uses</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Modified</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((template) => (
                <tr key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{template.name}</td>
                  <td className="py-3 px-4 text-gray-600">{template.subject}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {template.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{template.language}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
                      {template.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{template.uses.toLocaleString()}</td>
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
