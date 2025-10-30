"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      {/* Application Information */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Application Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Application Name</Label>
              <Input defaultValue="Eagle Analytics" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Application Version</Label>
              <Input defaultValue="v2.1.5" disabled className="mt-1 bg-gray-50" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Company Name</Label>
              <Input defaultValue="Eagle Analytics Inc" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Support Email</Label>
              <Input defaultValue="support@eagleanalytics.com" type="email" className="mt-1" />
            </div>
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700">Support Phone</Label>
            <Input defaultValue="+1 (555) 123-4567" className="mt-1" />
          </div>
        </CardContent>
      </Card>

      {/* Default System Settings */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Default System Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Default Timezone</Label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>UTC</option>
                <option>EST</option>
                <option>CST</option>
                <option>PST</option>
              </select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Default Date Format</Label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Default Currency</Label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
                <option>GBP</option>
              </select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Default Language</Label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>German</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Behavior */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">System Behavior</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Session Timeout (minutes)</Label>
              <Input type="number" defaultValue="30" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Login Attempts Limit</Label>
              <Input type="number" defaultValue="5" className="mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Account Lockout Duration (minutes)</Label>
              <Input type="number" defaultValue="30" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Password Reset Expiry (hours)</Label>
              <Input type="number" defaultValue="24" className="mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="bg-red-500 hover:bg-red-600 text-white">Save Changes</Button>
    </div>
  )
}
