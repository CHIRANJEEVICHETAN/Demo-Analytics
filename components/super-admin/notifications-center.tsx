"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Info, CheckCircle2 } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "alert",
    title: "High CPU Usage Detected",
    message: "Acme Corp tenant experiencing 95% CPU usage",
    time: "5 mins ago",
  },
  {
    id: 2,
    type: "info",
    title: "License Expiring Soon",
    message: "TechStart Inc license expires in 7 days",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "success",
    title: "System Update Completed",
    message: "Platform updated to v2.2.0 successfully",
    time: "3 hours ago",
  },
  {
    id: 4,
    type: "alert",
    title: "Failed Authentication Attempts",
    message: "12 failed login attempts from Global Solutions",
    time: "5 hours ago",
  },
]

export function NotificationsCenter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Notifications Center</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                {notification.type === "alert" && <AlertCircle size={20} className="text-red-500" />}
                {notification.type === "info" && <Info size={20} className="text-blue-500" />}
                {notification.type === "success" && <CheckCircle2 size={20} className="text-green-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">{notification.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
