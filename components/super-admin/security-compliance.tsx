"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const securityAlerts = [
  { id: 1, type: "Login Attempt", count: 3, severity: "low" },
  { id: 2, type: "Failed Auth", count: 1, severity: "medium" },
  { id: 3, type: "Permission Change", count: 5, severity: "low" },
]

const complianceStatus = [
  { name: "ISO 27001", status: "compliant" },
  { name: "GDPR", status: "compliant" },
  { name: "SOC 2", status: "compliant" },
]

export function SecurityCompliance() {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg">Security & Compliance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Recent Alerts</p>
          <div className="space-y-2">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                <span className="text-sm text-foreground">{alert.type}</span>
                <Badge
                  variant="outline"
                  className={`${
                    alert.severity === "low"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }`}
                >
                  {alert.count} events
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-3">Compliance Status</p>
          <div className="space-y-2">
            {complianceStatus.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm text-foreground">{item.name}</span>
                <Badge variant="outline" className="ml-auto bg-green-50 text-green-700 border-green-200">
                  ✓ Compliant
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
