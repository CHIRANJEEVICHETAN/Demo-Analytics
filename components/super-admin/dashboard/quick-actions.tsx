"use client"

import { Plus, FileText, Bell, HardDrive, CheckSquare, Settings } from "lucide-react"

const actions = [
  {
    icon: Plus,
    label: "Onboard New Company",
    description: "Register a new company",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    label: "Generate Report",
    description: "Create system report",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Bell,
    label: "Broadcast Notification",
    description: "Send system notification",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: HardDrive,
    label: "Backup Database",
    description: "Manual backup",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CheckSquare,
    label: "Review Approvals",
    description: "Pending items",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Settings,
    label: "System Settings",
    description: "Configure system",
    color: "bg-indigo-100 text-indigo-600",
  },
]

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <button
              key={index}
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-left group"
            >
              <div className={`p-3 rounded-lg ${action.color} w-fit mb-2 group-hover:scale-110 transition-transform`}>
                <Icon size={20} />
              </div>
              <p className="font-semibold text-gray-900 text-sm">{action.label}</p>
              <p className="text-xs text-gray-500 mt-1">{action.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
