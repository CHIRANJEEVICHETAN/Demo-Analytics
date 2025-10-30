"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export function LicenseOverviewCards() {
  const cards = [
    {
      title: "Total Active Licenses",
      value: "132",
      trend: "+8",
      trendPercent: "+6.5%",
      isPositive: true,
      icon: "📜",
    },
    {
      title: "Expiring This Month",
      value: "8",
      trend: "+2",
      trendPercent: "+33%",
      isPositive: false,
      icon: "⏰",
    },
    {
      title: "Revenue This Month",
      value: "$45,230",
      trend: "+$5,230",
      trendPercent: "+13%",
      isPositive: true,
      icon: "💰",
    },
    {
      title: "License Utilization",
      value: "87%",
      trend: "+5%",
      trendPercent: "+6.1%",
      isPositive: true,
      icon: "📊",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <Card key={index} className="border-gray-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">{card.title}</CardTitle>
              <span className="text-2xl">{card.icon}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">{card.value}</div>
              <div className="flex items-center gap-1">
                {card.isPositive ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
                <span className={card.isPositive ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
                  {card.trend} ({card.trendPercent})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
