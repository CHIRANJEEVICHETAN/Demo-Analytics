"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"

export function SecurityTabs() {
  const [activeTab, setActiveTab] = useState("authentication")

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4 border-b">
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="password">Password Policy</TabsTrigger>
            <TabsTrigger value="session">Session Management</TabsTrigger>
            <TabsTrigger value="encryption">Encryption</TabsTrigger>
          </TabsList>

          <TabsContent value="authentication" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Multi-Factor Authentication (MFA)</h4>
                  <p className="text-sm text-gray-600 mt-1">Require MFA for all users</p>
                </div>
                <Toggle defaultPressed={true} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Force MFA for Super Admin</h4>
                  <p className="text-sm text-gray-600 mt-1">Mandatory for administrative accounts</p>
                </div>
                <Toggle defaultPressed={true} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Email OTP</h4>
                  <p className="text-sm text-gray-600 mt-1">Enable email-based one-time passwords</p>
                </div>
                <Toggle defaultPressed={true} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Authenticator App</h4>
                  <p className="text-sm text-gray-600 mt-1">Support Google Authenticator and Microsoft Authenticator</p>
                </div>
                <Toggle defaultPressed={true} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="password" className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <label className="block text-sm font-medium text-gray-900 mb-2">Minimum Password Length</label>
                <Input type="number" defaultValue="8" className="border-gray-200" />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Require Uppercase</h4>
                </div>
                <Toggle defaultPressed={true} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Require Numbers</h4>
                </div>
                <Toggle defaultPressed={true} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Require Special Characters</h4>
                </div>
                <Toggle defaultPressed={true} />
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <label className="block text-sm font-medium text-gray-900 mb-2">Password Expiry (days)</label>
                <Input type="number" defaultValue="90" className="border-gray-200" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="session" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Allow Concurrent Sessions</h4>
                  <p className="text-sm text-gray-600 mt-1">Allow users to be logged in from multiple devices</p>
                </div>
                <Toggle defaultPressed={false} />
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <label className="block text-sm font-medium text-gray-900 mb-2">Max Concurrent Sessions per User</label>
                <Input type="number" defaultValue="3" className="border-gray-200" />
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <label className="block text-sm font-medium text-gray-900 mb-2">Idle Session Timeout (minutes)</label>
                <Input type="number" defaultValue="30" className="border-gray-200" />
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <label className="block text-sm font-medium text-gray-900 mb-2">Absolute Session Timeout (hours)</label>
                <Input type="number" defaultValue="12" className="border-gray-200" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="encryption" className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-medium text-gray-900">Encryption at Rest</h4>
                <p className="text-sm text-gray-600 mt-1">AES-256 (Enabled by default)</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-medium text-gray-900">Encryption in Transit</h4>
                <p className="text-sm text-gray-600 mt-1">TLS 1.3 (Enabled by default)</p>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Database Encryption</h4>
                  <p className="text-sm text-gray-600 mt-1">Encrypt database at rest</p>
                </div>
                <Toggle defaultPressed={true} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">File Encryption</h4>
                  <p className="text-sm text-gray-600 mt-1">Encrypt uploaded files</p>
                </div>
                <Toggle defaultPressed={true} />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  )
}
