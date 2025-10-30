"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Eye } from "lucide-react"

const mockSubscriptions = [
  {
    id: 1,
    company: "Tech Corp",
    plan: "Enterprise",
    status: "Active",
    amount: "$999/mo",
    nextBilling: "2024-02-15",
    customers: 45,
  },
  {
    id: 2,
    company: "Digital Solutions",
    plan: "Professional",
    status: "Active",
    amount: "$499/mo",
    nextBilling: "2024-02-10",
    customers: 28,
  },
  {
    id: 3,
    company: "StartUp Inc",
    plan: "Starter",
    status: "Active",
    amount: "$99/mo",
    nextBilling: "2024-02-05",
    customers: 5,
  },
  {
    id: 4,
    company: "Global Industries",
    plan: "Enterprise",
    status: "Overdue",
    amount: "$999/mo",
    nextBilling: "2024-01-15",
    customers: 67,
  },
  {
    id: 5,
    company: "Innovation Labs",
    plan: "Professional",
    status: "Active",
    amount: "$499/mo",
    nextBilling: "2024-02-20",
    customers: 32,
  },
]

export function SubscriptionsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSubscriptions = mockSubscriptions.filter(
    (sub) =>
      sub.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.plan.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
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
          <CardTitle>Active Subscriptions</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Subscription
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search subscriptions..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Plan</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Next Billing</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Customers</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscriptions.map((sub) => (
                <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{sub.company}</td>
                  <td className="py-3 px-4 text-gray-600">{sub.plan}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(sub.status)}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900">{sub.amount}</td>
                  <td className="py-3 px-4 text-gray-600">{sub.nextBilling}</td>
                  <td className="py-3 px-4 text-gray-600">{sub.customers}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
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
