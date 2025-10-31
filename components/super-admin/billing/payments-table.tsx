"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, CreditCard, Eye, Download } from "lucide-react"

const mockPayments = [
  {
    id: "PAY-2024-001",
    company: "Tech Corp",
    amount: "$999.00",
    method: "Credit Card",
    cardType: "Visa",
    lastFour: "4242",
    date: "2024-01-10",
    status: "Success",
  },
  {
    id: "PAY-2024-002",
    company: "Digital Solutions",
    amount: "$499.00",
    method: "Credit Card",
    cardType: "Mastercard",
    lastFour: "5555",
    date: "2024-01-18",
    status: "Success",
  },
  {
    id: "PAY-2024-003",
    company: "StartUp Inc",
    amount: "$99.00",
    method: "Bank Transfer",
    cardType: null,
    lastFour: null,
    date: "2024-01-20",
    status: "Pending",
  },
  {
    id: "PAY-2024-004",
    company: "Global Industries",
    amount: "$999.00",
    method: "Credit Card",
    cardType: "Amex",
    lastFour: "3782",
    date: "2024-01-15",
    status: "Failed",
  },
  {
    id: "PAY-2024-005",
    company: "Innovation Labs",
    amount: "$499.00",
    method: "Credit Card",
    cardType: "Visa",
    lastFour: "4111",
    date: "2024-01-22",
    status: "Success",
  },
]

export function PaymentsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  const filteredPayments = mockPayments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = !filterStatus || payment.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Payment Methods & Transactions</CardTitle>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Transactions
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search payments..."
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
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Payment ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Payment Method</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Card Details</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{payment.id}</td>
                  <td className="py-3 px-4 text-gray-600">{payment.company}</td>
                  <td className="py-3 px-4 font-medium text-gray-900">{payment.amount}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{payment.method}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {payment.cardType ? `${payment.cardType} •••• ${payment.lastFour}` : "N/A"}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{payment.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status}
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
