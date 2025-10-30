"use client"

import type React from "react"

import { ArrowUp, ArrowDown } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  secondaryMetric?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  icon: React.ReactNode
  color: string
  actionButton?: {
    label: string
    onClick: () => void
  }
}

export function KPICard({ title, value, secondaryMetric, trend, icon, color, actionButton }: KPICardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
        {trend && (
          <div
            className={`flex items-center gap-1 text-sm font-semibold ${trend.isPositive ? "text-green-600" : "text-red-600"}`}
          >
            {trend.isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {trend.value}%
          </div>
        )}
      </div>

      <h3 className="text-gray-600 text-sm font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>

      {secondaryMetric && <p className="text-sm text-gray-500 mb-4">{secondaryMetric}</p>}

      {actionButton && (
        <button onClick={actionButton.onClick} className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-2">
          {actionButton.label} →
        </button>
      )}
    </div>
  )
}
