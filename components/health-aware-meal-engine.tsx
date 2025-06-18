"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  Droplets,
  Heart,
  Info,
  Plus,
  Sparkles,
  ThumbsUp,
  Utensils,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function HealthAwareMealEngine() {
  const [activeTab, setActiveTab] = useState("breakfast")
  const [showDetails, setShowDetails] = useState(false)

  // Sample user health data
  const healthData = {
    bloodSugar: {
      fasting: 110,
      postprandial: 145,
      status: "elevated",
      trend: "improving",
    },
    bloodPressure: {
      systolic: 135,
      diastolic: 85,
      status: "elevated",
      trend: "stable",
    },
    cholesterol: {
      total: 190,
      hdl: 45,
      ldl: 120,
      status: "normal",
      trend: "stable",
    },
    thyroid: {
      tsh: 3.2,
      status: "normal",
      trend: "stable",
    },
    hemoglobin: {
      value: 13.5,
      status: "normal",
      trend: "stable",
    },
    bmi: 26.4,
    age: 42,
    gender: "female",
    allergies: ["nuts", "shellfish"],
  }

  // Sample meal recommendations based on health data
  const mealRecommendations = {
    breakfast: [
      {
        name: "Ragi Dosa with Vegetable Stuffing",
        image: "/placeholder.svg?height=200&width=300",
        calories: 320,
        protein: 12,
        carbs: 45,
        fat: 8,
        fiber: 7,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "positive",
        },
        ingredients: [
          "Ragi flour",
          "Vegetables (carrots, beans, spinach)",
          "Cumin seeds",
          "Green chilies",
          "Coriander leaves",
        ],
        alternatives: [
          { name: "Oats Idli", reason: "Even lower glycemic index" },
          { name: "Moong Dal Cheela", reason: "Higher protein content" },
        ],
        warnings: [],
      },
      {
        name: "Vegetable Upma with Sprouts",
        image: "/placeholder.svg?height=200&width=300",
        calories: 280,
        protein: 10,
        carbs: 42,
        fat: 6,
        fiber: 6,
        glycemicIndex: "medium",
        sodium: "medium",
        healthImpact: {
          bloodSugar: "neutral",
          bloodPressure: "neutral",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "positive",
        },
        ingredients: [
          "Semolina (rava)",
          "Mixed vegetables",
          "Sprouted moong",
          "Curry leaves",
          "Mustard seeds",
          "Ginger",
        ],
        alternatives: [
          { name: "Quinoa Upma", reason: "Lower glycemic index" },
          { name: "Broken Wheat Upma", reason: "Higher fiber content" },
        ],
        warnings: [
          { type: "sodium", message: "Contains moderate sodium - monitor your intake for the rest of the day" },
        ],
      },
      {
        name: "Multigrain Porridge with Fruits",
        image: "/placeholder.svg?height=200&width=300",
        calories: 310,
        protein: 9,
        carbs: 52,
        fat: 5,
        fiber: 8,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "neutral",
        },
        ingredients: ["Mixed millets (ragi, jowar, bajra)", "Apple", "Pomegranate", "Cinnamon", "Flaxseeds"],
        alternatives: [
          { name: "Steel-cut Oats Porridge", reason: "Different texture preference" },
          { name: "Barley Porridge", reason: "Alternative grain option" },
        ],
        warnings: [{ type: "allergy", message: "Contains flaxseeds - similar to nuts, monitor for any reaction" }],
      },
    ],
    lunch: [
      {
        name: "Brown Rice with Mixed Dal and Vegetable Curry",
        image: "/placeholder.svg?height=200&width=300",
        calories: 420,
        protein: 16,
        carbs: 65,
        fat: 9,
        fiber: 12,
        glycemicIndex: "medium",
        sodium: "medium",
        healthImpact: {
          bloodSugar: "neutral",
          bloodPressure: "neutral",
          cholesterol: "positive",
          thyroid: "positive",
          hemoglobin: "positive",
        },
        ingredients: [
          "Brown rice",
          "Mixed dal (moong, masoor, toor)",
          "Seasonal vegetables",
          "Turmeric",
          "Cumin",
          "Coriander",
        ],
        alternatives: [
          { name: "Quinoa Bowl", reason: "Lower glycemic index" },
          { name: "Millet Rice", reason: "Better for blood sugar control" },
        ],
        warnings: [{ type: "portion", message: "Monitor portion size of rice to manage blood sugar levels" }],
      },
      {
        name: "Multigrain Roti with Palak Paneer",
        image: "/placeholder.svg?height=200&width=300",
        calories: 380,
        protein: 18,
        carbs: 48,
        fat: 12,
        fiber: 9,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "neutral",
          thyroid: "positive",
          hemoglobin: "very positive",
        },
        ingredients: [
          "Multigrain flour",
          "Spinach",
          "Cottage cheese (paneer)",
          "Tomatoes",
          "Ginger",
          "Garlic",
          "Spices",
        ],
        alternatives: [
          { name: "Jowar Roti with Palak Tofu", reason: "Dairy-free alternative" },
          { name: "Bajra Roti with Palak Dal", reason: "Higher protein, lower fat" },
        ],
        warnings: [],
      },
      {
        name: "Vegetable Khichdi with Yogurt",
        image: "/placeholder.svg?height=200&width=300",
        calories: 340,
        protein: 14,
        carbs: 54,
        fat: 7,
        fiber: 8,
        glycemicIndex: "medium",
        sodium: "low",
        healthImpact: {
          bloodSugar: "neutral",
          bloodPressure: "positive",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "neutral",
        },
        ingredients: ["Rice", "Moong dal", "Mixed vegetables", "Cumin", "Turmeric", "Ginger", "Yogurt"],
        alternatives: [
          { name: "Daliya Khichdi", reason: "Lower glycemic index" },
          { name: "Millet Khichdi", reason: "Better for blood sugar control" },
        ],
        warnings: [{ type: "portion", message: "Monitor portion size to manage blood sugar levels" }],
      },
    ],
    dinner: [
      {
        name: "Grilled Fish with Quinoa and Roasted Vegetables",
        image: "/placeholder.svg?height=200&width=300",
        calories: 360,
        protein: 28,
        carbs: 32,
        fat: 12,
        fiber: 8,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "very positive",
          thyroid: "positive",
          hemoglobin: "positive",
        },
        ingredients: [
          "Fish (local freshwater)",
          "Quinoa",
          "Bell peppers",
          "Zucchini",
          "Broccoli",
          "Olive oil",
          "Lemon",
          "Herbs",
        ],
        alternatives: [
          { name: "Grilled Chicken with Quinoa", reason: "Alternative protein source" },
          { name: "Tofu with Quinoa", reason: "Vegetarian option" },
        ],
        warnings: [],
      },
      {
        name: "Multigrain Roti with Mixed Vegetable Curry",
        image: "/placeholder.svg?height=200&width=300",
        calories: 320,
        protein: 12,
        carbs: 46,
        fat: 8,
        fiber: 10,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "neutral",
        },
        ingredients: ["Multigrain flour", "Seasonal vegetables", "Tomatoes", "Onions", "Spices", "Coriander"],
        alternatives: [
          { name: "Jowar Roti with Curry", reason: "Different grain option" },
          { name: "Bajra Roti with Curry", reason: "Higher mineral content" },
        ],
        warnings: [],
      },
      {
        name: "Vegetable and Sprout Soup with Whole Grain Bread",
        image: "/placeholder.svg?height=200&width=300",
        calories: 280,
        protein: 14,
        carbs: 38,
        fat: 6,
        fiber: 9,
        glycemicIndex: "low",
        sodium: "medium",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "neutral",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "positive",
        },
        ingredients: ["Mixed vegetables", "Sprouted moong", "Vegetable broth", "Garlic", "Herbs", "Whole grain bread"],
        alternatives: [
          { name: "Clear Vegetable Soup", reason: "Lower carb option" },
          { name: "Lentil Soup", reason: "Higher protein content" },
        ],
        warnings: [
          { type: "sodium", message: "Contains moderate sodium from broth - use low sodium version if available" },
        ],
      },
    ],
    snacks: [
      {
        name: "Roasted Makhana (Foxnuts)",
        image: "/placeholder.svg?height=200&width=300",
        calories: 120,
        protein: 4,
        carbs: 18,
        fat: 3,
        fiber: 2,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "neutral",
        },
        ingredients: ["Foxnuts (makhana)", "Roasted cumin powder", "Black pepper", "Minimal oil"],
        alternatives: [
          { name: "Roasted Chana", reason: "Higher protein content" },
          { name: "Puffed Amaranth", reason: "Different texture and flavor" },
        ],
        warnings: [],
      },
      {
        name: "Vegetable and Sprout Salad",
        image: "/placeholder.svg?height=200&width=300",
        calories: 110,
        protein: 6,
        carbs: 14,
        fat: 3,
        fiber: 5,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "positive",
          thyroid: "neutral",
          hemoglobin: "positive",
        },
        ingredients: ["Cucumber", "Carrots", "Sprouted moong", "Lemon juice", "Roasted cumin powder", "Black salt"],
        alternatives: [
          { name: "Fruit Salad", reason: "Sweet alternative" },
          { name: "Kachumber Salad", reason: "Different flavor profile" },
        ],
        warnings: [],
      },
      {
        name: "Buttermilk with Herbs",
        image: "/placeholder.svg?height=200&width=300",
        calories: 80,
        protein: 4,
        carbs: 6,
        fat: 3,
        fiber: 0,
        glycemicIndex: "low",
        sodium: "low",
        healthImpact: {
          bloodSugar: "positive",
          bloodPressure: "positive",
          cholesterol: "neutral",
          thyroid: "neutral",
          hemoglobin: "neutral",
        },
        ingredients: ["Yogurt", "Water", "Cumin powder", "Coriander leaves", "Mint leaves", "Black salt"],
        alternatives: [
          { name: "Coconut Water", reason: "Dairy-free option" },
          { name: "Herbal Tea", reason: "Warm alternative" },
        ],
        warnings: [],
      },
    ],
  }

  const activeMeals = mealRecommendations[activeTab as keyof typeof mealRecommendations] || []

  // Helper function to render health impact icon
  const renderHealthImpactIcon = (impact: string) => {
    switch (impact) {
      case "very positive":
        return <ThumbsUp className="h-4 w-4 text-green-600 fill-green-600" />
      case "positive":
        return <Check className="h-4 w-4 text-green-600" />
      case "neutral":
        return <Minus className="h-4 w-4 text-amber-600" />
      case "negative":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Info className="h-4 w-4 text-blue-600" />
    }
  }

  // Helper component for the minus icon
  const Minus = (props: any) => (
    <div className="w-4 h-4 flex items-center justify-center">
      <div className="w-3 h-0.5 bg-current"></div>
    </div>
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-blue-500" />
          Advanced Health-Aware Meal Recommendations
        </CardTitle>
        <CardDescription>Personalized meal suggestions based on your current health parameters</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={showDetails} onOpenChange={setShowDetails} className="mb-6">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="flex items-center justify-between w-full">
              <span className="flex items-center">
                <Activity className="mr-2 h-4 w-4 text-blue-500" />
                Your Health Parameters
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showDetails ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Droplets className="mr-2 h-4 w-4 text-red-500" />
                    <h3 className="font-medium">Blood Sugar</h3>
                  </div>
                  <Badge className={`${healthData.bloodSugar.status === "elevated" ? "bg-amber-500" : "bg-green-500"}`}>
                    {healthData.bloodSugar.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Fasting</span>
                    <span className="font-medium">{healthData.bloodSugar.fasting} mg/dL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Post-meal</span>
                    <span className="font-medium">{healthData.bloodSugar.postprandial} mg/dL</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <ArrowRight className="h-3 w-3 mr-1 text-green-500" />
                    <span>Trend: {healthData.bloodSugar.trend}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Heart className="mr-2 h-4 w-4 text-red-500" />
                    <h3 className="font-medium">Blood Pressure</h3>
                  </div>
                  <Badge
                    className={`${healthData.bloodPressure.status === "elevated" ? "bg-amber-500" : "bg-green-500"}`}
                  >
                    {healthData.bloodPressure.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Systolic</span>
                    <span className="font-medium">{healthData.bloodPressure.systolic} mmHg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Diastolic</span>
                    <span className="font-medium">{healthData.bloodPressure.diastolic} mmHg</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Minus className="h-3 w-3 mr-1 text-amber-500" />
                    <span>Trend: {healthData.bloodPressure.trend}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-blue-500" />
                    <h3 className="font-medium">Cholesterol</h3>
                  </div>
                  <Badge className="bg-green-500">{healthData.cholesterol.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-medium">{healthData.cholesterol.total} mg/dL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">HDL</span>
                    <span className="font-medium">{healthData.cholesterol.hdl} mg/dL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">LDL</span>
                    <span className="font-medium">{healthData.cholesterol.ldl} mg/dL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Brain className="mr-2 h-4 w-4 text-purple-500" />
                    <h3 className="font-medium">Thyroid</h3>
                  </div>
                  <Badge className="bg-green-500">{healthData.thyroid.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">TSH</span>
                    <span className="font-medium">{healthData.thyroid.tsh} mIU/L</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Minus className="h-3 w-3 mr-1 text-amber-500" />
                    <span>Trend: {healthData.thyroid.trend}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Droplets className="mr-2 h-4 w-4 text-red-500" />
                    <h3 className="font-medium">Hemoglobin</h3>
                  </div>
                  <Badge className="bg-green-500">{healthData.hemoglobin.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Value</span>
                    <span className="font-medium">{healthData.hemoglobin.value} g/dL</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Minus className="h-3 w-3 mr-1 text-amber-500" />
                    <span>Trend: {healthData.hemoglobin.trend}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-green-500" />
                    <h3 className="font-medium">BMI</h3>
                  </div>
                  <Badge className={`${healthData.bmi > 25 ? "bg-amber-500" : "bg-green-500"}`}>
                    {healthData.bmi > 25 ? "Overweight" : "Normal"}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Value</span>
                    <span className="font-medium">{healthData.bmi}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Info className="h-3 w-3 mr-1 text-blue-500" />
                    <span>
                      Age: {healthData.age}, Gender: {healthData.gender}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                <h3 className="font-medium">Allergies & Restrictions</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {healthData.allergies.map((allergy, index) => (
                  <Badge key={index} variant="outline" className="bg-red-50 text-red-700">
                    {allergy}
                  </Badge>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-6">
          {activeMeals.map((meal, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                <div className="relative">
                  <img src={meal.image || "/placeholder.svg"} alt={meal.name} className="w-full h-full object-cover" />
                  {meal.warnings.length > 0 && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-amber-500">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Warning
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{meal.name}</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                    <div className="text-center p-2 bg-blue-50 rounded-md">
                      <div className="text-sm text-muted-foreground">Calories</div>
                      <div className="font-medium">{meal.calories}</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded-md">
                      <div className="text-sm text-muted-foreground">Protein</div>
                      <div className="font-medium">{meal.protein}g</div>
                    </div>
                    <div className="text-center p-2 bg-amber-50 rounded-md">
                      <div className="text-sm text-muted-foreground">Carbs</div>
                      <div className="font-medium">{meal.carbs}g</div>
                    </div>
                    <div className="text-center p-2 bg-purple-50 rounded-md">
                      <div className="text-sm text-muted-foreground">Fiber</div>
                      <div className="font-medium">{meal.fiber}g</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Health Impact</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <div className="flex items-center p-2 bg-gray-50 rounded-md">
                        <Droplets className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Blood Sugar:</span>
                        <span className="ml-auto">{renderHealthImpactIcon(meal.healthImpact.bloodSugar)}</span>
                      </div>
                      <div className="flex items-center p-2 bg-gray-50 rounded-md">
                        <Heart className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Blood Pressure:</span>
                        <span className="ml-auto">{renderHealthImpactIcon(meal.healthImpact.bloodPressure)}</span>
                      </div>
                      <div className="flex items-center p-2 bg-gray-50 rounded-md">
                        <Activity className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm">Cholesterol:</span>
                        <span className="ml-auto">{renderHealthImpactIcon(meal.healthImpact.cholesterol)}</span>
                      </div>
                      <div className="flex items-center p-2 bg-gray-50 rounded-md">
                        <Brain className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-sm">Thyroid:</span>
                        <span className="ml-auto">{renderHealthImpactIcon(meal.healthImpact.thyroid)}</span>
                      </div>
                      <div className="flex items-center p-2 bg-gray-50 rounded-md">
                        <Droplets className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">Hemoglobin:</span>
                        <span className="ml-auto">{renderHealthImpactIcon(meal.healthImpact.hemoglobin)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Ingredients</h4>
                    <div className="flex flex-wrap gap-1">
                      {meal.ingredients.map((ingredient, i) => (
                        <Badge key={i} variant="outline" className="bg-green-50">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {meal.warnings.length > 0 && (
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                      <h4 className="text-sm font-medium flex items-center mb-1">
                        <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                        Warnings
                      </h4>
                      <ul className="space-y-1">
                        {meal.warnings.map((warning, i) => (
                          <li key={i} className="text-sm text-amber-700 flex items-start">
                            <div className="h-4 w-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mr-2 flex-shrink-0 text-[10px] mt-0.5">
                              !
                            </div>
                            {warning.message}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <Collapsible className="w-full">
                      <CollapsibleTrigger asChild>
                        <Button variant="link" className="p-0 h-auto text-blue-600">
                          View Alternatives
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {meal.alternatives.map((alt, i) => (
                          <div key={i} className="flex items-center p-2 bg-blue-50 rounded-md">
                            <div>
                              <div className="font-medium text-sm">{alt.name}</div>
                              <div className="text-xs text-muted-foreground">{alt.reason}</div>
                            </div>
                            <Button variant="ghost" size="sm" className="ml-auto">
                              <Plus className="h-4 w-4 mr-1" />
                              Swap
                            </Button>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    <Button className="bg-blue-500 hover:bg-blue-600">
                      <Utensils className="mr-2 h-4 w-4" />
                      Add to Meal Plan
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
