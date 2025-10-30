"use client"

import { DevicesOverviewCards } from "@/components/super-admin/devices/overview-cards"
import { DevicesTable } from "@/components/super-admin/devices/devices-table"

export default function DevicesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Device & IoT Management</h2>
        <p className="text-gray-600 mt-1">Manage connected devices and IoT infrastructure</p>
      </div>

      <DevicesOverviewCards />
      <DevicesTable />
    </div>
  )
}
