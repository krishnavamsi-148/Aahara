"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Sample user data
const userData = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  phone: "+91 9876543210",
  address: "123 HSR Layout, Bangalore",
  avatar: "/placeholder.svg?height=100&width=100",
  memberSince: "January 2023",
  healthConditions: ["Type 2 Diabetes", "Hypertension"],
  dietaryPreferences: ["Vegetarian", "Low-Sodium"],
  allergies: ["Peanuts", "Shellfish"],
  height: 165, // cm
  weight: 68, // kg
  bmi: 25.0,
  voucherPoints: 750,
  healthMetrics: {
    bloodSugar: {
      current: 140,
      target: 130,
      unit: "mg/dL",
      history: [
        { date: "Jan", value: 160 },
        { date: "Feb", value: 155 },
        { date: "Mar", value: 150 },
        { date: "Apr", value: 145 },
        { date: "May", value: 140 },
      ],
    },
    bloodPressure: {
      current: "130/85",
      target: "120/80",
      unit: "mmHg",
      history: [
        { date: "Jan", systolic: 140, diastolic: 90 },
        { date: "Feb", systolic: 138, diastolic: 88 },
        { date: "Mar", systolic: 135, diastolic: 87 },
        { date: "Apr", systolic: 132, diastolic: 86 },
        { date: "May", systolic: 130, diastolic: 85 },
      ],
    },
    cholesterol: {
      current: 190,
      target: 180,
      unit: "mg/dL",
      history: [
        { date: "Jan", value: 210 },
        { date: "Feb", value: 205 },
        { date: "Mar", value: 200 },
        { date: "Apr", value: 195 },
        { date: "May", value: 190 },
      ],
    },
  },
  nutritionSummary: {
    calories: {
      average: 1850,
      goal: 2000,
    },
    macros: [
      { name: "Protein", value: 25, color: "#10b981" },
      { name: "Carbs", value: 55, color: "#3b82f6" },
      { name: "Fat", value: 20, color: "#f59e0b" },
    ],
    weeklyProgress: [
      { day: "Mon", calories: 1950, protein: 95, carbs: 220, fat: 45 },
      { day: "Tue", calories: 1850, protein: 100, carbs: 200, fat: 40 },
      { day: "Wed", calories: 2050, protein: 110, carbs: 230, fat: 42 },
      { day: "Thu", calories: 1800, protein: 90, carbs: 210, fat: 38 },
      { day: "Fri", calories: 1900, protein: 105, carbs: 215, fat: 40 },
      { day: "Sat", calories: 2100, protein: 115, carbs: 240, fat: 45 },
      { day: "Sun", calories: 1950, protein: 100, carbs: 220, fat: 42 },
    ],
  },
  achievements: [
    {
      name: "30-Day Streak",
      description: "Completed 30 consecutive days of logging meals",
      date: "May 15, 2023",
      icon: "🔥",
    },
    {
      name: "Sugar Reducer",
      description: "Reduced average blood sugar by 20 points",
      date: "April 10, 2023",
      icon: "🍯",
    },
    { name: "Recipe Master", description: "Tried 25 different healthy recipes", date: "March 22, 2023", icon: "👨‍🍳" },
  ],
  recentOrders: [
    { id: "ORD12345", date: "May 20, 2023", items: 3, total: 1299, status: "Delivered" },
    { id: "ORD12346", date: "May 10, 2023", items: 2, total: 899, status: "Delivered" },
    { id: "ORD12347", date: "April 28, 2023", items: 4, total: 1599, status: "Delivered" },
  ],
  savedRecipes: [
    { id: 1, name: "Ragi Dosa with Sambar", category: "Breakfast", image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Quinoa Pulao", category: "Lunch", image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Masala Grilled Fish", category: "Dinner", image: "/placeholder.svg?height=100&width=100" },
  ],
  activeMealPlan: {
    name: "Diabetes Management Plan",
    startDate: "May 1, 2023",
    endDate: "May 31, 2023",
    progress: 65,
    nextDelivery: "May 22, 2023",
  },
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [editMode, setEditMode] = useState(false)
  const [profileData, setProfileData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    height: userData.height,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the updated profileData to your backend
    console.log("Profile data submitted:", profileData)
    setEditMode(false) // Exit edit mode after submission
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-semibold">Profile</CardTitle>
          <Button variant="outline" onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Edit Profile"}
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                Overview
              </TabsTrigger>
              <TabsTrigger value="settings" onClick={() => setActiveTab("settings")}>
                Settings
              </TabsTrigger>
              <TabsTrigger value="mealplans" onClick={() => setActiveTab("mealplans")}>
                Meal Plans
              </TabsTrigger>
              <TabsTrigger value="activity" onClick={() => setActiveTab("activity")}>
                Activity
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Details about your profile</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                          <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold">{userData.name}</h3>
                          <p className="text-sm text-muted-foreground">Member since {userData.memberSince}</p>
                        </div>
                      </div>

                      {editMode ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" value={profileData.name} onChange={handleChange} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={profileData.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" name="phone" value={profileData.phone} onChange={handleChange} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" name="address" value={profileData.address} onChange={handleChange} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="height">Height (cm)</Label>
                            <Input
                              id="height"
                              name="height"
                              type="number"
                              value={profileData.height}
                              onChange={handleChange}
                            />
                          </div>
                          <Button type="submit">Save Changes</Button>
                        </form>
                      ) : (
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm font-medium">Email:</div>
                            <div className="text-sm">{userData.email}</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm font-medium">Phone:</div>
                            <div className="text-sm">{userData.phone}</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm font-medium">Address:</div>
                            <div className="text-sm">{userData.address}</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm font-medium">Height:</div>
                            <div className="text-sm">{userData.height} cm</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm font-medium">Weight:</div>
                            <div className="text-sm">{userData.weight} kg</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm font-medium">BMI:</div>
                            <div className="text-sm">{userData.bmi}</div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Health Conditions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {userData.healthConditions.map((condition, index) => (
                          <Badge key={index} variant="secondary">
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Dietary Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {userData.dietaryPreferences.map((pref, index) => (
                          <Badge key={index} variant="outline">
                            {pref}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Allergies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {userData.allergies.map((allergy, index) => (
                          <Badge key={index} variant="destructive">
                            {allergy}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Health Metrics</CardTitle>
                      <CardDescription>Your current health status</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Blood Sugar</span>
                          <span className="text-sm font-medium">
                            {userData.healthMetrics.bloodSugar.current} {userData.healthMetrics.bloodSugar.unit}
                          </span>
                        </div>
                        <Progress
                          value={100 - ((userData.healthMetrics.bloodSugar.current - 100) / (200 - 100)) * 100}
                          className="h-2"
                        />
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-muted-foreground">
                            Target: {userData.healthMetrics.bloodSugar.target} {userData.healthMetrics.bloodSugar.unit}
                          </span>
                          <span className="text-xs text-muted-foreground">Last 5 readings</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Blood Pressure</span>
                          <span className="text-sm font-medium">
                            {userData.healthMetrics.bloodPressure.current} {userData.healthMetrics.bloodPressure.unit}
                          </span>
                        </div>
                        <Progress
                          value={
                            100 -
                            ((Number.parseInt(userData.healthMetrics.bloodPressure.current.split("/")[0]) - 100) /
                              (160 - 100)) *
                              100
                          }
                          className="h-2"
                        />
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-muted-foreground">
                            Target: {userData.healthMetrics.bloodPressure.target}{" "}
                            {userData.healthMetrics.bloodPressure.unit}
                          </span>
                          <span className="text-xs text-muted-foreground">Last 5 readings</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Cholesterol</span>
                          <span className="text-sm font-medium">
                            {userData.healthMetrics.cholesterol.current} {userData.healthMetrics.cholesterol.unit}
                          </span>
                        </div>
                        <Progress
                          value={100 - ((userData.healthMetrics.cholesterol.current - 150) / (250 - 150)) * 100}
                          className="h-2"
                        />
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-muted-foreground">
                            Target: {userData.healthMetrics.cholesterol.target}{" "}
                            {userData.healthMetrics.cholesterol.unit}
                          </span>
                          <span className="text-xs text-muted-foreground">Last 5 readings</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Active Meal Plan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium">{userData.activeMealPlan.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {userData.activeMealPlan.startDate} - {userData.activeMealPlan.endDate}
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm">{userData.activeMealPlan.progress}%</span>
                        </div>
                        <Progress value={userData.activeMealPlan.progress} className="h-2" />
                      </div>
                      <div>
                        <p className="text-sm">
                          Next delivery: <span className="font-medium">{userData.activeMealPlan.nextDelivery}</span>
                        </p>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Meal Plan Details
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="text-2xl">{achievement.icon}</div>
                            <div>
                              <h4 className="font-medium">{achievement.name}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">Earned on {achievement.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Notification Preferences</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label htmlFor="email-notif" className="text-sm font-medium">
                          Email Notifications
                        </label>
                        <input type="checkbox" id="email-notif" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="sms-notif" className="text-sm font-medium">
                          SMS Notifications
                        </label>
                        <input type="checkbox" id="sms-notif" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="push-notif" className="text-sm font-medium">
                          Push Notifications
                        </label>
                        <input type="checkbox" id="push-notif" defaultChecked className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Privacy Settings</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label htmlFor="data-sharing" className="text-sm font-medium">
                          Data Sharing with Nutritionists
                        </label>
                        <input type="checkbox" id="data-sharing" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="anonymous-data" className="text-sm font-medium">
                          Anonymous Data for Research
                        </label>
                        <input type="checkbox" id="anonymous-data" defaultChecked className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button>Save Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mealplans" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Meal Plans</CardTitle>
                  <CardDescription>Current and past meal plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{userData.activeMealPlan.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {userData.activeMealPlan.startDate} - {userData.activeMealPlan.endDate}
                          </p>
                          <Badge className="mt-2">Active</Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm">{userData.activeMealPlan.progress}%</span>
                        </div>
                        <Progress value={userData.activeMealPlan.progress} className="h-2" />
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Weight Management Plan</h3>
                          <p className="text-sm text-muted-foreground">April 1, 2023 - April 30, 2023</p>
                          <Badge variant="outline" className="mt-2">
                            Completed
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Heart Health Plan</h3>
                          <p className="text-sm text-muted-foreground">March 1, 2023 - March 31, 2023</p>
                          <Badge variant="outline" className="mt-2">
                            Completed
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.recentOrders.map((order, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0"
                      >
                        <div>
                          <h4 className="font-medium">{order.id}</h4>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                          <p className="text-sm">{order.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{order.total}</p>
                          <Badge variant="outline" className="mt-1">
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Orders
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Saved Recipes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {userData.savedRecipes.map((recipe, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <img
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-3">
                          <h4 className="font-medium">{recipe.name}</h4>
                          <p className="text-sm text-muted-foreground">{recipe.category}</p>
                          <Button variant="link" className="p-0 h-auto mt-1">
                            View Recipe
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Saved Recipes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Voucher Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold">{userData.voucherPoints}</div>
                    <p className="text-muted-foreground mt-1">Available Points</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1">Redeem Points</Button>
                    <Button variant="outline" className="flex-1">
                      Earn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
