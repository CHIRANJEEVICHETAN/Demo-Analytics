"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function PermissionMatrix() {
  const modules = [
    { name: "Dashboard", view: true, create: false, edit: false, delete: false, export: true, configure: true },
    { name: "OEE Module", view: true, create: true, edit: true, delete: false, export: true, configure: false },
    { name: "Energy Module", view: true, create: true, edit: true, delete: false, export: true, configure: false },
    { name: "Machine Management", view: true, create: true, edit: true, delete: true, export: true, configure: true },
    { name: "Production", view: true, create: true, edit: true, delete: false, export: true, configure: false },
    { name: "Quality Inspection", view: true, create: true, edit: true, delete: true, export: true, configure: true },
    { name: "Maintenance", view: true, create: true, edit: true, delete: true, export: true, configure: true },
    { name: "Inventory", view: true, create: false, edit: false, delete: false, export: true, configure: false },
    { name: "HR Management", view: false, create: false, edit: false, delete: false, export: false, configure: false },
    { name: "Reports", view: true, create: true, edit: false, delete: false, export: true, configure: false },
  ]

  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle>Permission Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Module/Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">View</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Create</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Edit</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Delete</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Export</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Configure</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{module.name}</td>
                  <td className="py-3 px-4 text-center">
                    <Checkbox checked={module.view} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Checkbox checked={module.create} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Checkbox checked={module.edit} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Checkbox checked={module.delete} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Checkbox checked={module.export} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Checkbox checked={module.configure} />
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
