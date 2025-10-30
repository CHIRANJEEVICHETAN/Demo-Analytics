"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreVertical, Copy, Eye, Edit, RotateCcw } from "lucide-react"

export function LicensesTable() {
  const [selectedLicenses, setSelectedLicenses] = useState<string[]>([])

  const licenses = [
    {
      id: "LIC-2025-001234",
      company: "Acme Manufacturing",
      type: "Premium",
      key: "EAGL-2025-ABCD-1234-EFGH",
      status: "Active",
      startDate: "2024-01-15",
      expiryDate: "2025-01-15",
      daysRemaining: 45,
      autoRenewal: true,
      features: "8/8",
      price: "$799/month",
    },
    {
      id: "LIC-2025-001235",
      company: "Global Industries",
      type: "Standard",
      key: "EAGL-2025-IJKL-5678-MNOP",
      status: "Expiring Soon",
      startDate: "2024-02-01",
      expiryDate: "2025-02-01",
      daysRemaining: 12,
      autoRenewal: false,
      features: "6/8",
      price: "$299/month",
    },
    {
      id: "LIC-2025-001236",
      company: "Tech Solutions Ltd",
      type: "Basic",
      key: "EAGL-2025-QRST-9012-UVWX",
      status: "Active",
      startDate: "2024-03-10",
      expiryDate: "2025-03-10",
      daysRemaining: 78,
      autoRenewal: true,
      features: "3/8",
      price: "$99/month",
    },
    {
      id: "LIC-2025-001237",
      company: "Smart Factory Inc",
      type: "Enterprise",
      key: "EAGL-2025-YZAB-3456-CDEF",
      status: "Expired",
      startDate: "2023-12-01",
      expiryDate: "2024-12-01",
      daysRemaining: -30,
      autoRenewal: false,
      features: "8/8",
      price: "Custom",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      case "Trial":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getExpiryColor = (daysRemaining: number) => {
    if (daysRemaining < 15) return "text-red-600"
    if (daysRemaining < 30) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <Card className="border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>License List</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Search licenses..." className="w-64" />
            <Button variant="outline">Filter</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">
                  <Checkbox />
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">License ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Company</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">License Key</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Expiry Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Days Left</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Auto-Renewal</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Features</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {licenses.map((license) => (
                <tr key={license.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <Checkbox />
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900">{license.id}</td>
                  <td className="py-3 px-4 text-gray-700">{license.company}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{license.type}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">{license.key}</code>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={getStatusColor(license.status)}>{license.status}</Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{license.expiryDate}</td>
                  <td className={`py-3 px-4 font-medium ${getExpiryColor(license.daysRemaining)}`}>
                    {license.daysRemaining > 0 ? `${license.daysRemaining} days` : "Expired"}
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={license.autoRenewal ? "default" : "outline"}>
                      {license.autoRenewal ? "On" : "Off"}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{license.features}</td>
                  <td className="py-3 px-4 text-gray-700">{license.price}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-gray-100 rounded" title="View">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Edit">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Renew">
                        <RotateCcw className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="More">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">Showing 1 to 4 of 4 results</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-red-500 text-white hover:bg-red-600">
              1
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
