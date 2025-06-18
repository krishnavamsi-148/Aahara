"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Clock, MapPin, Search, Heart, AlertTriangle, Check } from "lucide-react"

export default function EmergencyMealServicePage() {
  const [condition, setCondition] = useState<string>("diabetes")
  const [deliveryTime, setDeliveryTime] = useState<string>("30")
  const [searchTerm, setSearchTerm] = useState("")
  const [isOrdering, setIsOrdering] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null)
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null)

  // Sample emergency meal providers
  const restaurants = [
    {
      id: "r1",
      name: "HealthFirst Kitchen",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      deliveryTime: "25-35 min",
      distance: "1.8 km",
      tags: ["Diabetic-Friendly", "Heart-Healthy", "Low-Sodium"],
      emergencyAvailable: true,
      meals: [
        {
          id: "m1",
          name: "Diabetic-Friendly Thali",
          description: "Low-GI roti, dal, vegetable curry, raita, and salad",
          price: 180,
          image: "/placeholder.svg?height=120&width=120",
          tags: ["Low-GI", "High-Fiber", "Balanced"],
          nutritionInfo: {
            calories: 450,
            carbs: 55,
            protein: 18,
            fat: 12,
            fiber: 8,
            glycemicLoad: "Low",
          },
          preparationTime: 15,
        },
        {
          id: "m2",
          name: "Low-Sodium Meal Bowl",
          description: "Brown rice, steamed vegetables, tofu, and herbs",
          price: 160,
          image: "/placeholder.svg?height=120&width=120",
          tags: ["Low-Sodium", "Heart-Healthy", "Protein-Rich"],
          nutritionInfo: {
            calories: 420,
            carbs: 60,
            protein: 20,
            fat: 10,
            fiber: 7,
            sodium: "Very Low",
          },
          preparationTime: 12,
        },
      ],
    },
    {
      id: "r2",
      name: "Ayurvedic Emergency Foods",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.6,
      deliveryTime: "30-40 min",
      distance: "2.5 km",
      tags: ["Ayurvedic", "Organic", "Diabetic-Friendly"],
      emergencyAvailable: true,
      meals: [
        {
          id: "m3",
          name: "Blood Sugar Balancing Meal",
          description: "Millet roti, bitter gourd sabzi, moong dal, and buttermilk",
          price: 190,
          image: "/placeholder.svg?height=120&width=120",
          tags: ["Ayurvedic", "Blood-Sugar Control", "Cooling"],
          nutritionInfo: {
            calories: 430,
            carbs: 50,
            protein: 16,
            fat: 14,
            fiber: 9,
            glycemicLoad: "Low",
          },
          preparationTime: 18,
        },
        {
          id: "m4",
          name: "Heart Health Emergency Kit",
          description: "Oats porridge, steamed vegetables, and herbal tea",
          price: 150,
          image: "/placeholder.svg?height=120&width=120",
          tags: ["Heart-Healthy", "Low-Cholesterol", "Calming"],
          nutritionInfo: {
            calories: 380,
            carbs: 65,
            protein: 12,
            fat: 8,
            fiber: 10,
            sodium: "Low",
          },
          preparationTime: 10,
        },
      ],
    },
    {
      id: "r3",
      name: "Quick Nutrition Hub",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.5,
      deliveryTime: "20-30 min",
      distance: "1.2 km",
      tags: ["Fast Delivery", "Balanced Meals", "Medical Grade"],
      emergencyAvailable: true,
      meals: [
        {
          id: "m5",
          name: "Hypoglycemia Rescue Meal",
          description: "Quinoa, chickpeas, vegetables, and a fruit portion",
          price: 170,
          image: "/placeholder.svg?height=120&width=120",
          tags: ["Quick Energy", "Balanced Release", "Protein-Rich"],
          nutritionInfo: {
            calories: 460,
            carbs: 70,
            protein: 18,
            fat: 10,
            fiber: 8,
            glycemicLoad: "Medium",
          },
          preparationTime: 8,
        },
        {
          id: "m6",
          name: "Blood Pressure Support Meal",
          description: "DASH diet inspired meal with leafy greens and lean protein",
          price: 185,
          image: "/placeholder.svg?height=120&width=120",
          tags: ["Low-Sodium", "Potassium-Rich", "Heart-Healthy"],
          nutritionInfo: {
            calories: 410,
            carbs: 55,
            protein: 22,
            fat: 9,
            fiber: 11,
            sodium: "Very Low",
          },
          preparationTime: 12,
        },
      ],
    },
  ]

  // Filter restaurants based on search term
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (searchTerm === "") return true
    return (
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

  // Get selected restaurant
  const getSelectedRestaurantData = () => {
    return restaurants.find((r) => r.id === selectedRestaurant)
  }

  // Get selected meal
  const getSelectedMealData = () => {
    const restaurant = getSelectedRestaurantData()
    if (!restaurant) return null
    return restaurant.meals.find((m) => m.id === selectedMeal)
  }

  // Handle order
  const handleOrder = () => {
    setIsOrdering(true)
    // Simulate API call
    setTimeout(() => {
      setIsOrdering(false)
      setOrderPlaced(true)
    }, 1500)
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center">
          <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-3xl font-bold">Emergency Meal Service</h1>
        </div>
        <p className="text-muted-foreground mt-2">
          Quick, health-based emergency food delivery for urgent dietary needs
        </p>
      </div>

      {!orderPlaced ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-red-800">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Emergency Options
                </CardTitle>
                <CardDescription className="text-red-700">
                  Select your health condition and delivery preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Select Health Condition</h3>
                  <RadioGroup defaultValue="diabetes" value={condition} onValueChange={setCondition}>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="diabetes" id="diabetes" />
                      <Label htmlFor="diabetes">Diabetes (Low Sugar)</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="hypertension" id="hypertension" />
                      <Label htmlFor="hypertension">Hypertension (Low Sodium)</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="hypoglycemia" id="hypoglycemia" />
                      <Label htmlFor="hypoglycemia">Hypoglycemia (Quick Energy)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="heart" id="heart" />
                      <Label htmlFor="heart">Heart Condition (Heart-Healthy)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Delivery Time</h3>
                  <RadioGroup defaultValue="30" value={deliveryTime} onValueChange={setDeliveryTime}>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2 border rounded-md p-2">
                        <RadioGroupItem value="30" id="time-30" />
                        <Label htmlFor="time-30" className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-red-500" />
                          30 min
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-2">
                        <RadioGroupItem value="60" id="time-60" />
                        <Label htmlFor="time-60" className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-amber-500" />
                          60 min
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Delivery Location</h3>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Current Location
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Special Instructions</h3>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="instructions" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="instructions">Include blood sugar testing kit</Label>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="instructions-2" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="instructions-2">Include medication reminder</Label>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="instructions-3" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="instructions-3">Notify emergency contact</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
                <CardDescription>Your saved health information for emergency meals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Blood Sugar Range:</span>
                    <span className="text-sm font-medium">100-140 mg/dL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Blood Pressure:</span>
                    <span className="text-sm font-medium">130/85 mmHg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Allergies:</span>
                    <span className="text-sm font-medium">Peanuts, Shellfish</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Medications:</span>
                    <span className="text-sm font-medium">Metformin, Lisinopril</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 h-auto text-xs mt-3">
                  Update Health Information
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Emergency Meals</CardTitle>
                <CardDescription>Restaurants offering emergency meals for your condition</CardDescription>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search restaurants or meal types..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <Tabs defaultValue="restaurants">
                  <TabsList className="mb-4">
                    <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
                    <TabsTrigger value="meals">Meals</TabsTrigger>
                  </TabsList>
                  <TabsContent value="restaurants">
                    <div className="space-y-4">
                      {filteredRestaurants.map((restaurant) => (
                        <div
                          key={restaurant.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedRestaurant === restaurant.id
                              ? "border-red-500 bg-red-50"
                              : "hover:border-red-200 hover:bg-red-50/30"
                          }`}
                          onClick={() => setSelectedRestaurant(restaurant.id)}
                        >
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                              <img
                                src={restaurant.image || "/placeholder.svg"}
                                alt={restaurant.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">{restaurant.name}</h3>
                                <div className="flex items-center">
                                  <Heart className="h-4 w-4 text-amber-500 fill-amber-500" />
                                  <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {restaurant.tags.map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{restaurant.deliveryTime}</span>
                                <span className="mx-2">•</span>
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{restaurant.distance}</span>
                                {restaurant.emergencyAvailable && (
                                  <>
                                    <span className="mx-2">•</span>
                                    <Badge variant="outline" className="bg-red-50 text-red-700 text-xs">
                                      Emergency Available
                                    </Badge>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="meals">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredRestaurants.flatMap((restaurant) =>
                        restaurant.meals.map((meal) => (
                          <div
                            key={meal.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                              selectedMeal === meal.id
                                ? "border-red-500 bg-red-50"
                                : "hover:border-red-200 hover:bg-red-50/30"
                            }`}
                            onClick={() => {
                              setSelectedRestaurant(restaurant.id)
                              setSelectedMeal(meal.id)
                            }}
                          >
                            <div className="flex">
                              <div className="w-20 h-20 rounded-md overflow-hidden mr-3 flex-shrink-0">
                                <img
                                  src={meal.image || "/placeholder.svg"}
                                  alt={meal.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium">{meal.name}</h3>
                                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{meal.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {meal.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                  <div className="text-sm font-medium">₹{meal.price}</div>
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{meal.preparationTime} min prep</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )),
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex-col border-t pt-6">
                {selectedRestaurant && selectedMeal ? (
                  <div className="w-full">
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <div className="flex items-start">
                        <div className="w-16 h-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
                          <img
                            src={getSelectedMealData()?.image || "/placeholder.svg"}
                            alt={getSelectedMealData()?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{getSelectedMealData()?.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{getSelectedMealData()?.description}</p>
                          <div className="flex justify-between items-center mt-2">
                            <div className="text-sm font-medium">₹{getSelectedMealData()?.price}</div>
                            <div className="flex items-center text-xs">
                              <Clock className="h-3 w-3 mr-1 text-red-500" />
                              <span>Delivery in {deliveryTime === "30" ? "25-35" : "50-70"} min</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Separator className="my-3" />
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">Calories:</span>{" "}
                          <span className="font-medium">{getSelectedMealData()?.nutritionInfo.calories}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Protein:</span>{" "}
                          <span className="font-medium">{getSelectedMealData()?.nutritionInfo.protein}g</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Carbs:</span>{" "}
                          <span className="font-medium">{getSelectedMealData()?.nutritionInfo.carbs}g</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={handleOrder}
                      disabled={isOrdering}
                    >
                      {isOrdering ? "Processing..." : "Place Emergency Order"}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center w-full text-muted-foreground">
                    <p>Select a restaurant and meal to place an emergency order</p>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Emergency Order Placed!</h3>
            <p className="text-muted-foreground mb-4">
              Your{" "}
              {condition === "diabetes"
                ? "diabetic-friendly"
                : condition === "hypertension"
                  ? "low-sodium"
                  : condition === "hypoglycemia"
                    ? "quick energy"
                    : "heart-healthy"}{" "}
              meal is being prepared and will arrive within {deliveryTime === "30" ? "25-35" : "50-70"} minutes.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6 flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">
                Estimated arrival:{" "}
                {new Date(Date.now() + Number.parseInt(deliveryTime) * 60000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline">Track Order</Button>
              <Button variant="outline">Contact Restaurant</Button>
              <Button variant="outline">Emergency Contact</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
