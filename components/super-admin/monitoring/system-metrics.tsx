"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function SystemMetrics() {
  const data = [
    { time: "00:00", cpu: 45, memory: 52, disk: 38 },
    { time: "04:00", cpu: 38, memory: 48, disk: 40 },
    { time: "08:00", cpu: 62, memory: 65, disk: 42 },
    { time: "12:00", cpu: 75, memory: 72, disk: 45 },
    { time: "16:00", cpu: 68, memory: 68, disk: 48 },
    { time: "20:00", cpu: 55, memory: 60, disk: 50 },
    { time: "24:00", cpu: 48, memory: 54, disk: 52 },
  ]

  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle>System Resource Utilization (Last 24 Hours)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="cpu" stroke="#ef4444" strokeWidth={2} name="CPU %" />
            <Line type="monotone" dataKey="memory" stroke="#3b82f6" strokeWidth={2} name="Memory %" />
            <Line type="monotone" dataKey="disk" stroke="#f59e0b" strokeWidth={2} name="Disk %" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
