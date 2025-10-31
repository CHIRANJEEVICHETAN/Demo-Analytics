"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const usageData = [
  { month: "Jan", activeUsers: 1200, sessions: 4500, pageViews: 18000 },
  { month: "Feb", activeUsers: 1400, sessions: 5200, pageViews: 21000 },
  { month: "Mar", activeUsers: 1600, sessions: 5800, pageViews: 24000 },
  { month: "Apr", activeUsers: 1800, sessions: 6500, pageViews: 27000 },
  { month: "May", activeUsers: 2100, sessions: 7200, pageViews: 31000 },
  { month: "Jun", activeUsers: 2400, sessions: 8000, pageViews: 35000 },
]

const featureUsageData = [
  { feature: "Dashboard", usage: 85, users: 2100 },
  { feature: "Reports", usage: 72, users: 1800 },
  { feature: "Analytics", usage: 68, users: 1650 },
  { feature: "Settings", usage: 45, users: 1100 },
  { feature: "Admin Panel", usage: 38, users: 950 },
  { feature: "API", usage: 25, users: 620 },
]

export function UsageCharts() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4 border-b">
          <CardTitle>User Activity Trends</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usageData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="activeUsers"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                  name="Active Users"
                />
                <Area
                  type="monotone"
                  dataKey="sessions"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorSessions)"
                  name="Sessions"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4 border-b">
          <CardTitle>Feature Usage Statistics</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Feature</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Usage %</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Active Users</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Progress</th>
                </tr>
              </thead>
              <tbody>
                {featureUsageData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.feature}</td>
                    <td className="py-3 px-4 text-gray-600">{item.usage}%</td>
                    <td className="py-3 px-4 text-gray-600">{item.users.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${item.usage}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
