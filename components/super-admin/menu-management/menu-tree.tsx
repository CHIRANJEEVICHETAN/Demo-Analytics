"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight, Edit, Trash2, Plus } from "lucide-react"
import { useState } from "react"

export function MenuTree() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["dashboard", "settings"])

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: "📊",
      children: [
        { id: "dashboard-overview", name: "Overview", icon: "📈" },
        { id: "dashboard-analytics", name: "Analytics", icon: "📉" },
      ],
    },
    {
      id: "production",
      name: "Production",
      icon: "🏭",
      children: [
        { id: "oee-dashboard", name: "OEE Dashboard", icon: "⚙️" },
        { id: "production-monitoring", name: "Production Monitoring", icon: "📡" },
      ],
    },
    {
      id: "energy",
      name: "Energy",
      icon: "⚡",
      children: [
        { id: "plant-overview", name: "Plant Overview", icon: "🏢" },
        { id: "machine-consumption", name: "Machine-wise Consumption", icon: "⚙️" },
      ],
    },
    {
      id: "reports",
      name: "Reports",
      icon: "📄",
    },
    {
      id: "settings",
      name: "Settings",
      icon: "⚙️",
      children: [
        { id: "company-profile", name: "Company Profile", icon: "🏢" },
        { id: "user-management", name: "User Management", icon: "👥" },
        { id: "system-preferences", name: "System Preferences", icon: "⚙️" },
      ],
    },
  ]

  const renderMenuItem = (item: any, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.id)

    return (
      <div key={item.id}>
        <div
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded group"
          style={{ paddingLeft: `${level * 20 + 16}px` }}
        >
          {hasChildren && (
            <button onClick={() => toggleExpand(item.id)} className="p-0 hover:bg-gray-200 rounded">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </button>
          )}
          {!hasChildren && <div className="w-4" />}
          <span className="text-lg">{item.icon}</span>
          <span className="flex-1 text-sm font-medium text-gray-700">{item.name}</span>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-gray-200 rounded" title="Edit">
              <Edit className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded" title="Delete">
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
            {hasChildren && (
              <button className="p-1 hover:bg-gray-200 rounded" title="Add Sub-menu">
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            )}
          </div>
        </div>
        {hasChildren && isExpanded && <div>{item.children.map((child: any) => renderMenuItem(child, level + 1))}</div>}
      </div>
    )
  }

  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle>Menu Structure (Tree View)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border border-gray-200 rounded-lg bg-white">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </CardContent>
    </Card>
  )
}
