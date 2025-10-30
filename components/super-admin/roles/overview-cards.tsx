"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RolesOverviewCards() {
  const cards = [
    {
      title: "Total Roles Defined",
      value: "12",
      subtitle: "System Roles",
      icon: "👥",
    },
    {
      title: "Active Permission Sets",
      value: "45",
      subtitle: "Permission Groups",
      icon: "🔐",
    },
    {
      title: "Companies Using Custom Roles",
      value: "8",
      subtitle: "Companies",
      icon: "🏢",
    },
    {
      title: "Last Modified",
      value: "2 days ago",
      subtitle: "By Super Admin",
      icon: "📅",
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
            <div className="space-y-1">
              <div className="text-2xl font-bold text-gray-900">{card.value}</div>
              <div className="text-xs text-gray-500">{card.subtitle}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
