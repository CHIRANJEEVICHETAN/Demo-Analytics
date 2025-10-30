"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const menuUsageData = [
  { name: "Dashboard", clicks: 4500, users: 2400, percentage: 18 },
  { name: "Company Mgmt", clicks: 3200, users: 1398, percentage: 13 },
  { name: "License Mgmt", clicks: 2800, users: 1200, percentage: 11 },
  { name: "System Config", clicks: 2200, users: 980, percentage: 9 },
  { name: "Roles & Perms", clicks: 2290, users: 1200, percentage: 9 },
  { name: "Monitoring", clicks: 2000, users: 920, percentage: 8 },
  { name: "Reports", clicks: 1800, users: 750, percentage: 7 },
  { name: "Others", clicks: 3188, users: 1500, percentage: 25 },
]

export function MenuUsageTable() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <CardTitle>Menu Usage Analytics</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={menuUsageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="clicks" fill="#3b82f6" name="Clicks" />
              <Bar dataKey="users" fill="#10b981" name="Unique Users" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Menu Item</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Total Clicks</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Unique Users</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Usage %</th>
              </tr>
            </thead>
            <tbody>
              {menuUsageData.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.name}</td>
                  <td className="py-3 px-4 text-gray-600">{item.clicks.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{item.users.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
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
