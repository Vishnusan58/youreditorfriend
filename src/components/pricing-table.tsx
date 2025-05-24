"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingTier {
    name: string
    price: number
    description: string
    popular: boolean
    features: string[]
    idealFor?: string
    minReels?: number
}

interface PricingTableProps {
    pricingPlans: PricingTier[]
}

export function PricingTable({ pricingPlans }: PricingTableProps) {
    return (
        <div className="w-full overflow-x-auto pb-6">
            <div className="min-w-[768px]">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="border-b border-purple-800/30">
                        <th className="p-4 text-left font-bold text-lg">Package/Tier</th>
                        <th className="p-4 text-left font-bold text-lg">Pricee ()</th>
                        <th className="p-4 text-left font-bold text-lg">Services Included</th>
                        <th className="p-4 text-left font-bold text-lg">Ideal For</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pricingPlans.map((plan, index) => (
                        <tr
                            key={index}
                            className={`border-b border-purple-800/20 transition-all duration-300 hover:bg-purple-900/10 ${
                                plan.popular ? "bg-gradient-to-r from-purple-900/20 to-transparent" : ""
                            }`}
                        >
                            <td className="p-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl font-bold">{plan.name}</span>
                                        {plan.popular && (
                                            <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
                          Best Value
                        </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-400">{plan.description}</p>
                                    {plan.minReels && (
                                        <span className="mt-2 text-xs font-medium text-purple-300">
                        Minimum {plan.minReels} reels required
                      </span>
                                    )}
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">₹{plan.price}</span>
                                    <span className="text-gray-400">/ project</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <ul className="space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-purple-500" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="p-4">
                                <p className="text-sm">{plan.idealFor || "Individual Projects"}</p>
                                <Button
                                    className={`mt-4 w-full transition-all duration-300 ${
                                        plan.popular
                                            ? "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                                            : "bg-purple-950/50 text-white hover:bg-purple-900"
                                    }`}
                                >
                                    Choose Plan
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
