"use client"

import type React from "react"

import { Building2, Clock, AlertCircle, TrendingUp } from "lucide-react"

interface OverviewCard {
	title: string
	value: string | number
	icon: React.ReactNode
	color: string
}

const cards: OverviewCard[] = [
	{
		title: "Total Companies",
		value: "47 Active",
		icon: <Building2 size={24} className="text-white" />,
		color: "bg-blue-600",
	},
	{
		title: "Pending Onboarding",
		value: "3 Requests",
		icon: <Clock size={24} className="text-white" />,
		color: "bg-yellow-600",
	},
	{
		title: "Suspended Companies",
		value: "2 Suspended",
		icon: <AlertCircle size={24} className="text-white" />,
		color: "bg-red-600",
	},
	{
		title: "Added This Month",
		value: "+5 New",
		icon: <TrendingUp size={24} className="text-white" />,
		color: "bg-green-600",
	},
]

export function CompaniesOverviewCards() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{cards.map((card, idx) => (
				<div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
					<div className="flex items-start justify-between mb-4">
						<div className={`p-3 rounded-lg ${card.color}`}>{card.icon}</div>
					</div>
					<h3 className="text-gray-600 text-sm font-medium mb-2">{card.title}</h3>
					<p className="text-2xl font-bold text-gray-900">{card.value}</p>
				</div>
			))}
		</div>
	)
}
