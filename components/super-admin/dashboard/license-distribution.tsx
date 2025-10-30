"use client"

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Basic", value: 15, color: "#3b82f6" },
  { name: "Standard", value: 45, color: "#10b981" },
  { name: "Premium", value: 38, color: "#f59e0b" },
  { name: "Enterprise", value: 34, color: "#8b5cf6" },
]

export function LicenseDistribution() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">License Distribution by Type</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900">$45,230</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Most Popular</p>
          <p className="text-2xl font-bold text-gray-900">Standard</p>
        </div>
      </div>
    </div>
  )
}
