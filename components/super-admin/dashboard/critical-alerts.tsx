"use client"

import { AlertCircle, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

interface Alert {
	id: string
	title: string
	message: string
	severity: "critical" | "warning" | "info" | "error"
	timestamp: string
	entity: string
}

const mockAlerts: Alert[] = [
	{
		id: "1",
		title: "License Expiring Soon",
		message: "ABC Manufacturing license expires in 15 days",
		severity: "critical",
		timestamp: "2 hours ago",
		entity: "ABC Manufacturing",
	},
	{
		id: "2",
		title: "High CPU Usage",
		message: "System CPU usage exceeded 85% threshold",
		severity: "warning",
		timestamp: "30 minutes ago",
		entity: "System",
	},
	{
		id: "3",
		title: "Failed Backup",
		message: "Database backup failed - check storage",
		severity: "error",
		timestamp: "1 hour ago",
		entity: "Database",
	},
	{
		id: "4",
		title: "Security Alert",
		message: "Multiple failed login attempts detected",
		severity: "critical",
		timestamp: "3 hours ago",
		entity: "Security",
	},
	{
		id: "5",
		title: "System Update Available",
		message: "New system update v2.1.6 is available",
		severity: "info",
		timestamp: "5 hours ago",
		entity: "System",
	},
]

const severityIcons = {
	critical: <XCircle className="text-red-600" size={20} />,
	warning: <AlertTriangle className="text-yellow-600" size={20} />,
	error: <AlertCircle className="text-orange-600" size={20} />,
	info: <CheckCircle className="text-blue-600" size={20} />,
}

const severityBg = {
	critical: "bg-red-50 border-red-200",
	warning: "bg-yellow-50 border-yellow-200",
	error: "bg-orange-50 border-orange-200",
	info: "bg-blue-50 border-blue-200",
}

export function CriticalAlerts() {
	return (
		<div className="bg-white rounded-lg border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Alerts</h3>
			<div className="space-y-3">
				{mockAlerts.map((alert) => (
					<div key={alert.id} className={`p-4 rounded-lg border ${severityBg[alert.severity]} flex gap-4`}>
						<div className="flex-shrink-0">{severityIcons[alert.severity]}</div>
						<div className="flex-1">
							<h4 className="font-semibold text-gray-900">{alert.title}</h4>
							<p className="text-sm text-gray-600 mt-1">{alert.message}</p>
							<div className="flex items-center justify-between mt-2">
								<span className="text-xs text-gray-500">{alert.timestamp}</span>
								<div className="flex gap-2">
									<button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Acknowledge</button>
									<button className="text-xs text-gray-600 hover:text-gray-700">Details</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
