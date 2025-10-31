"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const behaviorData = [
  { hour: "00:00", users: 120, actions: 450 },
  { hour: "03:00", users: 80, actions: 280 },
  { hour: "06:00", users: 150, actions: 520 },
  { hour: "09:00", users: 450, actions: 1800 },
  { hour: "12:00", users: 620, actions: 2500 },
  { hour: "15:00", users: 580, actions: 2300 },
  { hour: "18:00", users: 420, actions: 1650 },
  { hour: "21:00", users: 280, actions: 980 },
]

const pathFlowData = [
  { path: "Login → Dashboard → Reports", count: 1245, percentage: 32 },
  { path: "Dashboard → Company Management → License", count: 980, percentage: 25 },
  { path: "Login → Settings → Profile", count: 856, percentage: 22 },
  { path: "Dashboard → Analytics → Export", count: 520, percentage: 13 },
  { path: "Reports → Download → Dashboard", count: 312, percentage: 8 },
]

const sessionData = [
  { duration: "< 1 min", sessions: 245, percentage: 12 },
  { duration: "1-5 min", sessions: 856, percentage: 42 },
  { duration: "5-15 min", sessions: 520, percentage: 26 },
  { duration: "15-30 min", sessions: 280, percentage: 14 },
  { duration: "> 30 min", sessions: 125, percentage: 6 },
]

export function BehaviorCharts() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4 border-b">
          <CardTitle>User Activity by Time of Day</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={behaviorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Active Users" />
                <Line type="monotone" dataKey="actions" stroke="#10b981" strokeWidth={2} name="Total Actions" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4 border-b">
            <CardTitle>Most Common User Paths</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {pathFlowData.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.path}</span>
                    <span className="text-sm font-bold text-blue-600">{item.count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.percentage * 3}%` }}></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4 border-b">
            <CardTitle>Session Duration Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {sessionData.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.duration}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">{item.sessions.toLocaleString()} sessions</span>
                      <span className="text-sm font-bold text-purple-600">{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${item.percentage * 1.6}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4 border-b">
          <CardTitle>User Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-sm text-gray-600">Return Rate</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">12.5 min</div>
              <div className="text-sm text-gray-600">Avg Session</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.2</div>
              <div className="text-sm text-gray-600">Pages per Session</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">8.3%</div>
              <div className="text-sm text-gray-600">Bounce Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
