"use client"

import { BillingOverviewCards } from "@/components/super-admin/billing/overview-cards"
import { SubscriptionsTable } from "@/components/super-admin/billing/subscriptions-table"

export default function BillingPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Billing & Subscriptions</h2>
        <p className="text-gray-600 mt-1">Manage subscriptions, invoices, and billing information</p>
      </div>

      <BillingOverviewCards />
      <SubscriptionsTable />
    </div>
  )
}
