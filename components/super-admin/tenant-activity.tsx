"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const tenantData = [
  {
    id: 1,
    name: "Acme Corporation",
    activeUsers: 245,
    licenseExpiry: "2025-12-31",
    lastLogin: "2 mins ago",
    score: 98,
  },
  {
    id: 2,
    name: "TechStart Inc",
    activeUsers: 128,
    licenseExpiry: "2025-11-15",
    lastLogin: "15 mins ago",
    score: 95,
  },
  {
    id: 3,
    name: "Global Solutions",
    activeUsers: 312,
    licenseExpiry: "2025-10-20",
    lastLogin: "1 hour ago",
    score: 92,
  },
  {
    id: 4,
    name: "Innovation Labs",
    activeUsers: 87,
    licenseExpiry: "2025-09-30",
    lastLogin: "3 hours ago",
    score: 88,
  },
  {
    id: 5,
    name: "Future Systems",
    activeUsers: 156,
    licenseExpiry: "2025-08-15",
    lastLogin: "5 hours ago",
    score: 85,
  },
]

export function TenantActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Active Tenants</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Company</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Active Users</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">License Expiry</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Last Login</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Score</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {tenantData.map((tenant) => (
                <tr key={tenant.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{tenant.name}</td>
                  <td className="py-3 px-4 text-foreground">{tenant.activeUsers}</td>
                  <td className="py-3 px-4 text-foreground">{tenant.licenseExpiry}</td>
                  <td className="py-3 px-4 text-muted-foreground">{tenant.lastLogin}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={`${
                        tenant.score >= 95
                          ? "bg-green-50 text-green-700 border-green-200"
                          : tenant.score >= 85
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-yellow-50 text-yellow-700 border-yellow-200"
                      }`}
                    >
                      {tenant.score}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
                      Manage
                    </Button>
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
