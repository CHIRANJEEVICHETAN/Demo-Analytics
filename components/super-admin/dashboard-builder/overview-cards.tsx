"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Zap, Users, TrendingUp } from "lucide-react"

export function DashboardBuilderOverviewCards() {
  const cards = [
    {
      title: "Total Dashboards",
      value: "28",
      icon: Layout,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Dashboards",
      value: "24",
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Shared With Users",
      value: "456",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Performance Score",
      value: "9.2/10",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">{card.title}</CardTitle>
                <div className={`${card.bgColor} p-2 rounded-lg`}>
                  <Icon className={`${card.color} w-5 h-5`} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{card.value}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
