"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Info } from "lucide-react"

interface NutrientData {
  name: string
  current: number
  target: number
  unit: string
  priority: "high" | "medium" | "low"
  info: string
}

const initialNutrients: NutrientData[] = [
  {
    name: "Protein",
    current: 35,
    target: 60,
    unit: "g",
    priority: "high",
    info: "Essential for muscle repair and immune function. Add more lentils, paneer, or tofu to your diet.",
  },
  {
    name: "Iron",
    current: 8,
    target: 18,
    unit: "mg",
    priority: "high",
    info: "Low iron can cause fatigue and weakness. Include more spinach, beetroot, and jaggery in your meals.",
  },
  {
    name: "Calcium",
    current: 650,
    target: 1000,
    unit: "mg",
    priority: "medium",
    info: "Important for bone health. Consider adding more dairy products or calcium-fortified foods.",
  },
  {
    name: "Fiber",
    current: 18,
    target: 25,
    unit: "g",
    priority: "medium",
    info: "Helps with digestion and blood sugar control. Increase whole grains, vegetables, and fruits.",
  },
  {
    name: "Vitamin D",
    current: 400,
    target: 600,
    unit: "IU",
    priority: "low",
    info: "Supports immune function and bone health. Consider more sunlight exposure and vitamin D rich foods.",
  },
]

export function NutritionalGapsAlert() {
  const [nutrients] = useState<NutrientData[]>(initialNutrients)
  const [showInfo, setShowInfo] = useState<string | null>(null)

  // Filter nutrients by priority
  const highPriorityGaps = nutrients.filter(
    (nutrient) => nutrient.priority === "high" && nutrient.current < nutrient.target * 0.7,
  )

  const mediumPriorityGaps = nutrients.filter(
    (nutrient) => nutrient.priority === "medium" && nutrient.current < nutrient.target * 0.7,
  )

  const hasHighPriorityGaps = highPriorityGaps.length > 0
  const hasMediumPriorityGaps = mediumPriorityGaps.length > 0

  const toggleInfo = (name: string) => {
    if (showInfo === name) {
      setShowInfo(null)
    } else {
      setShowInfo(name)
    }
  }

  return (
    <div className="space-y-4">
      {hasHighPriorityGaps && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-red-800">Critical Nutritional Gaps Detected</h4>
            <p className="text-sm text-red-700 mt-1">
              Your diet is significantly low in important nutrients that require immediate attention.
            </p>
          </div>
        </div>
      )}

      {!hasHighPriorityGaps && hasMediumPriorityGaps && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
          <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-amber-800">Nutritional Gaps Detected</h4>
            <p className="text-sm text-amber-700 mt-1">
              Your diet is lacking in some nutrients that should be addressed.
            </p>
          </div>
        </div>
      )}

      {!hasHighPriorityGaps && !hasMediumPriorityGaps && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
          <Info className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-green-800">Good Nutritional Balance</h4>
            <p className="text-sm text-green-700 mt-1">
              Your diet is well-balanced with no significant nutritional gaps.
            </p>
          </div>
        </div>
      )}

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-4">Nutrient Tracking</h3>
          <div className="space-y-4">
            {nutrients.map((nutrient) => {
              const percentage = Math.min(100, Math.round((nutrient.current / nutrient.target) * 100))
              let statusColor = "bg-green-500"

              if (percentage < 50) {
                statusColor = "bg-red-500"
              } else if (percentage < 70) {
                statusColor = "bg-amber-500"
              }

              return (
                <div key={nutrient.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="font-medium text-sm">{nutrient.name}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 ml-1"
                        onClick={() => toggleInfo(nutrient.name)}
                      >
                        <Info className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="sr-only">Info about {nutrient.name}</span>
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {nutrient.current} / {nutrient.target} {nutrient.unit}
                    </span>
                  </div>

                  <Progress value={percentage} className={statusColor} />

                  {showInfo === nutrient.name && (
                    <p className="text-xs text-muted-foreground mt-1 bg-muted p-2 rounded">{nutrient.info}</p>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" size="sm" className="w-full">
              View Detailed Nutrition Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
