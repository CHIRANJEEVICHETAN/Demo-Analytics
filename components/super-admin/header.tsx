"use client"

import { Search, Grid3x3, Bell, Settings, Globe, Moon, User, Calendar } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isDark, setIsDark] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search in Eagle Analytics"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Grid View">
            <Grid3x3 size={20} />
          </button>
          <button
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative"
            title="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Settings">
            <Settings size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Language">
            <Globe size={20} />
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Theme"
          >
            <Moon size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Schedule">
            <Calendar size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Profile">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
