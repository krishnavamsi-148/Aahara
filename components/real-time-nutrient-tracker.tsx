"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, TrendingUp, TrendingDown, Clock, Info, Bell, Check } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface NutrientData {
  name: string
  current: number
  target: number
  unit: string
  percentage: number
  color: string
  trend: "up" | "down" | "stable"
}

export function RealTimeNutrientTracker() {
  const [activeTab, setActiveTab] = useState("today")
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState<"excess" | "deficiency">("excess")
  const [alertNutrient, setAlertNutrient] = useState("Sodium")

  // Simulate real-time updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true)
      setAlertType("excess")
      setAlertNutrient("Sodium")
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const nutrients: NutrientData[] = [
    {
      name: "Calories",
      current: 1450,
      target: 2000,
      unit: "kcal",
      percentage: 72,
      color: "bg-amber-500",
      trend: "up",
    },
    {
      name: "Protein",
      current: 65,
      target: 80,
      unit: "g",
      percentage: 81,
      color: "bg-blue-500",
      trend: "up",
    },
    {
      name: "Carbs",
      current: 180,
      target: 250,
      unit: "g",
      percentage: 72,
      color: "bg-orange-500",
      trend: "stable",
    },
    {
      name: "Fat",
      current: 48,
      target: 65,
      unit: "g",
      percentage: 74,
      color: "bg-red-500",
      trend: "down",
    },
    {
      name: "Fiber",
      current: 18,
      target: 25,
      unit: "g",
      percentage: 72,
      color: "bg-green-500",
      trend: "up",
    },
    {
      name: "Sodium",
      current: 2100,
      target: 2300,
      unit: "mg",
      percentage: 91,
      color: "bg-purple-500",
      trend: "up",
    },
    {
      name: "Sugar",
      current: 32,
      target: 36,
      unit: "g",
      percentage: 89,
      color: "bg-pink-500",
      trend: "up",
    },
    {
      name: "Iron",
      current: 12,
      target: 18,
      unit: "mg",
      percentage: 67,
      color: "bg-emerald-500",
      trend: "stable",
    },
  ]

  const recentMeals = [
    {
      name: "Breakfast - Ragi Dosa with Sambar",
      time: "8:30 AM",
      calories: 320,
      nutrients: [
        { name: "Protein", amount: 12, unit: "g" },
        { name: "Carbs", amount: 45, unit: "g" },
        { name: "Fat", amount: 8, unit: "g" },
      ],
    },
    {
      name: "Lunch - Vegetable Pulao with Raita",
      time: "1:15 PM",
      calories: 480,
      nutrients: [
        { name: "Protein", amount: 15, unit: "g" },
        { name: "Carbs", amount: 65, unit: "g" },
        { name: "Fat", amount: 12, unit: "g" },
      ],
    },
    {
      name: "Snack - Mixed Nuts and Fruits",
      time: "4:30 PM",
      calories: 210,
      nutrients: [
        { name: "Protein", amount: 6, unit: "g" },
        { name: "Carbs", amount: 18, unit: "g" },
        { name: "Fat", amount: 14, unit: "g" },
      ],
    },
  ]

  const nutrientAlerts = [
    {
      type: "excess",
      nutrient: "Sodium",
      message: "You're approaching your daily sodium limit. Consider low-sodium options for your next meal.",
      time: "Just now",
    },
    {
      type: "deficiency",
      nutrient: "Protein",
      message: "You're below your protein target for the day. Consider adding a protein-rich snack.",
      time: "2 hours ago",
    },
    {
      type: "excess",
      nutrient: "Sugar",
      message: "You've consumed 80% of your daily sugar limit. Try to avoid sugary foods for the rest of the day.",
      time: "Yesterday",
    },
  ]

  return (
    <>
      <Card className="border-saffron-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <span className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-saffron-500" />
              Real-Time Nutrient Tracker
            </span>
            <Badge variant="outline" className="bg-saffron-50 text-saffron-700">
              <Clock className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="today" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="meals">Recent Meals</TabsTrigger>
              <TabsTrigger value="alerts">
                Alerts
                <Badge className="ml-1 bg-red-500 text-white h-5 w-5 p-0 flex items-center justify-center rounded-full">
                  3
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {nutrients.map((nutrient) => (
                  <div key={nutrient.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">{nutrient.name}</span>
                        {nutrient.percentage > 90 && <AlertCircle className="h-4 w-4 ml-1 text-red-500" />}
                        {nutrient.percentage < 30 && <AlertCircle className="h-4 w-4 ml-1 text-amber-500" />}
                      </div>
                      <div className="flex items-center text-sm">
                        <span>
                          {nutrient.current}/{nutrient.target} {nutrient.unit}
                        </span>
                        {nutrient.trend === "up" && <TrendingUp className="h-3 w-3 ml-1 text-green-500" />}
                        {nutrient.trend === "down" && <TrendingDown className="h-3 w-3 ml-1 text-red-500" />}
                      </div>
                    </div>
                    <Progress value={nutrient.percentage} className={`h-2 ${nutrient.color}`} />
                  </div>
                ))}
              </div>

              <div className="bg-saffron-50 p-3 rounded-lg border border-saffron-100">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-saffron-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Nutrient Insights</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      You're doing well on protein and fiber intake today. Consider reducing sodium in your next meal.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="meals" className="space-y-4">
              {recentMeals.map((meal, index) => (
                <Card key={index} className="border-saffron-100">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{meal.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{meal.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <Badge className="bg-amber-100 text-amber-800 mr-2">{meal.calories} kcal</Badge>
                      {meal.nutrients.map((nutrient, i) => (
                        <Badge key={i} variant="outline" className="mr-2">
                          {nutrient.amount}
                          {nutrient.unit} {nutrient.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                View All Meals
              </Button>
            </TabsContent>

            <TabsContent value="alerts" className="space-y-4">
              {nutrientAlerts.map((alert, index) => (
                <Card key={index} className={`border-${alert.type === "excess" ? "red" : "amber"}-200`}>
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                          alert.type === "excess" ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-600"
                        }`}
                      >
                        <AlertCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium">
                            {alert.nutrient} {alert.type === "excess" ? "Alert" : "Deficiency"}
                          </h4>
                          <span className="text-xs text-muted-foreground">{alert.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                Mark All as Read
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center text-red-600">
              <Bell className="h-5 w-5 mr-2" />
              {alertType === "excess" ? "Nutrient Excess Alert" : "Nutrient Deficiency Alert"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {alertType === "excess"
                ? `You're approaching your daily ${alertNutrient} limit. Consider low-${alertNutrient.toLowerCase()} options for your next meal.`
                : `You're below your ${alertNutrient} target for the day. Consider adding a ${alertNutrient.toLowerCase()}-rich snack.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Dismiss</AlertDialogCancel>
            <AlertDialogAction className="bg-saffron-500 hover:bg-saffron-600">
              <Check className="h-4 w-4 mr-2" />
              View Recommendations
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
