"use client"

import { DashboardHeader } from "@/components/super-admin/dashboard-header"
import { KPICard } from "@/components/super-admin/dashboard/kpi-card"
import { TenantActivityTable } from "@/components/super-admin/dashboard/tenant-activity-table"
import { SystemHealthChart } from "@/components/super-admin/dashboard/system-health-chart"
import { LicenseDistribution } from "@/components/super-admin/dashboard/license-distribution"
import { CriticalAlerts } from "@/components/super-admin/dashboard/critical-alerts"
import { QuickActions } from "@/components/super-admin/dashboard/quick-actions"
import { Building2, Lock, Activity, Users } from "lucide-react"

export default function SuperAdminDashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Companies"
          value="47"
          secondaryMetric="+3 Pending Approvals"
          trend={{ value: 8.5, isPositive: true }}
          icon={<Building2 size={24} className="text-white" />}
          color="bg-blue-600"
          actionButton={{ label: "View All", onClick: () => {} }}
        />
        <KPICard
          title="Active Licenses"
          value="132"
          secondaryMetric="8 Expiring Soon • 5 Inactive"
          trend={{ value: 12.3, isPositive: true }}
          icon={<Lock size={24} className="text-white" />}
          color="bg-green-600"
          actionButton={{ label: "Manage", onClick: () => {} }}
        />
        <KPICard
          title="System Health"
          value="98.5%"
          secondaryMetric="99.9% Uptime • 142ms Avg Response"
          trend={{ value: 2.1, isPositive: true }}
          icon={<Activity size={24} className="text-white" />}
          color="bg-purple-600"
          actionButton={{ label: "View Logs", onClick: () => {} }}
        />
        <KPICard
          title="Total Users"
          value="2,847"
          secondaryMetric="1,234 Active Today • +87 New This Month"
          trend={{ value: 12.3, isPositive: true }}
          icon={<Users size={24} className="text-white" />}
          color="bg-orange-600"
          actionButton={{ label: "Manage", onClick: () => {} }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Tenant Activity Table (60% width) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenant Activity Overview</h3>
            <TenantActivityTable />
          </div>
        </div>

        {/* Right Column: License Distribution (40% width) */}
        <div>
          <LicenseDistribution />
        </div>
      </div>

      <SystemHealthChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        <CriticalAlerts />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Platform Statistics Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600 mb-2">Total API Calls Today</p>
            <p className="text-2xl font-bold text-gray-900">1.2M</p>
            <p className="text-xs text-green-600 mt-2">+5.3% from yesterday</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600 mb-2">Database Size</p>
            <p className="text-2xl font-bold text-gray-900">478 GB</p>
            <p className="text-xs text-orange-600 mt-2">↑ 12 GB this week</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600 mb-2">Total IoT Devices</p>
            <p className="text-2xl font-bold text-gray-900">4,567</p>
            <p className="text-xs text-blue-600 mt-2">Across all companies</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600 mb-2">Avg Response Time</p>
            <p className="text-2xl font-bold text-gray-900">142ms</p>
            <p className="text-xs text-green-600 mt-2">↓ 8ms improvement</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600 mb-2">Storage Used</p>
            <p className="text-2xl font-bold text-gray-900">2.3 TB</p>
            <p className="text-xs text-gray-600 mt-2">46% of 5 TB</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600 mb-2">Active Sessions</p>
            <p className="text-2xl font-bold text-gray-900">847</p>
            <p className="text-xs text-blue-600 mt-2">Concurrent users</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming License Renewals (Next 30 Days)</h3>
        <div className="space-y-3">
          {[
            { company: "ABC Manufacturing", type: "Enterprise", days: 15, autoRenewal: true },
            { company: "XYZ Electronics", type: "Premium", days: 22, autoRenewal: false },
            { company: "Tech Solutions", type: "Standard", days: 8, autoRenewal: true },
            { company: "Global Industries", type: "Basic", days: 28, autoRenewal: false },
            { company: "Innovation Labs", type: "Enterprise", days: 5, autoRenewal: true },
          ].map((renewal, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{renewal.company}</p>
                <p className="text-sm text-gray-600">{renewal.type} License</p>
              </div>
              <div className="text-center mx-4">
                <p
                  className={`text-lg font-bold ${renewal.days < 10 ? "text-red-600" : renewal.days < 20 ? "text-yellow-600" : "text-green-600"}`}
                >
                  {renewal.days} days
                </p>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={renewal.autoRenewal} readOnly className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Auto-renew</span>
                </label>
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium">Renew Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
