"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Bell, Heart, TrendingDown, TrendingUp, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

// Sample health data
const healthData = {
  glucose: {
    current: 135,
    unit: "mg/dL",
    status: "elevated", // normal, elevated, low
    trend: "decreasing",
    history: [
      { time: "6:00 AM", value: 110 },
      { time: "9:00 AM", value: 145 },
      { time: "12:00 PM", value: 160 },
      { time: "3:00 PM", value: 150 },
      { time: "6:00 PM", value: 135 },
    ],
    ranges: {
      low: { min: 0, max: 70 },
      normal: { min: 70, max: 140 },
      elevated: { min: 140, max: 300 },
    },
    recommendations: {
      elevated: [
        "Consider a low-carb meal for your next meal",
        "Take a 15-minute walk to help lower blood sugar",
        "Drink a glass of water to stay hydrated",
      ],
      normal: [
        "Continue with your regular meal plan",
        "Stay hydrated throughout the day",
        "Maintain your regular activity level",
      ],
      low: [
        "Consume 15g of fast-acting carbohydrates",
        "Check your blood sugar again in 15 minutes",
        "Have a balanced meal if it's mealtime",
      ],
    },
  },
  bloodPressure: {
    current: { systolic: 128, diastolic: 82 },
    unit: "mmHg",
    status: "normal", // normal, elevated, high
    trend: "stable",
    history: [
      { time: "6:00 AM", systolic: 125, diastolic: 80 },
      { time: "9:00 AM", systolic: 130, diastolic: 85 },
      { time: "12:00 PM", systolic: 135, diastolic: 87 },
      { time: "3:00 PM", systolic: 132, diastolic: 84 },
      { time: "6:00 PM", systolic: 128, diastolic: 82 },
    ],
    ranges: {
      normal: { systolic: { min: 0, max: 130 }, diastolic: { min: 0, max: 85 } },
      elevated: { systolic: { min: 130, max: 140 }, diastolic: { min: 85, max: 90 } },
      high: { systolic: { min: 140, max: 300 }, diastolic: { min: 90, max: 200 } },
    },
    recommendations: {
      normal: [
        "Continue with your regular low-sodium meal plan",
        "Maintain your regular exercise routine",
        "Keep monitoring your blood pressure regularly",
      ],
      elevated: [
        "Reduce sodium intake in your next meal",
        "Consider a relaxation activity like deep breathing",
        "Avoid caffeine for the next few hours",
      ],
      high: [
        "Take your prescribed medication if applicable",
        "Rest and avoid strenuous activity",
        "Choose a heart-healthy, low-sodium meal",
      ],
    },
  },
}

