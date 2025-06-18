"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, Utensils, AlertTriangle } from "lucide-react"

interface NutrientLevel {
  name: string
  value: number
  min: number
  max: number
  unit: string
  isHealthy: boolean
}

export function MealCustomization() {
  const [carbs, setCarbs] = useState(50)
  const [protein, setProtein] = useState(25)
  const [fat, setFat] = useState(25)
  const [calories, setCalories] = useState(500)
  const [spiceLevel, setSpiceLevel] = useState(2)
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(true)

  // Calculate nutrient levels based on user selections
  const nutrientLevels: NutrientLevel[] = [
    {
      name: "Carbohydrates",
      value: Math.round(((carbs / 100) * calories) / 4), // 4 calories per gram of carbs
      min: 50,
      max: 150,
      unit: "g",
      isHealthy: carbs >= 40 && carbs <= 60,
    },
    {
      name: "Protein",
      value: Math.round(((protein / 100) * calories) / 4), // 4 calories per gram of protein
      min: 20,
      max: 60,
      unit: "g",
      isHealthy: protein >= 20 && protein <= 35,
    },
    {
      name: "Fat",
      value: Math.round(((fat / 100) * calories) / 9), // 9 calories per gram of fat
      min: 10,
      max: 40,
      unit: "g",
      isHealthy: fat >= 20 && fat <= 35,
    },
    {
      name: "Fiber",
      value: Math.round((((carbs / 100) * calories) / 4) * 0.15), // Estimate fiber as 15% of carbs
      min: 5,
      max: 30,
      unit: "g",
      isHealthy: true,
    },
  ]

  // Calculate overall health score
  const healthScore = Math.round(
    (nutrientLevels.filter((nutrient) => nutrient.isHealthy).length / nutrientLevels.length) * 100,
  )

  // Handle macronutrient changes with constraints
  const handleCarbsChange = (value: number[]) => {
    const newCarbs = value[0]
    const remaining = 100 - newCarbs
    const newProtein = Math.round((protein / (protein + fat)) * remaining)
    const newFat = remaining - newProtein

    setCarbs(newCarbs)
    setProtein(newProtein)
    setFat(newFat)
  }

  const handleProteinChange = (value: number[]) => {
    const newProtein = value[0]
    const remaining = 100 - carbs
    const newFat = remaining - newProtein

    if (newFat < 10) return // Minimum fat requirement

    setProtein(newProtein)
    setFat(newFat)
  }

  const handleFatChange = (value: number[]) => {
    const newFat = value[0]
    const remaining = 100 - carbs
    const newProtein = remaining - newFat

    if (newProtein < 10) return // Minimum protein requirement

    setProtein(newProtein)
    setFat(newFat)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <h4 className="font-medium">Calories</h4>
              <span>{calories} kcal</span>
            </div>
            <Slider value={[calories]} min={300} max={800} step={50} onValueChange={(value) => setCalories(value[0])} />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h4 className="font-medium">Carbohydrates</h4>
              <span>{carbs}%</span>
            </div>
            <Slider
              value={[carbs]}
              min={20}
              max={70}
              step={5}
              onValueChange={handleCarbsChange}
              className={carbs >= 40 && carbs <= 60 ? "bg-green-100" : "bg-amber-100"}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h4 className="font-medium">Protein</h4>
              <span>{protein}%</span>
            </div>
            <Slider
              value={[protein]}
              min={10}
              max={40}
              step={5}
              onValueChange={handleProteinChange}
              className={protein >= 20 && protein <= 35 ? "bg-green-100" : "bg-amber-100"}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h4 className="font-medium">Fat</h4>
              <span>{fat}%</span>
            </div>
            <Slider
              value={[fat]}
              min={10}
              max={40}
              step={5}
              onValueChange={handleFatChange}
              className={fat >= 20 && fat <= 35 ? "bg-green-100" : "bg-amber-100"}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h4 className="font-medium">Spice Level</h4>
              <span>{["Mild", "Medium", "Spicy", "Very Spicy", "Extra Hot"][spiceLevel - 1]}</span>
            </div>
            <Slider value={[spiceLevel]} min={1} max={5} step={1} onValueChange={(value) => setSpiceLevel(value[0])} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch id="gluten-free" checked={isGlutenFree} onCheckedChange={setIsGlutenFree} />
                <Label htmlFor="gluten-free">Gluten Free</Label>
              </div>
              {isGlutenFree && <Badge className="bg-green-100 text-green-800">Enabled</Badge>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch id="lactose-free" checked={isLactoseFree} onCheckedChange={setIsLactoseFree} />
                <Label htmlFor="lactose-free">Lactose Free</Label>
              </div>
              {isLactoseFree && <Badge className="bg-green-100 text-green-800">Enabled</Badge>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch id="vegetarian" checked={isVegetarian} onCheckedChange={setIsVegetarian} />
                <Label htmlFor="vegetarian">Vegetarian</Label>
              </div>
              {isVegetarian && <Badge className="bg-green-100 text-green-800">Enabled</Badge>}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className={healthScore >= 80 ? "bg-green-50" : healthScore >= 60 ? "bg-amber-50" : "bg-red-50"}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium">Meal Health Score</h4>
            <span className="font-bold">{healthScore}%</span>
          </div>

          <div className="space-y-2">
            {nutrientLevels.map((nutrient) => (
              <div key={nutrient.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  {nutrient.isHealthy ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                  )}
                  <span className="text-sm">{nutrient.name}</span>
                </div>
                <span className="text-sm">
                  {nutrient.value} {nutrient.unit}
                </span>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-saffron-500 hover:bg-saffron-600">
            <Utensils className="mr-2 h-4 w-4" />
            Generate Meal Plan
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
