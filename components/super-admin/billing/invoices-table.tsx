"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Eye, Send } from "lucide-react"

const mockInvoices = [
  {
    id: "INV-2024-001",
    company: "Tech Corp",
    amount: "$999.00",
    status: "Paid",
    dueDate: "2024-01-15",
    paidDate: "2024-01-10",
    plan: "Enterprise",
  },
  {
    id: "INV-2024-002",
    company: "Digital Solutions",
    amount: "$499.00",
    status: "Paid",
    dueDate: "2024-01-20",
    paidDate: "2024-01-18",
    plan: "Professional",
  },
  {
    id: "INV-2024-003",
    company: "StartUp Inc",
    amount: "$99.00",
    status: "Pending",
    dueDate: "2024-02-01",
    paidDate: null,
    plan: "Basic",
  },
  {
    id: "INV-2024-004",
    company: "Global Industries",
    amount: "$999.00",
    status: "Overdue",
    dueDate: "2024-01-05",
    paidDate: null,
    plan: "Enterprise",
  },
  {
    id: "INV-2024-005",
    company: "Innovation Labs",
    amount: "$499.00",
    status: "Paid",
    dueDate: "2024-01-25",
    paidDate: "2024-01-22",
    plan: "Professional",
  },
]

export function InvoicesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  const filteredInvoices = mockInvoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !filterStatus || invoice.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Invoices</CardTitle>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search invoices..."
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
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Invoice ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Plan</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Due Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Paid Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{invoice.id}</td>
                  <td className="py-3 px-4 text-gray-600">{invoice.company}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {invoice.plan}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900">{invoice.amount}</td>
                  <td className="py-3 px-4 text-gray-600">{invoice.dueDate}</td>
                  <td className="py-3 px-4 text-gray-600">{invoice.paidDate || "-"}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
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
                      {invoice.status === "Overdue" && (
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Send className="w-4 h-4 text-orange-600" />
                        </button>
                      )}
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
