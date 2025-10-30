"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus, Eye } from "lucide-react"

const mockLanguages = [
  {
    id: 1,
    code: "en",
    name: "English",
    nativeName: "English",
    status: "Active",
    translations: 1250,
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    status: "Active",
    translations: 1248,
    lastUpdated: "2024-01-14",
  },
  {
    id: 3,
    code: "fr",
    name: "French",
    nativeName: "Français",
    status: "Active",
    translations: 1245,
    lastUpdated: "2024-01-13",
  },
  {
    id: 4,
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    status: "Active",
    translations: 1240,
    lastUpdated: "2024-01-12",
  },
  {
    id: 5,
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    status: "Pending",
    translations: 856,
    lastUpdated: "2024-01-10",
  },
  {
    id: 6,
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    status: "In Progress",
    translations: 1100,
    lastUpdated: "2024-01-11",
  },
]

export function LanguagesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])

  const filteredLanguages = mockLanguages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Languages</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Language
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search languages..."
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
                <th className="text-left py-3 px-4 font-medium text-gray-700">Language</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Code</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Translations</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Updated</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLanguages.map((lang) => (
                <tr key={lang.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{lang.name}</div>
                      <div className="text-sm text-gray-500">{lang.nativeName}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{lang.code.toUpperCase()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(lang.status)}`}>
                      {lang.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{lang.translations}</td>
                  <td className="py-3 px-4 text-gray-600">{lang.lastUpdated}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
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
