"use client"

import { useState } from "react"
import { NotificationTemplates } from "@/components/super-admin/notifications/notification-templates"
import { NotificationSettings } from "@/components/super-admin/notifications/notification-settings"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("templates")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
        <p className="text-gray-600 mt-1">Manage notification templates and global settings</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("templates")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "templates"
              ? "border-red-500 text-red-500"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "settings"
              ? "border-red-500 text-red-500"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Settings
        </button>
      </div>

      {/* Content */}
      {activeTab === "templates" && <NotificationTemplates />}
      {activeTab === "settings" && <NotificationSettings />}
    </div>
  )
}