export function HealthMonitor() {
  const [activeTab, setActiveTab] = useState("glucose")
  const [alertsEnabled, setAlertsEnabled] = useState(true)
  const [familyAlertsEnabled, setFamilyAlertsEnabled] = useState(true)
  const [mealSuggestions, setMealSuggestions] = useState(true)

  // Get current status and recommendations
  const currentData = healthData[activeTab]
  const status = currentData.status
  const recommendations = currentData.recommendations[status]

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "normal":
        return "bg-green-500"
      case "elevated":
        return "bg-amber-500"
      case "high":
        return "bg-red-500"
      case "low":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  // Function to get trend icon
  const getTrendIcon = (trend) => {
    switch (trend) {
      case "increasing":
        return <TrendingUp className="h-4 w-4 text-red-500" />
      case "decreasing":
        return <TrendingDown className="h-4 w-4 text-green-500" />
      case "stable":
        return <Activity className="h-4 w-4 text-blue-500" />
      default:
        return null
    }
  }

  // Function to get status text
  const getStatusText = (status) => {
    switch (status) {
      case "normal":
        return "Normal"
      case "elevated":
        return "Elevated"
      case "high":
        return "High"
      case "low":
        return "Low"
      default:
        return "Unknown"
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <Heart className="mr-2 h-5 w-5 text-red-500" />
          Real-Time Health Monitor
        </CardTitle>
        <CardDescription>Track your health metrics and get personalized meal recommendations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="glucose">Blood Glucose</TabsTrigger>
            <TabsTrigger value="bloodPressure">Blood Pressure</TabsTrigger>
          </TabsList>

          <TabsContent value="glucose" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-orange-800">{healthData.glucose.current}</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-bold text-lg">Blood Glucose</h3>
                    <Badge className={`ml-2 ${getStatusColor(healthData.glucose.status)}`}>
                      {getStatusText(healthData.glucose.status)}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{healthData.glucose.unit}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      {getTrendIcon(healthData.glucose.trend)}
                      <span className="ml-1">
                        {healthData.glucose.trend === "increasing"
                          ? "Rising"
                          : healthData.glucose.trend === "decreasing"
                            ? "Falling"
                            : "Stable"}
                      </span>
                    </span>
                    <span className="mx-2">•</span>
                    <span>Last updated: 15 mins ago</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" size="sm" className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                Log Reading
              </Button>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="h-[200px]">
                  <ChartContainer>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={healthData.glucose.history}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis domain={[70, 180]} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#f97316"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <div>
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                    Low (&lt;70 mg/dL)
                  </div>
                  <div>
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                    Normal (70-140 mg/dL)
                  </div>
                  <div>
                    <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-1"></span>
                    Elevated (&gt;140 mg/dL)
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="font-medium mb-2">Recommendations Based on Current Reading:</h3>
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-[10px]">
                          {index + 1}
                        </div>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bloodPressure" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <span className="text-sm font-bold text-red-800">
                    {healthData.bloodPressure.current.systolic}/{healthData.bloodPressure.current.diastolic}
                  </span>
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-bold text-lg">Blood Pressure</h3>
                    <Badge className={`ml-2 ${getStatusColor(healthData.bloodPressure.status)}`}>
                      {getStatusText(healthData.bloodPressure.status)}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{healthData.bloodPressure.unit}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      {getTrendIcon(healthData.bloodPressure.trend)}
                      <span className="ml-1">
                        {healthData.bloodPressure.trend === "increasing"
                          ? "Rising"
                          : healthData.bloodPressure.trend === "decreasing"
                            ? "Falling"
                            : "Stable"}
                      </span>
                    </span>
                    <span className="mx-2">•</span>
                    <span>Last updated: 30 mins ago</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" size="sm" className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                Log Reading
              </Button>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="h-[200px]">
                  <ChartContainer>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={healthData.bloodPressure.history}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis domain={[60, 160]} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="systolic"
                          stroke="#ef4444"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                          name="Systolic"
                        />
                        <Line
                          type="monotone"
                          dataKey="diastolic"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                          name="Diastolic"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <div>
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                    Normal (&lt;130/85)
                  </div>
                  <div>
                    <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mr-1"></span>
                    Elevated (130-140/85-90)
                  </div>
                  <div>
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                    High (&gt;140/90)
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="font-medium mb-2">Recommendations Based on Current Reading:</h3>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-[10px]">
                          {index + 1}
                        </div>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Separator />

        <div>
          <h3 className="font-medium mb-3">Monitoring Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="alerts">Health Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive notifications when readings are out of range</p>
              </div>
              <Switch id="alerts" checked={alertsEnabled} onCheckedChange={setAlertsEnabled} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="family-alerts">Family Alerts</Label>
                <p className="text-sm text-muted-foreground">Alert family members for critical readings</p>
              </div>
              <Switch id="family-alerts" checked={familyAlertsEnabled} onCheckedChange={setFamilyAlertsEnabled} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="meal-suggestions">Meal Suggestions</Label>
                <p className="text-sm text-muted-foreground">Get meal recommendations based on health readings</p>
              </div>
              <Switch id="meal-suggestions" checked={mealSuggestions} onCheckedChange={setMealSuggestions} />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-start">
            <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-800">Family Dashboard</h3>
              <p className="text-sm text-blue-700 mt-1">
                3 family members are monitoring your health data. Your last critical alert was 5 days ago.
              </p>
              <Button variant="link" className="p-0 h-auto text-blue-600 text-sm mt-1">
                Manage family access
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
