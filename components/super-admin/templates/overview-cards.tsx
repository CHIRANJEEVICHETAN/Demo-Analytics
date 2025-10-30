"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Library, Copy, Download, Clock } from "lucide-react"

export function TemplatesOverviewCards() {
  const cards = [
    {
      title: "Total Templates",
      value: "42",
      icon: Library,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Templates",
      value: "38",
      icon: Copy,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Downloaded",
      value: "1,245",
      icon: Download,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Recently Updated",
      value: "5",
      icon: Clock,
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
