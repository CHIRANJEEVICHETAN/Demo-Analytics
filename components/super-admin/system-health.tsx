"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const systemData = [
  { time: "00:00", cpu: 45, memory: 62, disk: 38 },
  { time: "04:00", cpu: 52, memory: 68, disk: 40 },
  { time: "08:00", cpu: 48, memory: 65, disk: 42 },
  { time: "12:00", cpu: 61, memory: 72, disk: 45 },
  { time: "16:00", cpu: 55, memory: 70, disk: 48 },
  { time: "20:00", cpu: 49, memory: 66, disk: 46 },
  { time: "24:00", cpu: 43, memory: 60, disk: 44 },
]

const topTenantsData = [
  { name: "Acme Corp", load: 85 },
  { name: "TechStart Inc", load: 72 },
  { name: "Global Solutions", load: 68 },
  { name: "Innovation Labs", load: 55 },
  { name: "Future Systems", load: 48 },
]

export function SystemHealth() {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg">System Health Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-3">CPU, Memory, Disk Usage (24h)</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={systemData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="memory" stroke="#EF4444" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="disk" stroke="#10B981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-3">Top 5 Tenants by Load</p>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={topTenantsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="load" fill="#C62828" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-sm text-muted-foreground">System Latency</p>
          <p className="text-2xl font-bold text-foreground mt-1">45ms</p>
          <p className="text-xs text-green-500 mt-1">↓ 12% from last hour</p>
        </div>
      </CardContent>
    </Card>
  )
}
