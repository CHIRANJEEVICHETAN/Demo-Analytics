"use client"

import { SupportOverviewCards } from "@/components/super-admin/support/overview-cards"
import { FeedbackTable } from "@/components/super-admin/support/feedback-table"

export default function SupportPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Support & Feedback</h2>
        <p className="text-gray-600 mt-1">Manage support tickets and user feedback</p>
      </div>

      <SupportOverviewCards />
      <FeedbackTable />
    </div>
  )
}
