"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SystemLogs() {
  const logs = [
    {
      id: 1,
      timestamp: "2025-01-15 14:32:45",
      level: "ERROR",
      module: "Database",
      message: "Connection timeout to primary database",
      user: "System",
    },
    {
      id: 2,
      timestamp: "2025-01-15 14:25:12",
      level: "WARNING",
      module: "API",
      message: "High response time detected (2.5s)",
      user: "System",
    },
    {
      id: 3,
      timestamp: "2025-01-15 14:18:33",
      level: "INFO",
      module: "Backup",
      message: "Daily backup completed successfully",
      user: "System",
    },
    {
      id: 4,
      timestamp: "2025-01-15 14:10:22",
      level: "WARNING",
      module: "Storage",
      message: "Storage usage at 85% capacity",
      user: "System",
    },
    {
      id: 5,
      timestamp: "2025-01-15 14:05:11",
      level: "INFO",
      module: "License",
      message: "License expiry reminder sent to 3 companies",
      user: "System",
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "ERROR":
        return "bg-red-100 text-red-800"
      case "WARNING":
        return "bg-yellow-100 text-yellow-800"
      case "INFO":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>System Logs</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Search logs..." className="w-64" />
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Timestamp</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Level</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Module</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Message</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">User</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-mono text-xs">{log.timestamp}</td>
                  <td className="py-3 px-4">
                    <Badge className={getLevelColor(log.level)}>{log.level}</Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{log.module}</td>
                  <td className="py-3 px-4 text-gray-700">{log.message}</td>
                  <td className="py-3 px-4 text-gray-700">{log.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
