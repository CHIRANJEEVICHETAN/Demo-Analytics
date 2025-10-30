"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Global Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">Enable In-App Notifications</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <Label className="text-sm font-medium text-gray-700">Enable Email Notifications</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <Label className="text-sm font-medium text-gray-700">Enable SMS Notifications</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <Label className="text-sm font-medium text-gray-700">Enable WhatsApp Notifications</Label>
            <input type="checkbox" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <Label className="text-sm font-medium text-gray-700">Enable Push Notifications</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Notification Types</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">User registration notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">License expiry warnings (15, 30 days before)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">System alerts</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">Failed login attempts</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">Password change confirmations</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">Invoice generation</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">Backup completion/failure</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />
            <Label className="text-sm text-gray-700">Performance degradation alerts</Label>
          </div>
        </CardContent>
      </Card>

      <Button className="bg-red-500 hover:bg-red-600 text-white">Save Changes</Button>
    </div>
  )
}
