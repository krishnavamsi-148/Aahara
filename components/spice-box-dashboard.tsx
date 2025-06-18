"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Utensils, Activity, Search, ShoppingCart } from "lucide-react"

export function SpiceBoxDashboard() {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null)

  const spiceBoxes = [
    {
      id: "meal-plan",
      title: "Meal Plan",
      description: "Plan your meals for the week",
      color: "bg-haldi-500",
      borderColor: "border-haldi-600",
      textColor: "text-haldi-900",
      hoverColor: "hover:bg-haldi-400",
      icon: <Utensils className="h-6 w-6" />,
      link: "/meal-plans",
    },
    {
      id: "my-health",
      title: "My Health",
      description: "Track your health metrics",
      color: "bg-curryleaf-500",
      borderColor: "border-curryleaf-600",
      textColor: "text-white",
      hoverColor: "hover:bg-curryleaf-400",
      icon: <Activity className="h-6 w-6" />,
      link: "/health-monitor",
    },
    {
      id: "analyze-food",
      title: "Analyze Food",
      description: "Get nutritional insights",
      color: "bg-indigo-900",
      borderColor: "border-indigo-950",
      textColor: "text-white",
      hoverColor: "hover:bg-indigo-800",
      icon: <Search className="h-6 w-6" />,
      link: "/food-analysis",
    },
    {
      id: "order-thali",
      title: "Order Thali",
      description: "Healthy meals delivered",
      color: "bg-tandoori-700",
      borderColor: "border-tandoori-800",
      textColor: "text-white",
      hoverColor: "hover:bg-tandoori-600",
      icon: <ShoppingCart className="h-6 w-6" />,
      link: "/food-delivery",
    },
  ]

  return (
    <div className="p-6 bg-texture-spice-grain bg-sweetlime-50 rounded-xl">
      <h2 className="text-2xl font-bold text-jaggery-600 mb-6 text-center">Your Wellness Masala Box</h2>
      <div className="grid grid-cols-2 gap-6">
        {spiceBoxes.map((box) => (
          <Link href={box.link} key={box.id}>
            <motion.div
              className={`relative rounded-full aspect-square ${box.color} ${box.borderColor} border-4 shadow-lg cursor-pointer overflow-hidden ${box.hoverColor} transition-colors`}
              onHoverStart={() => setHoveredBox(box.id)}
              onHoverEnd={() => setHoveredBox(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-full ${box.color} flex items-center justify-center ${box.textColor}`}
                animate={{
                  rotateY: hoveredBox === box.id ? 180 : 0,
                }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  {box.icon}
                  <h3 className="mt-2 font-bold">{box.title}</h3>
                </div>
              </motion.div>

              <motion.div
                className={`absolute inset-0 rounded-full bg-white flex items-center justify-center ${box.textColor}`}
                initial={{ rotateY: 180 }}
                animate={{
                  rotateY: hoveredBox === box.id ? 0 : 180,
                }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-sm">{box.description}</p>
                  <span className="mt-2 text-xs font-medium">Click to open</span>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
