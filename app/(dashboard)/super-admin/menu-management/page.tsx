"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MenuOverviewCards } from "@/components/super-admin/menu-management/overview-cards"
import { MenuTree } from "@/components/super-admin/menu-management/menu-tree"
import { MenuTable } from "@/components/super-admin/menu-management/menu-table"

export default function MenuManagementPage() {
  const [viewMode, setViewMode] = useState("tree")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Menu Management</h2>
          <p className="text-gray-600 mt-1">Configure dynamic menu structures and role-based visibility</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import Menu Structure</Button>
          <Button variant="outline">Export Configuration</Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white">+ Add Menu Item</Button>
        </div>
      </div>

      {/* Overview Cards */}
      <MenuOverviewCards />

      {/* View Mode Toggle */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setViewMode("tree")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            viewMode === "tree" ? "border-red-500 text-red-500" : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Tree View
        </button>
        <button
          onClick={() => setViewMode("table")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            viewMode === "table"
              ? "border-red-500 text-red-500"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Table View
        </button>
      </div>

      {/* Content */}
      {viewMode === "tree" && <MenuTree />}
      {viewMode === "table" && <MenuTable />}
    </div>
  )
}
