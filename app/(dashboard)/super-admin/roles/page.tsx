"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RolesOverviewCards } from "@/components/super-admin/roles/overview-cards"
import { RolesTable } from "@/components/super-admin/roles/roles-table"
import { PermissionMatrix } from "@/components/super-admin/roles/permission-matrix"

export default function RolesPage() {
  const [activeTab, setActiveTab] = useState("roles")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Roles & Permissions</h2>
          <p className="text-gray-600 mt-1">Manage role hierarchy and permissions across the platform</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import Role from Template</Button>
          <Button variant="outline">Export Roles</Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white">+ Create New Role</Button>
        </div>
      </div>

      {/* Overview Cards */}
      <RolesOverviewCards />

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("roles")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "roles"
              ? "border-red-500 text-red-500"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          System Roles
        </button>
        <button
          onClick={() => setActiveTab("permissions")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "permissions"
              ? "border-red-500 text-red-500"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Permission Matrix
        </button>
      </div>

      {/* Content */}
      {activeTab === "roles" && <RolesTable />}
      {activeTab === "permissions" && <PermissionMatrix />}
    </div>
  )
}
