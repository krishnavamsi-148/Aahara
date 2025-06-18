"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRegionalTheme } from "./regional-theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, MapPin } from "lucide-react"

export function RegionalThemeSelector() {
  const { region, setRegion, regionName } = useRegionalTheme()
  const [isOpen, setIsOpen] = useState(false)

  const regions = [
    { id: "andhra", name: "Andhra Pradesh", icon: "🌶️", description: "Kalamkari art with spicy cuisine" },
    { id: "tamil", name: "Tamil Nadu", icon: "🍚", description: "Kolam patterns with traditional meals" },
    { id: "kerala", name: "Kerala", icon: "🌴", description: "Banana leaf designs with coconut flavors" },
    { id: "bengal", name: "Bengal", icon: "🐟", description: "Terracotta art with sweet and savory dishes" },
    { id: "gujarat", name: "Gujarat", icon: "🥮", description: "Bandhani patterns with vegetarian delights" },
    { id: "punjab", name: "Punjab", icon: "🌾", description: "Phulkari embroidery with hearty meals" },
    { id: "default", name: "All India", icon: "🇮🇳", description: "Pan-Indian themes with diverse cuisine" },
  ]

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border-jaggery-300"
      >
        <MapPin className="h-4 w-4 text-jaggery-600" />
        <span>Region: {regionName}</span>
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 z-10 w-72"
        >
          <Card className="border-jaggery-300 shadow-lg">
            <CardContent className="p-2">
              <div className="p-2">
                <h3 className="font-medium text-jaggery-800 mb-2">Choose Your Regional Theme</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Experience Aahara with regional art styles and local cuisine recommendations
                </p>
                <div className="space-y-1">
                  {regions.map((r) => (
                    <div
                      key={r.id}
                      className={`flex items-center p-2 rounded-md cursor-pointer ${
                        region === r.id ? "bg-haldi-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        setRegion(r.id as any)
                        setIsOpen(false)
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-sweetlime-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span role="img" aria-label={r.name}>
                          {r.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{r.name}</span>
                          {region === r.id && <Check className="h-4 w-4 text-haldi-500" />}
                        </div>
                        <p className="text-xs text-muted-foreground">{r.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
