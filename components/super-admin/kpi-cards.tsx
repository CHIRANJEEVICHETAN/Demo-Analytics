"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity, Users, BarChart3 } from "lucide-react"

const kpiData = [
  {
    label: "Sales Revenue",
    value: "$145M",
    change: "+12.5%",
    positive: true,
    icon: Activity,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    label: "Ads Revenue",
    value: "$145M",
    change: "+8.2%",
    positive: true,
    icon: TrendingUp,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    label: "Impressions",
    value: "47,859",
    change: "+39.7%",
    positive: true,
    icon: BarChart3,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    label: "Clicks",
    value: "15,487",
    change: "+4.8%",
    positive: true,
    icon: Users,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon
        return (
          <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">{kpi.label}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{kpi.value}</h3>
                  <div className="flex items-center gap-1">
                    {kpi.positive ? (
                      <TrendingUp size={16} className="text-green-500" />
                    ) : (
                      <TrendingDown size={16} className="text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${kpi.positive ? "text-green-500" : "text-red-500"}`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                  <Icon size={24} className={kpi.color} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
