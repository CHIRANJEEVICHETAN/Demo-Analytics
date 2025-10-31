"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, PieChart, LineChart, TrendingUp, Users, DollarSign, Activity, Target } from "lucide-react"

const widgetCategories = [
  {
    name: "Charts & Graphs",
    widgets: [
      { id: 1, name: "Bar Chart", icon: BarChart3, description: "Display data in vertical bars", color: "bg-blue-50" },
      { id: 2, name: "Pie Chart", icon: PieChart, description: "Show proportions in a circle", color: "bg-green-50" },
      { id: 3, name: "Line Chart", icon: LineChart, description: "Track trends over time", color: "bg-purple-50" },
      { id: 4, name: "Area Chart", icon: TrendingUp, description: "Show cumulative values", color: "bg-orange-50" },
    ],
  },
  {
    name: "KPI Cards",
    widgets: [
      { id: 5, name: "User Count", icon: Users, description: "Display total user count", color: "bg-blue-50" },
      { id: 6, name: "Revenue", icon: DollarSign, description: "Show revenue metrics", color: "bg-green-50" },
      { id: 7, name: "Activity", icon: Activity, description: "Track user activity", color: "bg-purple-50" },
      { id: 8, name: "Goals", icon: Target, description: "Display goal progress", color: "bg-orange-50" },
    ],
  },
]

export function WidgetLibrary() {
  return (
    <div className="space-y-6">
      {widgetCategories.map((category) => (
        <Card key={category.name} className="border-0 shadow-sm">
          <CardHeader className="pb-4 border-b">
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.widgets.map((widget) => {
                const Icon = widget.icon
                return (
                  <div
                    key={widget.id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className={`${widget.color} p-3 rounded-lg inline-flex mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{widget.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{widget.description}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      Add Widget
                    </Button>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4 border-b">
          <CardTitle>Widget Usage Statistics</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Widget Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Used In</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Popularity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">Bar Chart</td>
                  <td className="py-3 px-4 text-gray-600">Charts & Graphs</td>
                  <td className="py-3 px-4 text-gray-600">24 Dashboards</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">User Count</td>
                  <td className="py-3 px-4 text-gray-600">KPI Cards</td>
                  <td className="py-3 px-4 text-gray-600">28 Dashboards</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">Line Chart</td>
                  <td className="py-3 px-4 text-gray-600">Charts & Graphs</td>
                  <td className="py-3 px-4 text-gray-600">18 Dashboards</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
