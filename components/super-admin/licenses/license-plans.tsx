"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function LicensePlans() {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      annual: "$990/year (save 17%)",
      description: "Perfect for small manufacturing setups",
      features: [
        { name: "Up to 50 users", included: true },
        { name: "Up to 20 devices", included: true },
        { name: "10 GB storage", included: true },
        { name: "OEE Module", included: true },
        { name: "Basic Reports", included: true },
        { name: "Email Support", included: true },
        { name: "Energy Module", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "API Access", included: false },
      ],
    },
    {
      name: "Standard",
      price: "$299",
      period: "/month",
      annual: "$2,990/year (save 17%)",
      description: "Ideal for growing manufacturing operations",
      features: [
        { name: "Up to 200 users", included: true },
        { name: "Up to 100 devices", included: true },
        { name: "50 GB storage", included: true },
        { name: "All Basic features", included: true },
        { name: "Energy Module", included: true },
        { name: "Machine Module", included: true },
        { name: "Advanced Reports", included: true },
        { name: "API Access (limited)", included: true },
        { name: "Phone Support", included: true },
      ],
    },
    {
      name: "Premium",
      price: "$799",
      period: "/month",
      annual: "$7,990/year (save 17%)",
      description: "Comprehensive solution for large enterprises",
      featured: true,
      features: [
        { name: "Up to 1000 users", included: true },
        { name: "Unlimited devices", included: true },
        { name: "250 GB storage", included: true },
        { name: "All Standard features", included: true },
        { name: "All Modules", included: true },
        { name: "Custom Dashboards", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Full API Access", included: true },
        { name: "Priority Support", included: true },
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      annual: "Contact sales",
      description: "Fully customizable for enterprise needs",
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited devices", included: true },
        { name: "Unlimited storage", included: true },
        { name: "All Premium features", included: true },
        { name: "White-label option", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated server", included: true },
        { name: "SLA guarantees", included: true },
        { name: "24/7 Support", included: true },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">License Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <Card key={index} className={`border-2 ${plan.featured ? "border-red-500 shadow-lg" : "border-gray-200"}`}>
              <CardHeader>
                {plan.featured && (
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">
                    FEATURED
                  </div>
                )}
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {plan.price}
                    <span className="text-sm text-gray-600 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{plan.annual}</p>
                </div>

                <div className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.featured
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Edit Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
