"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      {/* Authentication Security */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Authentication Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">Enable Multi-Factor Authentication (MFA)</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
          <div className="space-y-2 ml-4">
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label className="text-sm text-gray-700">Email OTP</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label className="text-sm text-gray-700">SMS OTP</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label className="text-sm text-gray-700">Authenticator App</Label>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Label className="text-sm font-medium text-gray-700">Force MFA for Super Admin</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Password Policy */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Password Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Minimum Password Length</Label>
              <Input type="number" defaultValue="8" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Password Expiry (days)</Label>
              <Input type="number" defaultValue="90" className="mt-1" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label className="text-sm text-gray-700">Require Uppercase Letters</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label className="text-sm text-gray-700">Require Lowercase Letters</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label className="text-sm text-gray-700">Require Numbers</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label className="text-sm text-gray-700">Require Special Characters</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Encryption */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">Data Encryption</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium text-gray-700">Encryption at Rest</Label>
              <p className="text-xs text-gray-500 mt-1">AES-256 (Enabled by default)</p>
            </div>
            <span className="text-green-600 font-medium">✓ Enabled</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <Label className="text-sm font-medium text-gray-700">Encryption in Transit</Label>
              <p className="text-xs text-gray-500 mt-1">TLS 1.3 (Enabled by default)</p>
            </div>
            <span className="text-green-600 font-medium">✓ Enabled</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Label className="text-sm font-medium text-gray-700">Database Encryption</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">File Encryption</Label>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Button className="bg-red-500 hover:bg-red-600 text-white">Save Changes</Button>
    </div>
  )
}
