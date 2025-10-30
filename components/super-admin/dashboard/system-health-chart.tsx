"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { time: "00:00", cpu: 45, memory: 52, disk: 38 },
  { time: "04:00", cpu: 52, memory: 48, disk: 40 },
  { time: "08:00", cpu: 68, memory: 61, disk: 45 },
  { time: "12:00", cpu: 75, memory: 72, disk: 52 },
  { time: "16:00", cpu: 82, memory: 78, disk: 58 },
  { time: "20:00", cpu: 65, memory: 68, disk: 50 },
  { time: "24:00", cpu: 48, memory: 55, disk: 42 },
]

export function SystemHealthChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">System Resource Utilization</h3>
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
          <Line type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={2} name="CPU %" />
          <Line type="monotone" dataKey="memory" stroke="#10b981" strokeWidth={2} name="Memory %" />
          <Line type="monotone" dataKey="disk" stroke="#f59e0b" strokeWidth={2} name="Disk %" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
