"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// Sample festival and fasting meal plans
const festivalMeals = [
  {
    id: 1,
    name: "Navratri Fasting Thali",
    description: "A balanced meal plan suitable for Navratri fasting with permitted ingredients",
    image: "/placeholder.svg?height=200&width=350",
    festival: "Navratri",
    type: "fasting",
    items: [
      { name: "Sabudana Khichdi", calories: 220, image: "/placeholder.svg?height=80&width=80" },
      { name: "Kuttu ki Puri", calories: 180, image: "/placeholder.svg?height=80&width=80" },
      { name: "Singhare ka Halwa", calories: 250, image: "/placeholder.svg?height=80&width=80" },
      { name: "Fruit Raita", calories: 120, image: "/placeholder.svg?height=80&width=80" },
    ],
    healthBenefits: [
      "Rich in complex carbohydrates for sustained energy",
      "Balanced with fruits for essential vitamins",
      "Moderate portion sizes to prevent overeating",
    ],
    healthTags: ["Fasting-Friendly", "Sattvic", "Gluten-Free"],
    suitableFor: ["Diabetes", "Weight Management"],
  },
  {
    id: 2,
    name: "Diwali Balanced Feast",
    description: "A healthier version of traditional Diwali favorites with reduced oil and sugar",
    image: "/placeholder.svg?height=200&width=350",
    festival: "Diwali",
    type: "festival",
    items: [
      { name: "Baked Namak Para", calories: 150, image: "/placeholder.svg?height=80&width=80" },
      { name: "Date & Nut Ladoo", calories: 180, image: "/placeholder.svg?height=80&width=80" },
      { name: "Roasted Makhana", calories: 100, image: "/placeholder.svg?height=80&width=80" },
      { name: "Ragi Mathri", calories: 130, image: "/placeholder.svg?height=80&width=80" },
    ],
    healthBenefits: [
      "Baked instead of fried to reduce oil content",
      "Natural sweeteners used instead of refined sugar",
      "Portion-controlled servings of traditional sweets",
    ],
    healthTags: ["Low-Oil", "Reduced-Sugar", "Portion-Controlled"],
    suitableFor: ["Diabetes", "Heart Health"],
  },
  {
    id: 3,
    name: "Ramzan Iftar Plate",
    description: "A nutritious iftar meal plan that provides balanced nutrition after fasting",
    image: "/placeholder.svg?height=200&width=350",
    festival: "Ramzan",
    type: "fasting",
    items: [
      { name: "Dates", calories: 70, image: "/placeholder.svg?height=80&width=80" },
      { name: "Vegetable Soup", calories: 120, image: "/placeholder.svg?height=80&width=80" },
      { name: "Whole Wheat Sheermal", calories: 200, image: "/placeholder.svg?height=80&width=80" },
      { name: "Fruit Chaat", calories: 110, image: "/placeholder.svg?height=80&width=80" },
    ],
    healthBenefits: [
      "Dates provide quick energy after fasting",
      "Hydrating soup helps restore fluid balance",
      "Balanced with protein, carbs and fruits",
    ],
    healthTags: ["Hydrating", "Balanced", "Moderate-GI"],
    suitableFor: ["Diabetes", "Digestion"],
  },
  {
    id: 4,
    name: "Karva Chauth Sargi",
    description: "A nutrient-dense pre-dawn meal to sustain energy throughout the day of fasting",
    image: "/placeholder.svg?height=200&width=350",
    festival: "Karva Chauth",
    type: "fasting",
    items: [
      { name: "Dry Fruit Milk", calories: 220, image: "/placeholder.svg?height=80&width=80" },
      { name: "Whole Grain Paratha", calories: 180, image: "/placeholder.svg?height=80&width=80" },
      { name: "Mixed Nut Chikki", calories: 150, image: "/placeholder.svg?height=80&width=80" },
      { name: "Fruit Bowl", calories: 100, image: "/placeholder.svg?height=80&width=80" },
    ],
    healthBenefits: [
      "Slow-digesting complex carbs for sustained energy",
      "Protein-rich to prevent muscle breakdown during fasting",
      "Healthy fats from nuts to provide satiety",
    ],
    healthTags: ["Protein-Rich", "Slow-Release Energy", "Nutrient-Dense"],
    suitableFor: ["Weight Management", "Women's Health"],
  },
  {
    id: 5,
    name: "Ganesh Chaturthi Modak Alternatives",
    description: "Healthier versions of traditional modak and other Ganesh Chaturthi treats",
    image: "/placeholder.svg?height=200&width=350",
    festival: "Ganesh Chaturthi",
    type: "festival",
    items: [
      { name: "Steamed Wheat Modak", calories: 150, image: "/placeholder.svg?height=80&width=80" },
      { name: "Ragi Modak", calories: 140, image: "/placeholder.svg?height=80&width=80" },
      { name: "Coconut-Date Ladoo", calories: 160, image: "/placeholder.svg?height=80&width=80" },
      { name: "Oats Modak", calories: 130, image: "/placeholder.svg?height=80&width=80" },
    ],
    healthBenefits: [
      "Whole grains instead of refined flour",
      "Natural sweeteners instead of sugar",
      "Steamed instead of fried for reduced fat",
    ],
    healthTags: ["Whole-Grain", "Naturally-Sweetened", "Low-Fat"],
    suitableFor: ["Diabetes", "Heart Health", "Weight Management"],
  },
]

