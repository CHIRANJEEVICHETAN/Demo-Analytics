"use client"

import { BillingOverviewCards } from "@/components/super-admin/billing/overview-cards"
import { InvoicesTable } from "@/components/super-admin/billing/invoices-table"

export default function BillingInvoicesPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Super Admin</span>
          <span className="text-gray-400">/</span>
          <span>Billing & Subscriptions</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-600 font-medium">Invoices</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
        <p className="text-gray-600 mt-1">View and manage customer invoices and payment history</p>
      </div>

      <BillingOverviewCards />
      <InvoicesTable />
    </div>
  )
}
