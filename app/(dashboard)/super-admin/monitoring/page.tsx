"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SystemMetrics } from "@/components/super-admin/monitoring/system-metrics"
import { SystemLogs } from "@/components/super-admin/monitoring/system-logs"

export default function MonitoringPage() {
  const metrics = [
    { label: "CPU Usage", value: "68%", status: "warning" },
    { label: "Memory Usage", value: "72%", status: "warning" },
    { label: "Disk Usage", value: "52%", status: "normal" },
    { label: "API Response Time", value: "142ms", status: "normal" },
    { label: "Database Connections", value: "245/500", status: "normal" },
    { label: "Active Sessions", value: "847", status: "normal" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Monitoring & Logs</h2>
        <p className="text-gray-600 mt-1">Monitor system performance and view detailed logs</p>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="border-gray-200">
            <CardContent className="pt-6">
              <div className="text-sm text-gray-600">{metric.label}</div>
              <div className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</div>
              <div className={`text-xs mt-2 ${metric.status === "warning" ? "text-yellow-600" : "text-green-600"}`}>
                {metric.status === "warning" ? "⚠️ Warning" : "✓ Normal"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Metrics Chart */}
      <SystemMetrics />

      {/* System Logs */}
      <SystemLogs />
    </div>
  )
}
