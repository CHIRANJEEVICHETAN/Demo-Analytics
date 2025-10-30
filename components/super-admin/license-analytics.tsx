"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const licenseByIndustry = [
  { name: "Technology", value: 45 },
  { name: "Healthcare", value: 28 },
  { name: "Finance", value: 18 },
  { name: "Retail", value: 9 },
]

const licenseRenewalTrends = [
  { month: "Jan", renewals: 12, expirations: 3 },
  { month: "Feb", renewals: 15, expirations: 4 },
  { month: "Mar", renewals: 18, expirations: 5 },
  { month: "Apr", renewals: 14, expirations: 6 },
  { month: "May", renewals: 20, expirations: 4 },
  { month: "Jun", renewals: 16, expirations: 7 },
]

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"]

export function LicenseAnalytics() {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg">License Analytics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-3">Distribution by Industry</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={licenseByIndustry}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {licenseByIndustry.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-3">Renewal Trends (6 months)</p>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={licenseRenewalTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="renewals" fill="#10B981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expirations" fill="#EF4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
