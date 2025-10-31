"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$99",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      { name: "Up to 10 users", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "1 GB storage", included: true },
      { name: "Advanced reporting", included: false },
      { name: "API access", included: false },
      { name: "Custom integrations", included: false },
      { name: "Priority support", included: false },
    ],
    color: "blue",
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "For growing businesses",
    features: [
      { name: "Up to 50 users", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority email support", included: true },
      { name: "10 GB storage", included: true },
      { name: "Advanced reporting", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: false },
      { name: "24/7 phone support", included: false },
    ],
    color: "purple",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "/month",
    description: "For large organizations",
    features: [
      { name: "Unlimited users", included: true },
      { name: "Full analytics suite", included: true },
      { name: "24/7 phone & email support", included: true },
      { name: "Unlimited storage", included: true },
      { name: "Advanced reporting", included: true },
      { name: "Full API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    color: "red",
    popular: false,
  },
]

export function PricingPlans() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative border-0 shadow-sm hover:shadow-lg transition-shadow ${plan.popular ? "ring-2 ring-purple-500" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-4 border-b">
              <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
              <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-900" : "text-gray-400"}>{feature.name}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Select Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4 border-b">
          <CardTitle>Feature Comparison</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Feature</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Basic</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Professional</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((_, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{plans[0].features[idx].name}</td>
                    <td className="py-3 px-4 text-center">
                      {plans[0].features[idx].included ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {plans[1].features[idx].included ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {plans[2].features[idx].included ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
