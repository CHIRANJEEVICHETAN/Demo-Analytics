"use client"

import { useState } from "react"
import { GeneralSettings } from "@/components/super-admin/system-config/general-settings"
import { SecuritySettings } from "@/components/super-admin/system-config/security-settings"

export default function SystemConfigPage() {
  const [activeTab, setActiveTab] = useState("general")

  const tabs = [
    { id: "general", label: "General Settings" },
    { id: "email", label: "Email Configuration" },
    { id: "sms", label: "SMS & WhatsApp" },
    { id: "storage", label: "Storage & Backup" },
    { id: "security", label: "Security" },
    { id: "integration", label: "Integration" },
    { id: "performance", label: "Performance" },
    { id: "notifications", label: "Notifications" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">System Configuration</h2>
        <p className="text-gray-600 mt-1">Manage global platform settings and configurations</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "border-red-500 text-red-500"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeTab === "general" && <GeneralSettings />}
        {activeTab === "email" && (
          <div className="text-center py-12 text-gray-600">
            <p>Email Configuration coming soon...</p>
          </div>
        )}
        {activeTab === "sms" && (
          <div className="text-center py-12 text-gray-600">
            <p>SMS & WhatsApp Configuration coming soon...</p>
          </div>
        )}
        {activeTab === "storage" && (
          <div className="text-center py-12 text-gray-600">
            <p>Storage & Backup Configuration coming soon...</p>
          </div>
        )}
        {activeTab === "security" && <SecuritySettings />}
        {activeTab === "integration" && (
          <div className="text-center py-12 text-gray-600">
            <p>Integration Settings coming soon...</p>
          </div>
        )}
        {activeTab === "performance" && (
          <div className="text-center py-12 text-gray-600">
            <p>Performance Optimization coming soon...</p>
          </div>
        )}
        {activeTab === "notifications" && (
          <div className="text-center py-12 text-gray-600">
            <p>Notification Settings coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}
