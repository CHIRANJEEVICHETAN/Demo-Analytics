"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Lock, Unlock } from "lucide-react"

const mockDevices = [
  {
    id: 1,
    deviceId: "DEV-001",
    name: "Admin Laptop",
    type: "Windows",
    owner: "John Doe",
    status: "Active",
    lastSeen: "2024-01-15 10:30",
    verified: true,
  },
  {
    id: 2,
    deviceId: "DEV-002",
    name: "Mobile Device",
    type: "iOS",
    owner: "Jane Smith",
    status: "Active",
    lastSeen: "2024-01-15 09:45",
    verified: true,
  },
  {
    id: 3,
    deviceId: "DEV-003",
    name: "Tablet",
    type: "Android",
    owner: "Mike Johnson",
    status: "Inactive",
    lastSeen: "2024-01-10 14:20",
    verified: true,
  },
  {
    id: 4,
    deviceId: "DEV-004",
    name: "Work PC",
    type: "Windows",
    owner: "Sarah Williams",
    status: "Active",
    lastSeen: "2024-01-15 11:00",
    verified: false,
  },
  {
    id: 5,
    deviceId: "DEV-005",
    name: "MacBook Pro",
    type: "macOS",
    owner: "Tom Brown",
    status: "Active",
    lastSeen: "2024-01-15 08:30",
    verified: true,
  },
]

export function DevicesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDevices = mockDevices.filter(
    (device) =>
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.deviceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.owner.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Registered Devices</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Register Device
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search devices..."
              className="pl-10 border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Device Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Device ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Owner</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Seen</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map((device) => (
                <tr key={device.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{device.name}</td>
                  <td className="py-3 px-4 text-gray-600">{device.deviceId}</td>
                  <td className="py-3 px-4 text-gray-600">{device.type}</td>
                  <td className="py-3 px-4 text-gray-600">{device.owner}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{device.lastSeen}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        {device.verified ? (
                          <Lock className="w-4 h-4 text-green-600" />
                        ) : (
                          <Unlock className="w-4 h-4 text-orange-600" />
                        )}
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
