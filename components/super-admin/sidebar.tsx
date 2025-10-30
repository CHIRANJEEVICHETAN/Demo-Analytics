"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Home,
  Building2,
  CreditCard,
  Settings,
  Shield,
  Menu,
  Globe,
  Zap,
  BarChart3,
  Bell,
  HelpCircle,
  X,
  ChevronDown,
  Lock,
  BookOpen,
  DollarSign,
  PieChart,
  Layout,
} from "lucide-react"

interface MenuItem {
  icon: React.ComponentType<{ size: number }>
  label: string
  href?: string
  section: string
  submenu?: Array<{
    label: string
    href: string
  }>
}

const menuItems: MenuItem[] = [
  { icon: Home, label: "Dashboard", href: "/super-admin", section: "dashboard" },
  { icon: Building2, label: "Company Management", href: "/super-admin/companies", section: "companies" },
  { icon: CreditCard, label: "License Management", href: "/super-admin/licenses", section: "licenses" },
  { icon: Settings, label: "System Configuration", href: "/super-admin/system-config", section: "config" },
  { icon: Shield, label: "Roles & Permissions", href: "/super-admin/roles", section: "roles" },
  { icon: Menu, label: "Menu Management", href: "/super-admin/menu-management", section: "menu" },
  { icon: BarChart3, label: "Monitoring & Logs", href: "/super-admin/monitoring", section: "monitoring" },
  { icon: Bell, label: "Notifications", href: "/super-admin/notifications", section: "notifications" },
  { icon: Globe, label: "Languages", href: "/super-admin/languages", section: "languages" },
  { icon: Zap, label: "Device Management", href: "/super-admin/devices", section: "devices" },
  {
    icon: Lock,
    label: "Security & Compliance",
    section: "security",
    submenu: [
      { label: "Security Policies", href: "/super-admin/security/policies" },
      { label: "Compliance Reports", href: "/super-admin/security/compliance" },
      { label: "Audit Logs", href: "/super-admin/security/audit" },
    ],
  },
  {
    icon: BookOpen,
    label: "Template Library",
    section: "templates",
    submenu: [
      { label: "Email Templates", href: "/super-admin/templates/email" },
      { label: "Report Templates", href: "/super-admin/templates/reports" },
      { label: "Dashboard Templates", href: "/super-admin/templates/dashboards" },
    ],
  },
  {
    icon: DollarSign,
    label: "Billing & Subscriptions",
    section: "billing",
    submenu: [
      { label: "Subscription Plans", href: "/super-admin/billing/plans" },
      { label: "Invoices", href: "/super-admin/billing/invoices" },
      { label: "Payment Methods", href: "/super-admin/billing/payments" },
    ],
  },
  {
    icon: PieChart,
    label: "Menu Analytics",
    section: "menu-analytics",
    submenu: [
      { label: "Usage Statistics", href: "/super-admin/analytics/usage" },
      { label: "Popular Menus", href: "/super-admin/analytics/popular" },
      { label: "User Behavior", href: "/super-admin/analytics/behavior" },
    ],
  },
  {
    icon: Layout,
    label: "Dashboard Builder",
    section: "dashboard-builder",
    submenu: [
      { label: "Create Dashboard", href: "/super-admin/builder/create" },
      { label: "Manage Dashboards", href: "/super-admin/builder/manage" },
      { label: "Widget Library", href: "/super-admin/builder/widgets" },
    ],
  },
  { icon: BarChart3, label: "Reports & Analytics", href: "/super-admin/reports", section: "reports" },
  { icon: HelpCircle, label: "Support & Feedback", href: "/super-admin/support", section: "support" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const isMenuActive = (item: MenuItem) => {
    if (item.href) return pathname === item.href
    if (item.submenu) {
      return item.submenu.some((sub) => pathname === sub.href)
    }
    return false
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo & User Profile */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EA</span>
                </div>
                <span className="font-bold text-lg text-gray-900">Eagle Analytics</span>
              </div>
              <button onClick={() => setOpen(false)} className="lg:hidden text-gray-600 hover:text-gray-900">
                <X size={20} />
              </button>
            </div>
            {/* User Profile Section */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Super Admin</p>
                <p className="text-xs text-gray-500 truncate">ID-150001</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = isMenuActive(item)
              const hasSubmenu = item.submenu && item.submenu.length > 0
              const isExpanded = expandedMenu === item.section

              return (
                <div key={item.section}>
                  {hasSubmenu ? (
                    <button
                      onClick={() => setExpandedMenu(isExpanded ? null : item.section)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                        isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                        isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Submenu */}
                  {hasSubmenu && isExpanded && (
                    <div className="mt-1 ml-4 space-y-1 border-l border-gray-200 pl-3">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          onClick={() => setOpen(false)}
                          className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            pathname === subitem.href
                              ? "bg-red-50 text-red-600 font-medium"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="text-xs text-gray-600 space-y-1">
              <p className="font-semibold">v2.2.0</p>
              <p>Status: Healthy</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed lg:hidden bottom-6 right-6 z-40 p-3 bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <Menu size={24} />
      </button>
    </>
  )
}
