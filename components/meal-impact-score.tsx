"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface MealImpactData {
  bloodSugar: {
    before: number
    after: number
    impact: "positive" | "negative" | "neutral"
  }
  bloodPressure: {
    before: { systolic: number; diastolic: number }
    after: { systolic: number; diastolic: number }
    impact: "positive" | "negative" | "neutral"
  }
  energy: {
    before: number
    after: number
    impact: "positive" | "negative" | "neutral"
  }
  overallScore: number
}

export function MealImpactScore() {
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null)

  // Sample data - in a real app, this would come from an API
  const mealImpactData: Record<string, MealImpactData> = {
    breakfast: {
      bloodSugar: { before: 110, after: 135, impact: "negative" },
      bloodPressure: {
        before: { systolic: 125, diastolic: 82 },
        after: { systolic: 128, diastolic: 84 },
        impact: "neutral",
      },
      energy: { before: 60, after: 85, impact: "positive" },
      overallScore: 75,
    },
    lunch: {
      bloodSugar: { before: 120, after: 115, impact: "positive" },
      bloodPressure: {
        before: { systolic: 130, diastolic: 85 },
        after: { systolic: 125, diastolic: 80 },
        impact: "positive",
      },
      energy: { before: 70, after: 65, impact: "neutral" },
      overallScore: 85,
    },
    dinner: {
      bloodSugar: { before: 105, after: 120, impact: "negative" },
      bloodPressure: {
        before: { systolic: 128, diastolic: 83 },
        after: { systolic: 132, diastolic: 86 },
        impact: "negative",
      },
      energy: { before: 75, after: 60, impact: "negative" },
      overallScore: 65,
    },
  }

  const getImpactIcon = (impact: "positive" | "negative" | "neutral") => {
    switch (impact) {
      case "positive":
        return <TrendingUp className="h-4 w-4 text-emerald-500" />
      case "negative":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      case "neutral":
        return <Minus className="h-4 w-4 text-amber-500" />
    }
  }

  const getImpactColor = (impact: "positive" | "negative" | "neutral") => {
    switch (impact) {
      case "positive":
        return "text-emerald-500"
      case "negative":
        return "text-red-500"
      case "neutral":
        return "text-amber-500"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-emerald-500"
    if (score >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedMeal === "breakfast" ? "default" : "outline"}
          onClick={() => setSelectedMeal("breakfast")}
          className={selectedMeal === "breakfast" ? "bg-saffron-500 hover:bg-saffron-600" : ""}
        >
          Breakfast
        </Button>
        <Button
          variant={selectedMeal === "lunch" ? "default" : "outline"}
          onClick={() => setSelectedMeal("lunch")}
          className={selectedMeal === "lunch" ? "bg-saffron-500 hover:bg-saffron-600" : ""}
        >
          Lunch
        </Button>
        <Button
          variant={selectedMeal === "dinner" ? "default" : "outline"}
          onClick={() => setSelectedMeal("dinner")}
          className={selectedMeal === "dinner" ? "bg-saffron-500 hover:bg-saffron-600" : ""}
        >
          Dinner
        </Button>
      </div>

      {selectedMeal ? (
        <Card>
          <CardContent className="pt-6">
            <div className="mb-6 text-center">
              <div className="text-sm text-muted-foreground mb-1">Overall Impact Score</div>
              <div className="text-3xl font-bold">{mealImpactData[selectedMeal].overallScore}/100</div>
              <Progress
                value={mealImpactData[selectedMeal].overallScore}
                className={`h-2 mt-2 ${getScoreColor(mealImpactData[selectedMeal].overallScore)}`}
              />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 border-b pb-3">
                <div className="text-sm font-medium">Metric</div>
                <div className="text-sm font-medium">Change</div>
                <div className="text-sm font-medium">Impact</div>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center border-b pb-3">
                <div className="text-sm">Blood Sugar</div>
                <div className="text-sm">
                  {mealImpactData[selectedMeal].bloodSugar.before} → {mealImpactData[selectedMeal].bloodSugar.after}{" "}
                  mg/dL
                </div>
                <div className={`flex items-center ${getImpactColor(mealImpactData[selectedMeal].bloodSugar.impact)}`}>
                  {getImpactIcon(mealImpactData[selectedMeal].bloodSugar.impact)}
                  <span className="ml-1 text-sm">
                    {Math.abs(
                      mealImpactData[selectedMeal].bloodSugar.after - mealImpactData[selectedMeal].bloodSugar.before,
                    )}{" "}
                    mg/dL
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center border-b pb-3">
                <div className="text-sm">Blood Pressure</div>
                <div className="text-sm">
                  {mealImpactData[selectedMeal].bloodPressure.before.systolic}/
                  {mealImpactData[selectedMeal].bloodPressure.before.diastolic} →
                  {mealImpactData[selectedMeal].bloodPressure.after.systolic}/
                  {mealImpactData[selectedMeal].bloodPressure.after.diastolic} mmHg
                </div>
                <div
                  className={`flex items-center ${getImpactColor(mealImpactData[selectedMeal].bloodPressure.impact)}`}
                >
                  {getImpactIcon(mealImpactData[selectedMeal].bloodPressure.impact)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center">
                <div className="text-sm">Energy Level</div>
                <div className="text-sm">
                  {mealImpactData[selectedMeal].energy.before}% → {mealImpactData[selectedMeal].energy.after}%
                </div>
                <div className={`flex items-center ${getImpactColor(mealImpactData[selectedMeal].energy.impact)}`}>
                  {getImpactIcon(mealImpactData[selectedMeal].energy.impact)}
                  <span className="ml-1 text-sm">
                    {Math.abs(mealImpactData[selectedMeal].energy.after - mealImpactData[selectedMeal].energy.before)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button variant="link" className="p-0 h-auto text-saffron-600">
                View Detailed Analysis
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center p-6 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">Select a meal to view its health impact</p>
        </div>
      )}
    </div>
  )
}
