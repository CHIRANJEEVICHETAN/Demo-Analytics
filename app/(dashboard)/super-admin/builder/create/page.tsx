"use client"

import { DashboardBuilderOverviewCards } from "@/components/super-admin/dashboard-builder/overview-cards"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Layout } from "lucide-react"

export default function BuilderCreatePage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Dashboard Builder</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Create Dashboard</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Create Dashboard</h1>
        <p className="text-gray-600 mt-1">Start a new dashboard from templates and widgets</p>
      </div>

      <DashboardBuilderOverviewCards />

      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4 border-b">
          <CardTitle>New Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="max-w-2xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Dashboard Name</label>
              <Input placeholder="Enter dashboard name..." className="border-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Describe your dashboard..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Select Template</label>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border-2 border-blue-500 rounded-lg cursor-pointer bg-blue-50">
                  <Layout className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="font-medium text-gray-900">Blank</p>
                  <p className="text-xs text-gray-600">Start from scratch</p>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                  <Layout className="w-8 h-8 text-gray-600 mb-2" />
                  <p className="font-medium text-gray-900">Executive</p>
                  <p className="text-xs text-gray-600">For leadership</p>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                  <Layout className="w-8 h-8 text-gray-600 mb-2" />
                  <p className="font-medium text-gray-900">Analytics</p>
                  <p className="text-xs text-gray-600">Data-focused</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create Dashboard
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
