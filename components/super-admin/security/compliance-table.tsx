"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Eye, RefreshCw } from "lucide-react"

const mockReports = [
  {
    id: 1,
    name: "GDPR Compliance Report",
    standard: "GDPR",
    status: "Compliant",
    score: 98,
    lastAudit: "2024-01-15",
    nextAudit: "2024-04-15",
    findings: 2,
  },
  {
    id: 2,
    name: "SOC 2 Type II Report",
    standard: "SOC 2",
    status: "Compliant",
    score: 95,
    lastAudit: "2024-01-10",
    nextAudit: "2024-07-10",
    findings: 5,
  },
  {
    id: 3,
    name: "ISO 27001 Compliance",
    standard: "ISO 27001",
    status: "In Progress",
    score: 87,
    lastAudit: "2024-01-08",
    nextAudit: "2024-03-08",
    findings: 12,
  },
  {
    id: 4,
    name: "HIPAA Compliance Report",
    standard: "HIPAA",
    status: "Compliant",
    score: 92,
    lastAudit: "2024-01-05",
    nextAudit: "2024-04-05",
    findings: 8,
  },
  {
    id: 5,
    name: "PCI DSS Assessment",
    standard: "PCI DSS",
    status: "Action Required",
    score: 78,
    lastAudit: "2024-01-03",
    nextAudit: "2024-02-03",
    findings: 18,
  },
]

export function ComplianceTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredReports = mockReports.filter(
    (report) =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.standard.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Compliant":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Action Required":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 75) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Compliance Reports</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Run Audit
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search compliance reports..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Report Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Standard</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Score</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Findings</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Audit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Next Audit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{report.name}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {report.standard}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-bold ${getScoreColor(report.score)}`}>{report.score}%</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{report.findings}</td>
                  <td className="py-3 px-4 text-gray-600">{report.lastAudit}</td>
                  <td className="py-3 px-4 text-gray-600">{report.nextAudit}</td>
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
