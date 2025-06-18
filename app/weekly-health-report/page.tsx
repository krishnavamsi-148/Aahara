"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Heart,
  Droplets,
  Flame,
  Utensils,
} from "lucide-react"

export default function WeeklyHealthReportPage() {
  const [selectedWeek, setSelectedWeek] = useState("current")
  const [selectedTab, setSelectedTab] = useState("overview")

  // Sample data for the weekly report
  const weeklyData = {
    current: {
      startDate: "May 8, 2023",
      endDate: "May 14, 2023",
      overview: {
        caloriesAvg: 1850,
        caloriesGoal: 2000,
        proteinAvg: 78,
        proteinGoal: 80,
        fiberAvg: 22,
        fiberGoal: 25,
        waterAvg: 2.1,
        waterGoal: 2.5,
        mealBalance: 72,
        mealBalanceGoal: 80,
      },
      impacts: {
        bloodSugar: {
          score: 85,
          change: 5,
          status: "good",
          message: "Your meal choices have helped maintain stable blood sugar levels.",
        },
        bloodPressure: {
          score: 78,
          change: 2,
          status: "good",
          message: "Your sodium intake is well-managed, supporting healthy blood pressure.",
        },
        weight: {
          score: 65,
          change: -3,
          status: "moderate",
          message: "Your calorie balance is slightly off target. Consider adjusting portion sizes.",
        },
        energy: {
          score: 82,
          change: 7,
          status: "good",
          message: "Good balance of complex carbs providing sustained energy throughout the day.",
        },
      },
      nutrients: {
        vitamins: {
          A: 92,
          C: 88,
          D: 65,
          E: 70,
          B12: 85,
        },
        minerals: {
          calcium: 75,
          iron: 68,
          magnesium: 80,
          zinc: 72,
          potassium: 85,
        },
      },
      mealTypes: {
        breakfast: {
          balance: 80,
          mostCommon: "Oats with fruits and nuts",
          improvement: "Add more protein sources",
        },
        lunch: {
          balance: 75,
          mostCommon: "Rice, dal, and vegetables",
          improvement: "Increase vegetable portion",
        },
        dinner: {
          balance: 65,
          mostCommon: "Roti with curry",
          improvement: "Add more fiber-rich foods",
        },
        snacks: {
          balance: 60,
          mostCommon: "Fruits and nuts",
          improvement: "Reduce processed snacks",
        },
      },
      recommendations: [
        {
          id: 1,
          title: "Increase leafy greens",
          description: "Add more spinach, kale, or methi to your meals for iron and fiber.",
          priority: "high",
        },
        {
          id: 2,
          title: "Reduce added sugar",
          description: "Your dessert choices are adding too much sugar. Try fruit-based alternatives.",
          priority: "medium",
        },
        {
          id: 3,
          title: "More whole grains",
          description: "Replace white rice with brown rice or millets for better blood sugar control.",
          priority: "medium",
        },
        {
          id: 4,
          title: "Hydration reminder",
          description: "You're consistently below your water intake goal. Set reminders to drink water.",
          priority: "high",
        },
      ],
      aiInsights:
        "Your diet this week shows good variety but could use more leafy greens and whole grains. Your protein intake is adequate, but fiber is slightly below target. The timing of your meals is consistent, which is excellent for metabolic health. Consider adding a mid-morning protein-rich snack to maintain energy levels throughout the day. Your weekend meals tend to be higher in calories and lower in nutrients - planning ahead could help maintain consistency.",
    },
    previous: {
      startDate: "May 1, 2023",
      endDate: "May 7, 2023",
      overview: {
        caloriesAvg: 1920,
        caloriesGoal: 2000,
        proteinAvg: 75,
        proteinGoal: 80,
        fiberAvg: 20,
        fiberGoal: 25,
        waterAvg: 1.9,
        waterGoal: 2.5,
        mealBalance: 68,
        mealBalanceGoal: 80,
      },
      impacts: {
        bloodSugar: {
          score: 80,
          change: 2,
          status: "good",
          message: "Your meal choices have helped maintain stable blood sugar levels.",
        },
        bloodPressure: {
          score: 76,
          change: 1,
          status: "good",
          message: "Your sodium intake is well-managed, supporting healthy blood pressure.",
        },
        weight: {
          score: 68,
          change: -1,
          status: "moderate",
          message: "Your calorie balance is slightly off target. Consider adjusting portion sizes.",
        },
        energy: {
          score: 75,
          change: 3,
          status: "good",
          message: "Good balance of complex carbs providing sustained energy throughout the day.",
        },
      },
      nutrients: {
        vitamins: {
          A: 88,
          C: 85,
          D: 60,
          E: 65,
          B12: 80,
        },
        minerals: {
          calcium: 70,
          iron: 65,
          magnesium: 75,
          zinc: 70,
          potassium: 80,
        },
      },
      mealTypes: {
        breakfast: {
          balance: 75,
          mostCommon: "Oats with fruits and nuts",
          improvement: "Add more protein sources",
        },
        lunch: {
          balance: 70,
          mostCommon: "Rice, dal, and vegetables",
          improvement: "Increase vegetable portion",
        },
        dinner: {
          balance: 60,
          mostCommon: "Roti with curry",
          improvement: "Add more fiber-rich foods",
        },
        snacks: {
          balance: 55,
          mostCommon: "Fruits and nuts",
          improvement: "Reduce processed snacks",
        },
      },
      recommendations: [
        {
          id: 1,
          title: "Increase leafy greens",
          description: "Add more spinach, kale, or methi to your meals for iron and fiber.",
          priority: "high",
        },
        {
          id: 2,
          title: "Reduce added sugar",
          description: "Your dessert choices are adding too much sugar. Try fruit-based alternatives.",
          priority: "medium",
        },
        {
          id: 3,
          title: "More whole grains",
          description: "Replace white rice with brown rice or millets for better blood sugar control.",
          priority: "medium",
        },
        {
          id: 4,
          title: "Hydration reminder",
          description: "You're consistently below your water intake goal. Set reminders to drink water.",
          priority: "high",
        },
      ],
      aiInsights:
        "Your diet this week shows reasonable variety but needs more leafy greens and whole grains. Your protein intake is adequate, but fiber is below target. The timing of your meals varies significantly, which may impact your metabolic health. Consider adding a mid-morning protein-rich snack to maintain energy levels throughout the day. Your weekend meals tend to be higher in calories and lower in nutrients - planning ahead could help maintain consistency.",
    },
  }

  const currentData = weeklyData[selectedWeek as keyof typeof weeklyData]

  // Function to render the impact score badge
  const renderImpactBadge = (status: string) => {
    if (status === "good") {
      return <Badge className="bg-green-100 text-green-800 border-green-200">Good</Badge>
    } else if (status === "moderate") {
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Moderate</Badge>
    } else {
      return <Badge className="bg-red-100 text-red-800 border-red-200">Needs Improvement</Badge>
    }
  }

  // Function to render the trend icon
  const renderTrendIcon = (change: number) => {
    if (change > 0) {
      return <TrendingUp className="h-4 w-4 text-green-600" />
    } else if (change < 0) {
      return <TrendingDown className="h-4 w-4 text-red-600" />
    } else {
      return null
    }
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Weekly Health Report</h1>
          <p className="text-muted-foreground mt-1">Track your nutrition and health metrics over time</p>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Button variant="outline" size="icon" onClick={() => setSelectedWeek("previous")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="mx-4 text-sm">
            <div className="font-medium">
              {currentData.startDate} - {currentData.endDate}
            </div>
            <div className="text-muted-foreground text-xs">
              {selectedWeek === "current" ? "Current Week" : "Previous Week"}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSelectedWeek("current")}
            disabled={selectedWeek === "current"}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="impacts">Health Impacts</TabsTrigger>
          <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Daily Calories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.overview.caloriesAvg}</div>
                <div className="text-xs text-muted-foreground mt-1">Goal: {currentData.overview.caloriesGoal} kcal</div>
                <Progress
                  value={(currentData.overview.caloriesAvg / currentData.overview.caloriesGoal) * 100}
                  className="h-2 mt-2"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Protein Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.overview.proteinAvg}g</div>
                <div className="text-xs text-muted-foreground mt-1">Goal: {currentData.overview.proteinGoal}g</div>
                <Progress
                  value={(currentData.overview.proteinAvg / currentData.overview.proteinGoal) * 100}
                  className="h-2 mt-2"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Fiber Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.overview.fiberAvg}g</div>
                <div className="text-xs text-muted-foreground mt-1">Goal: {currentData.overview.fiberGoal}g</div>
                <Progress
                  value={(currentData.overview.fiberAvg / currentData.overview.fiberGoal) * 100}
                  className="h-2 mt-2"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Water Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.overview.waterAvg}L</div>
                <div className="text-xs text-muted-foreground mt-1">Goal: {currentData.overview.waterGoal}L</div>
                <Progress
                  value={(currentData.overview.waterAvg / currentData.overview.waterGoal) * 100}
                  className="h-2 mt-2"
                />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Meal Balance Analysis</CardTitle>
              <CardDescription>Breakdown of your meal composition and balance throughout the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="text-sm font-medium">Overall Meal Balance</div>
                    <div className="text-sm">{currentData.overview.mealBalance}% of goal</div>
                  </div>
                  <Progress
                    value={(currentData.overview.mealBalance / currentData.overview.mealBalanceGoal) * 100}
                    className="h-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(currentData.mealTypes).map(([key, value]) => (
                    <div key={key} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium capitalize">{key}</div>
                        <div className="text-sm">{value.balance}%</div>
                      </div>
                      <Progress value={value.balance} className="h-1.5 mb-3" />
                      <div className="text-sm font-medium mb-1">Most Common:</div>
                      <div className="text-sm text-muted-foreground mb-2">{value.mostCommon}</div>
                      <div className="text-sm font-medium mb-1">Suggestion:</div>
                      <div className="text-sm text-muted-foreground">{value.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Insights</CardTitle>
              <CardDescription>Personalized analysis based on your eating patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm leading-relaxed">{currentData.aiInsights}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                View Full History
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="impacts" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                  Blood Sugar Impact
                </CardTitle>
                <CardDescription>How your food choices affect your blood sugar levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold">{currentData.impacts.bloodSugar.score}</div>
                  <div className="flex items-center">
                    {renderImpactBadge(currentData.impacts.bloodSugar.status)}
                    <div className="flex items-center ml-2">
                      {renderTrendIcon(currentData.impacts.bloodSugar.change)}
                      <span className="text-sm ml-1">{Math.abs(currentData.impacts.bloodSugar.change)}%</span>
                    </div>
                  </div>
                </div>
                <Progress value={currentData.impacts.bloodSugar.score} className="h-2 mb-4" />
                <p className="text-sm text-muted-foreground">{currentData.impacts.bloodSugar.message}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Blood Pressure Impact
                </CardTitle>
                <CardDescription>How your food choices affect your blood pressure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold">{currentData.impacts.bloodPressure.score}</div>
                  <div className="flex items-center">
                    {renderImpactBadge(currentData.impacts.bloodPressure.status)}
                    <div className="flex items-center ml-2">
                      {renderTrendIcon(currentData.impacts.bloodPressure.change)}
                      <span className="text-sm ml-1">{Math.abs(currentData.impacts.bloodPressure.change)}%</span>
                    </div>
                  </div>
                </div>
                <Progress value={currentData.impacts.bloodPressure.score} className="h-2 mb-4" />
                <p className="text-sm text-muted-foreground">{currentData.impacts.bloodPressure.message}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Flame className="h-5 w-5 mr-2 text-orange-500" />
                  Weight Management Impact
                </CardTitle>
                <CardDescription>How your food choices affect your weight goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold">{currentData.impacts.weight.score}</div>
                  <div className="flex items-center">
                    {renderImpactBadge(currentData.impacts.weight.status)}
                    <div className="flex items-center ml-2">
                      {renderTrendIcon(currentData.impacts.weight.change)}
                      <span className="text-sm ml-1">{Math.abs(currentData.impacts.weight.change)}%</span>
                    </div>
                  </div>
                </div>
                <Progress value={currentData.impacts.weight.score} className="h-2 mb-4" />
                <p className="text-sm text-muted-foreground">{currentData.impacts.weight.message}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="h-5 w-5 mr-2 text-green-500" />
                  Energy Levels Impact
                </CardTitle>
                <CardDescription>How your food choices affect your daily energy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold">{currentData.impacts.energy.score}</div>
                  <div className="flex items-center">
                    {renderImpactBadge(currentData.impacts.energy.status)}
                    <div className="flex items-center ml-2">
                      {renderTrendIcon(currentData.impacts.energy.change)}
                      <span className="text-sm ml-1">{Math.abs(currentData.impacts.energy.change)}%</span>
                    </div>
                  </div>
                </div>
                <Progress value={currentData.impacts.energy.score} className="h-2 mb-4" />
                <p className="text-sm text-muted-foreground">{currentData.impacts.energy.message}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Impact Trends</CardTitle>
              <CardDescription>How your health metrics have changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">Impact trend chart will be displayed here</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Trends
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="nutrients" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vitamin Intake</CardTitle>
                <CardDescription>Percentage of recommended daily intake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(currentData.nutrients.vitamins).map(([vitamin, value]) => (
                    <div key={vitamin}>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm font-medium">Vitamin {vitamin}</div>
                        <div className="text-sm">
                          {value}%{value < 70 && <AlertCircle className="h-3 w-3 text-amber-500 inline ml-1" />}
                        </div>
                      </div>
                      <Progress value={value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mineral Intake</CardTitle>
                <CardDescription>Percentage of recommended daily intake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(currentData.nutrients.minerals).map(([mineral, value]) => (
                    <div key={mineral}>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm font-medium capitalize">{mineral}</div>
                        <div className="text-sm">
                          {value}%{value < 70 && <AlertCircle className="h-3 w-3 text-amber-500 inline ml-1" />}
                        </div>
                      </div>
                      <Progress value={value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Nutrient Sources</CardTitle>
              <CardDescription>Top food sources for essential nutrients in your diet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Protein</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Dal</span>
                      <span className="text-muted-foreground">35%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Paneer</span>
                      <span className="text-muted-foreground">25%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Yogurt</span>
                      <span className="text-muted-foreground">15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Others</span>
                      <span className="text-muted-foreground">25%</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Fiber</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Whole Grains</span>
                      <span className="text-muted-foreground">40%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vegetables</span>
                      <span className="text-muted-foreground">30%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fruits</span>
                      <span className="text-muted-foreground">20%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Others</span>
                      <span className="text-muted-foreground">10%</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Iron</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Leafy Greens</span>
                      <span className="text-muted-foreground">45%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lentils</span>
                      <span className="text-muted-foreground">30%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Whole Grains</span>
                      <span className="text-muted-foreground">15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Others</span>
                      <span className="text-muted-foreground">10%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Nutrients
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on your eating patterns and health goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentData.recommendations.map((rec) => (
                  <div key={rec.id} className="border rounded-lg p-4">
                    <div className="flex items-start">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                          rec.priority === "high"
                            ? "bg-red-500"
                            : rec.priority === "medium"
                              ? "bg-amber-500"
                              : "bg-green-500"
                        }`}
                      ></div>
                      <div>
                        <h3 className="font-medium">{rec.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>
                      </div>
                      <Badge
                        className={`ml-auto ${
                          rec.priority === "high"
                            ? "bg-red-100 text-red-800 border-red-200"
                            : rec.priority === "medium"
                              ? "bg-amber-100 text-amber-800 border-amber-200"
                              : "bg-green-100 text-green-800 border-green-200"
                        }`}
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suggested Meal Plans</CardTitle>
              <CardDescription>Personalized meal plans based on your health data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Balanced breakfast"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-saffron-500">Breakfast</Badge>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Protein-Rich Breakfast</h3>
                    <p className="text-xs text-muted-foreground mt-1">Addresses your protein intake goals</p>
                    <Button variant="link" className="p-0 h-auto text-xs mt-2">
                      View Plan
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Fiber-rich lunch"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-saffron-500">Lunch</Badge>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Fiber-Rich Lunch</h3>
                    <p className="text-xs text-muted-foreground mt-1">Helps meet your daily fiber requirements</p>
                    <Button variant="link" className="p-0 h-auto text-xs mt-2">
                      View Plan
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Light dinner"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-saffron-500">Dinner</Badge>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Light & Balanced Dinner</h3>
                    <p className="text-xs text-muted-foreground mt-1">Optimized for better sleep and digestion</p>
                    <Button variant="link" className="p-0 h-auto text-xs mt-2">
                      View Plan
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-saffron-500 hover:bg-saffron-600">Get Custom Meal Plan</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
