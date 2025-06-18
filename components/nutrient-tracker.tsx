"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

interface NutrientData {
  name: string
  amount: number
  unit: string
  percentage: number
  color: string
}

interface MealData {
  name: string
  nutrients: NutrientData[]
  calories: number
}

const meals: Record<string, MealData> = {
  breakfast: {
    name: "Masala Dosa with Sambar",
    calories: 320,
    nutrients: [
      { name: "Protein", amount: 8, unit: "g", percentage: 16, color: "bg-blue-500" },
      { name: "Carbs", amount: 52, unit: "g", percentage: 17, color: "bg-amber-500" },
      { name: "Fiber", amount: 6, unit: "g", percentage: 24, color: "bg-green-500" },
      { name: "Fat", amount: 7, unit: "g", percentage: 9, color: "bg-red-500" },
      { name: "Iron", amount: 2.5, unit: "mg", percentage: 14, color: "bg-orange-500" },
      { name: "Calcium", amount: 80, unit: "mg", percentage: 8, color: "bg-purple-500" },
    ],
  },
  lunch: {
    name: "Vegetable Biryani with Raita",
    calories: 480,
    nutrients: [
      { name: "Protein", amount: 12, unit: "g", percentage: 24, color: "bg-blue-500" },
      { name: "Carbs", amount: 78, unit: "g", percentage: 26, color: "bg-amber-500" },
      { name: "Fiber", amount: 8, unit: "g", percentage: 32, color: "bg-green-500" },
      { name: "Fat", amount: 14, unit: "g", percentage: 18, color: "bg-red-500" },
      { name: "Iron", amount: 3.2, unit: "mg", percentage: 18, color: "bg-orange-500" },
      { name: "Calcium", amount: 120, unit: "mg", percentage: 12, color: "bg-purple-500" },
    ],
  },
  dinner: {
    name: "Paneer Tikka with Roti",
    calories: 420,
    nutrients: [
      { name: "Protein", amount: 18, unit: "g", percentage: 36, color: "bg-blue-500" },
      { name: "Carbs", amount: 45, unit: "g", percentage: 15, color: "bg-amber-500" },
      { name: "Fiber", amount: 5, unit: "g", percentage: 20, color: "bg-green-500" },
      { name: "Fat", amount: 16, unit: "g", percentage: 21, color: "bg-red-500" },
      { name: "Iron", amount: 2.8, unit: "mg", percentage: 16, color: "bg-orange-500" },
      { name: "Calcium", amount: 350, unit: "mg", percentage: 35, color: "bg-purple-500" },
    ],
  },
}

export function NutrientTracker() {
  const [activeTab, setActiveTab] = useState("breakfast")
  const activeMeal = meals[activeTab]

  return (
    <div className="space-y-4">
      <Tabs defaultValue="breakfast" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="dinner">Dinner</TabsTrigger>
        </TabsList>

        <TabsContent value="breakfast" className="mt-4">
          <NutrientDisplay meal={meals.breakfast} />
        </TabsContent>

        <TabsContent value="lunch" className="mt-4">
          <NutrientDisplay meal={meals.lunch} />
        </TabsContent>

        <TabsContent value="dinner" className="mt-4">
          <NutrientDisplay meal={meals.dinner} />
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Daily Nutrient Summary</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">Total Calories</span>
            <span className="font-medium">1220 / 2000 kcal</span>
          </div>
          <Progress value={61} className="bg-muted h-2 mb-4" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-muted-foreground">Protein</span>
                <span className="text-sm">38g / 60g</span>
              </div>
              <Progress value={63} className="bg-blue-500 h-2 mb-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-muted-foreground">Carbs</span>
                <span className="text-sm">175g / 300g</span>
              </div>
              <Progress value={58} className="bg-amber-500 h-2 mb-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-muted-foreground">Fiber</span>
                <span className="text-sm">19g / 25g</span>
              </div>
              <Progress value={76} className="bg-green-500 h-2 mb-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-muted-foreground">Fat</span>
                <span className="text-sm">37g / 65g</span>
              </div>
              <Progress value={57} className="bg-red-500 h-2 mb-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function NutrientDisplay({ meal }: { meal: MealData }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">{meal.name}</h3>
          <span className="text-sm bg-muted px-2 py-1 rounded-full">{meal.calories} kcal</span>
        </div>

        <div className="space-y-3">
          {meal.nutrients.map((nutrient) => (
            <div key={nutrient.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">{nutrient.name}</span>
                <span className="text-sm text-muted-foreground">
                  {nutrient.amount}
                  {nutrient.unit} ({nutrient.percentage}% DV)
                </span>
              </div>
              <Progress value={nutrient.percentage} className={`${nutrient.color} h-2`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