export function FestivalMealPlanner() {
  const [selectedFestival, setSelectedFestival] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedHealth, setSelectedHealth] = useState("all")

  const filteredMeals = festivalMeals.filter((meal) => {
    if (selectedFestival !== "all" && meal.festival !== selectedFestival) return false
    if (selectedType !== "all" && meal.type !== selectedType) return false
    if (selectedHealth !== "all" && !meal.suitableFor.includes(selectedHealth)) return false
    return true
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-orange-500" />
          Festival & Fasting Meal Plans
        </CardTitle>
        <CardDescription>
          Healthy meal options for Indian festivals and fasting days that support your health goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">Festival</label>
            <Select value={selectedFestival} onValueChange={setSelectedFestival}>
              <SelectTrigger>
                <SelectValue placeholder="Select festival" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Festivals</SelectItem>
                <SelectItem value="Navratri">Navratri</SelectItem>
                <SelectItem value="Diwali">Diwali</SelectItem>
                <SelectItem value="Ramzan">Ramzan</SelectItem>
                <SelectItem value="Karva Chauth">Karva Chauth</SelectItem>
                <SelectItem value="Ganesh Chaturthi">Ganesh Chaturthi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">Type</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="festival">Festival Meals</SelectItem>
                <SelectItem value="fasting">Fasting Meals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">Health Condition</label>
            <Select value={selectedHealth} onValueChange={setSelectedHealth}>
              <SelectTrigger>
                <SelectValue placeholder="Select health condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="Diabetes">Diabetes</SelectItem>
                <SelectItem value="Heart Health">Heart Health</SelectItem>
                <SelectItem value="Weight Management">Weight Management</SelectItem>
                <SelectItem value="Digestion">Digestive Health</SelectItem>
                <SelectItem value="Women's Health">Women's Health</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredMeals.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No meal plans found with the selected filters.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedFestival("all")
                  setSelectedType("all")
                  setSelectedHealth("all")
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            filteredMeals.map((meal) => (
              <Card key={meal.id} className="overflow-hidden">
                <div className="grid md:grid-cols-[1.5fr_2fr] gap-4">
                  <div className="relative">
                    <img
                      src={meal.image || "/placeholder.svg"}
                      alt={meal.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange-500">{meal.festival}</Badge>
                    <Badge className="absolute top-2 right-2 bg-blue-500">
                      {meal.type === "festival" ? "Festival" : "Fasting"}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{meal.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{meal.description}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {meal.healthTags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-green-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-medium">Meal Items:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {meal.items.map((item, index) => (
                          <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-md overflow-hidden mb-1">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-xs font-medium">{item.name}</span>
                            <span className="text-xs text-muted-foreground">{item.calories} cal</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-3" />

                    <div>
                      <h4 className="text-sm font-medium">Health Benefits:</h4>
                      <ul className="mt-1 space-y-1">
                        {meal.healthBenefits.map((benefit, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <div className="h-4 w-4 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-[10px]">
                              ✓
                            </div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-medium">Suitable For:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {meal.suitableFor.map((condition) => (
                          <Badge key={condition} variant="outline" className="bg-blue-50 text-blue-700">
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="mt-3 bg-orange-500 hover:bg-orange-600" size="sm">
                      View Full Meal Plan
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
