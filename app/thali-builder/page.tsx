"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Save, ShoppingCart, AlertCircle, Plus, Minus, Check } from "lucide-react"

// Types
interface FoodItem {
  id: string
  name: string
  image: string
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  glycemicIndex: string
  category: string
  tags: string[]
  description: string
  healthBenefits: string[]
  servingSize: string
}

interface ThaliItem extends FoodItem {
  portion?: number
}

interface SavedThali {
  id: string
  name: string
  items: ThaliItem[]
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
  }
  isBalanced: boolean
  date: string
}

export default function ThaliBuilderPage() {
  const [selectedCategory, setSelectedCategory] = useState("mains")
  const [thaliItems, setThaliItems] = useState<ThaliItem[]>([])
  const [portionSize, setPortionSize] = useState<Record<string, number>>({})
  const [showNutritionInfo, setShowNutritionInfo] = useState(false)
  const [isBalanced, setIsBalanced] = useState(false)
  const [savedThalis, setSavedThalis] = useState<SavedThali[]>([])
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [thaliName, setThaliName] = useState("")
  const dragItem = useRef<FoodItem | null>(null)
  const dragOverItem = useRef<FoodItem | null>(null)

  // Sample food items data
  const foodItems: Record<string, FoodItem[]> = {
    mains: [
      {
        id: "rice",
        name: "Brown Rice",
        image: "/placeholder.svg?height=80&width=80",
        calories: 150,
        protein: 3,
        carbs: 32,
        fat: 1,
        fiber: 2,
        glycemicIndex: "low",
        category: "mains",
        tags: ["whole grain", "fiber-rich"],
        description: "Nutrient-rich whole grain brown rice",
        healthBenefits: ["Supports digestive health", "Provides sustained energy"],
        servingSize: "1/2 cup cooked",
      },
      {
        id: "roti",
        name: "Multigrain Roti",
        image: "/placeholder.svg?height=80&width=80",
        calories: 120,
        protein: 4,
        carbs: 20,
        fat: 2,
        fiber: 3,
        glycemicIndex: "low",
        category: "mains",
        tags: ["whole grain", "fiber-rich"],
        description: "Whole grain flatbread made with mixed flours",
        healthBenefits: ["Good for heart health", "Helps manage blood sugar"],
        servingSize: "1 medium roti",
      },
      {
        id: "quinoa",
        name: "Quinoa Pulao",
        image: "/placeholder.svg?height=80&width=80",
        calories: 180,
        protein: 6,
        carbs: 28,
        fat: 3,
        fiber: 4,
        glycemicIndex: "low",
        category: "mains",
        tags: ["protein-rich", "gluten-free"],
        description: "Protein-packed ancient grain with vegetables",
        healthBenefits: ["Complete protein source", "Rich in minerals"],
        servingSize: "1/2 cup cooked",
      },
    ],
    dals: [
      {
        id: "moong-dal",
        name: "Moong Dal",
        image: "/placeholder.svg?height=80&width=80",
        calories: 120,
        protein: 9,
        carbs: 18,
        fat: 1,
        fiber: 5,
        glycemicIndex: "medium",
        category: "dals",
        tags: ["protein-rich", "easy-to-digest"],
        description: "Light and protein-rich yellow lentil soup",
        healthBenefits: ["Easily digestible protein", "Good for detoxification"],
        servingSize: "1/2 cup cooked",
      },
      {
        id: "masoor-dal",
        name: "Masoor Dal",
        image: "/placeholder.svg?height=80&width=80",
        calories: 130,
        protein: 10,
        carbs: 20,
        fat: 1,
        fiber: 6,
        glycemicIndex: "medium",
        category: "dals",
        tags: ["protein-rich", "iron-rich"],
        description: "Red lentil soup rich in iron and protein",
        healthBenefits: ["Good for anemia", "Supports muscle health"],
        servingSize: "1/2 cup cooked",
      },
      {
        id: "rajma",
        name: "Rajma",
        image: "/placeholder.svg?height=80&width=80",
        calories: 150,
        protein: 8,
        carbs: 25,
        fat: 1,
        fiber: 8,
        glycemicIndex: "low",
        category: "dals",
        tags: ["protein-rich", "fiber-rich"],
        description: "Kidney beans in a rich tomato gravy",
        healthBenefits: ["Supports heart health", "Rich in antioxidants"],
        servingSize: "1/2 cup cooked",
      },
    ],
    vegetables: [
      {
        id: "palak",
        name: "Palak (Spinach)",
        image: "/placeholder.svg?height=80&width=80",
        calories: 60,
        protein: 3,
        carbs: 8,
        fat: 1,
        fiber: 4,
        glycemicIndex: "low",
        category: "vegetables",
        tags: ["iron-rich", "leafy-green"],
        description: "Iron-rich leafy green vegetable",
        healthBenefits: ["Rich in iron and calcium", "Good for eye health"],
        servingSize: "1/2 cup cooked",
      },
      {
        id: "bhindi",
        name: "Bhindi (Okra)",
        image: "/placeholder.svg?height=80&width=80",
        calories: 70,
        protein: 2,
        carbs: 12,
        fat: 0.5,
        fiber: 5,
        glycemicIndex: "low",
        category: "vegetables",
        tags: ["fiber-rich", "low-calorie"],
        description: "Fiber-rich vegetable good for digestion",
        healthBenefits: ["Helps control blood sugar", "Supports digestive health"],
        servingSize: "1/2 cup cooked",
      },
      {
        id: "gobi",
        name: "Gobi (Cauliflower)",
        image: "/placeholder.svg?height=80&width=80",
        calories: 50,
        protein: 2,
        carbs: 10,
        fat: 0.5,
        fiber: 3,
        glycemicIndex: "low",
        category: "vegetables",
        tags: ["cruciferous", "vitamin-c"],
        description: "Cruciferous vegetable rich in antioxidants",
        healthBenefits: ["Supports immune function", "Anti-inflammatory properties"],
        servingSize: "1/2 cup cooked",
      },
    ],
    raitas: [
      {
        id: "cucumber-raita",
        name: "Cucumber Raita",
        image: "/placeholder.svg?height=80&width=80",
        calories: 80,
        protein: 4,
        carbs: 6,
        fat: 5,
        fiber: 1,
        glycemicIndex: "low",
        category: "raitas",
        tags: ["probiotic", "cooling"],
        description: "Cooling yogurt with cucumber and spices",
        healthBenefits: ["Aids digestion", "Provides probiotics"],
        servingSize: "1/2 cup",
      },
      {
        id: "boondi-raita",
        name: "Boondi Raita",
        image: "/placeholder.svg?height=80&width=80",
        calories: 120,
        protein: 4,
        carbs: 15,
        fat: 6,
        fiber: 1,
        glycemicIndex: "medium",
        category: "raitas",
        tags: ["probiotic", "traditional"],
        description: "Yogurt with tiny fried gram flour balls",
        healthBenefits: ["Provides probiotics", "Aids digestion"],
        servingSize: "1/2 cup",
      },
    ],
    sides: [
      {
        id: "papad",
        name: "Roasted Papad",
        image: "/placeholder.svg?height=80&width=80",
        calories: 40,
        protein: 2,
        carbs: 8,
        fat: 0.5,
        fiber: 1,
        glycemicIndex: "medium",
        category: "sides",
        tags: ["low-calorie", "traditional"],
        description: "Crispy lentil wafer, roasted not fried",
        healthBenefits: ["Low in fat", "Aids digestion"],
        servingSize: "1 medium papad",
      },
      {
        id: "pickle",
        name: "Amla Pickle",
        image: "/placeholder.svg?height=80&width=80",
        calories: 30,
        protein: 0.5,
        carbs: 6,
        fat: 1,
        fiber: 2,
        glycemicIndex: "low",
        category: "sides",
        tags: ["vitamin-c", "digestive"],
        description: "Tangy Indian gooseberry pickle",
        healthBenefits: ["Rich in vitamin C", "Supports immunity"],
        servingSize: "1 teaspoon",
      },
    ],
    desserts: [
      {
        id: "fruit-salad",
        name: "Fresh Fruit Salad",
        image: "/placeholder.svg?height=80&width=80",
        calories: 90,
        protein: 1,
        carbs: 22,
        fat: 0.5,
        fiber: 3,
        glycemicIndex: "medium",
        category: "desserts",
        tags: ["natural-sugar", "vitamin-rich"],
        description: "Mixed seasonal fruits with a hint of chaat masala",
        healthBenefits: ["Rich in vitamins and antioxidants", "Natural sweetness"],
        servingSize: "1/2 cup",
      },
      {
        id: "kheer",
        name: "Ragi Kheer",
        image: "/placeholder.svg?height=80&width=80",
        calories: 150,
        protein: 4,
        carbs: 25,
        fat: 4,
        fiber: 2,
        glycemicIndex: "medium",
        category: "desserts",
        tags: ["calcium-rich", "whole-grain"],
        description: "Finger millet pudding with jaggery",
        healthBenefits: ["Rich in calcium", "Contains complex carbs"],
        servingSize: "1/2 cup",
      },
    ],
  }

  // Handle drag start
  const handleDragStart = (e: React.DragEvent, item: FoodItem) => {
    dragItem.current = item
  }

  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  // Handle drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const item = dragItem.current
    if (item) {
      // Check if item already exists in thali
      const existingItemIndex = thaliItems.findIndex((thaliItem) => thaliItem.id === item.id)

      if (existingItemIndex === -1) {
        // Add new item
        setThaliItems([...thaliItems, { ...item, portion: 1 }])
        setPortionSize({ ...portionSize, [item.id]: 1 })
      } else {
        // Increase portion of existing item
        const updatedThaliItems = [...thaliItems]
        updatedThaliItems[existingItemIndex].portion = (updatedThaliItems[existingItemIndex].portion || 1) + 1
        setThaliItems(updatedThaliItems)
        setPortionSize({ ...portionSize, [item.id]: (portionSize[item.id] || 1) + 1 })
      }

      // Check if thali is balanced
      checkThaliBalance([...thaliItems, { ...item, portion: 1 }])
    }
  }

  // Handle portion change
  const handlePortionChange = (id: string, change: number) => {
    const updatedThaliItems = thaliItems
      .map((item) => {
        if (item.id === id) {
          const newPortion = Math.max(0, (item.portion || 1) + change)
          return { ...item, portion: newPortion }
        }
        return item
      })
      .filter((item) => item.portion > 0)

    setThaliItems(updatedThaliItems)

    // Update portion sizes
    const newPortionSizes = { ...portionSize }
    if (change > 0) {
      newPortionSizes[id] = (newPortionSizes[id] || 1) + change
    } else {
      newPortionSizes[id] = Math.max(0, (newPortionSizes[id] || 1) + change)
      if (newPortionSizes[id] === 0) {
        delete newPortionSizes[id]
      }
    }
    setPortionSize(newPortionSizes)

    // Check if thali is balanced
    checkThaliBalance(updatedThaliItems)
  }

  // Remove item from thali
  const removeItem = (id: string) => {
    const updatedThaliItems = thaliItems.filter((item) => item.id !== id)
    setThaliItems(updatedThaliItems)

    // Update portion sizes
    const newPortionSizes = { ...portionSize }
    delete newPortionSizes[id]
    setPortionSize(newPortionSizes)

    // Check if thali is balanced
    checkThaliBalance(updatedThaliItems)
  }

  // Calculate total nutrition
  const calculateTotalNutrition = (items: ThaliItem[]) => {
    return items.reduce(
      (total, item) => {
        const portion = item.portion || 1
        return {
          calories: total.calories + item.calories * portion,
          protein: total.protein + item.protein * portion,
          carbs: total.carbs + item.carbs * portion,
          fat: total.fat + item.fat * portion,
          fiber: total.fiber + item.fiber * portion,
        }
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 },
    )
  }

  // Check if thali is balanced
  const checkThaliBalance = (items: ThaliItem[]) => {
    // Check if thali has at least one item from each essential category
    const categories = items.map((item) => item.category)
    const hasMain = categories.includes("mains")
    const hasDal = categories.includes("dals")
    const hasVegetable = categories.includes("vegetables")

    // Check if nutrition is balanced
    const nutrition = calculateTotalNutrition(items)
    const isProteinAdequate = nutrition.protein >= 15
    const isFiberAdequate = nutrition.fiber >= 8

    // Thali is balanced if it has essential categories and adequate nutrition
    setIsBalanced(hasMain && hasDal && hasVegetable && isProteinAdequate && isFiberAdequate)
  }

  // Save thali
  const saveThali = () => {
    if (thaliName.trim() === "") return

    const newSavedThali: SavedThali = {
      id: Date.now().toString(),
      name: thaliName,
      items: [...thaliItems],
      nutrition: calculateTotalNutrition(thaliItems),
      isBalanced,
      date: new Date().toISOString(),
    }

    setSavedThalis([...savedThalis, newSavedThali])
    setShowSaveDialog(false)
    setThaliName("")
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    // Simple price calculation (in a real app, this would come from the database)
    return thaliItems.reduce((total, item) => {
      const portion = item.portion || 1
      const itemPrice =
        item.category === "mains"
          ? 40
          : item.category === "dals"
            ? 35
            : item.category === "vegetables"
              ? 30
              : item.category === "raitas"
                ? 20
                : item.category === "sides"
                  ? 15
                  : 25
      return total + itemPrice * portion
    }, 0)
  }

  const totalNutrition = calculateTotalNutrition(thaliItems)
  const totalPrice = calculateTotalPrice()

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Thali Builder</h1>
      <p className="text-muted-foreground mb-8">Create your own balanced thali by dragging and dropping food items</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Food Items Panel */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Food Items</CardTitle>
              <CardDescription>Drag items to your thali</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mains" value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="mains">Mains</TabsTrigger>
                  <TabsTrigger value="dals">Dals</TabsTrigger>
                  <TabsTrigger value="vegetables">Veggies</TabsTrigger>
                </TabsList>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="raitas">Raitas</TabsTrigger>
                  <TabsTrigger value="sides">Sides</TabsTrigger>
                  <TabsTrigger value="desserts">Desserts</TabsTrigger>
                </TabsList>

                {Object.keys(foodItems).map((category) => (
                  <TabsContent key={category} value={category} className="space-y-4">
                    {foodItems[category].map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center p-3 border rounded-lg cursor-move hover:bg-muted/50 transition-colors"
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                      >
                        <div className="w-16 h-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center mt-1 text-xs text-muted-foreground">
                            <span>{item.calories} cal</span>
                            <span className="mx-1">•</span>
                            <span>{item.protein}g protein</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="ml-2"
                          onClick={() => {
                            const existingItemIndex = thaliItems.findIndex((thaliItem) => thaliItem.id === item.id)
                            if (existingItemIndex === -1) {
                              setThaliItems([...thaliItems, { ...item, portion: 1 }])
                              setPortionSize({ ...portionSize, [item.id]: 1 })
                              checkThaliBalance([...thaliItems, { ...item, portion: 1 }])
                            } else {
                              handlePortionChange(item.id, 1)
                            }
                          }}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Thali Preview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Your Thali</CardTitle>
                  <CardDescription>Drop items here to build your thali</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Switch id="nutrition-info" checked={showNutritionInfo} onCheckedChange={setShowNutritionInfo} />
                    <Label htmlFor="nutrition-info" className="ml-2">
                      Show Nutrition
                    </Label>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className="min-h-[300px] border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {thaliItems.length === 0 ? (
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                      <Plus className="h-6 w-6" />
                    </div>
                    <p>Drag and drop food items here to build your thali</p>
                    <p className="text-sm mt-2">Or click the + button next to food items</p>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {thaliItems.map((item) => (
                        <div key={item.id} className="border rounded-lg p-3 bg-card">
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-sm">{item.name}</h3>
                              <div className="flex items-center mt-1">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-6 w-6"
                                  onClick={() => handlePortionChange(item.id, -1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="mx-2 text-sm">{item.portion || 1}</span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-6 w-6"
                                  onClick={() => handlePortionChange(item.id, 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-6 w-6 ml-auto"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                  >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          </div>
                          {showNutritionInfo && (
                            <div className="mt-2 pt-2 border-t text-xs text-muted-foreground">
                              <div className="grid grid-cols-3 gap-1">
                                <div>Cal: {item.calories * (item.portion || 1)}</div>
                                <div>Prot: {item.protein * (item.portion || 1)}g</div>
                                <div>Carbs: {item.carbs * (item.portion || 1)}g</div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Nutrition Summary */}
                    {thaliItems.length > 0 && (
                      <div className="space-y-4">
                        <Separator />
                        <div className="flex flex-col md:flex-row md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-medium mb-2">Nutrition Summary</h3>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Calories: {totalNutrition.calories} kcal</span>
                                  <span className="text-sm text-muted-foreground">
                                    {totalNutrition.calories < 500
                                      ? "Low"
                                      : totalNutrition.calories > 800
                                        ? "High"
                                        : "Moderate"}
                                  </span>
                                </div>
                                <Progress value={(totalNutrition.calories / 1000) * 100} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Protein: {totalNutrition.protein}g</span>
                                  <span className="text-sm text-muted-foreground">
                                    {totalNutrition.protein < 15
                                      ? "Low"
                                      : totalNutrition.protein > 30
                                        ? "High"
                                        : "Adequate"}
                                  </span>
                                </div>
                                <Progress value={(totalNutrition.protein / 50) * 100} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Carbs: {totalNutrition.carbs}g</span>
                                  <span className="text-sm text-muted-foreground">
                                    {totalNutrition.carbs < 50
                                      ? "Low"
                                      : totalNutrition.carbs > 100
                                        ? "High"
                                        : "Moderate"}
                                  </span>
                                </div>
                                <Progress value={(totalNutrition.carbs / 150) * 100} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Fiber: {totalNutrition.fiber}g</span>
                                  <span className="text-sm text-muted-foreground">
                                    {totalNutrition.fiber < 8 ? "Low" : totalNutrition.fiber > 15 ? "High" : "Adequate"}
                                  </span>
                                </div>
                                <Progress value={(totalNutrition.fiber / 25) * 100} className="h-2" />
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <h3 className="font-medium mb-2">Thali Balance</h3>
                            <div className="border rounded-lg p-4 bg-muted/30">
                              <div className="flex items-center mb-3">
                                {isBalanced ? (
                                  <>
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                      <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-green-600">Balanced Thali</h4>
                                      <p className="text-xs text-muted-foreground">
                                        Your thali has a good balance of nutrients
                                      </p>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                                      <AlertCircle className="h-4 w-4 text-amber-600" />
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-amber-600">Improve Balance</h4>
                                      <p className="text-xs text-muted-foreground">Your thali needs some adjustments</p>
                                    </div>
                                  </>
                                )}
                              </div>

                              <div className="space-y-2 text-sm">
                                {!thaliItems.some((item) => item.category === "mains") && (
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                                    <span>Add a main dish (rice, roti, etc.)</span>
                                  </div>
                                )}
                                {!thaliItems.some((item) => item.category === "dals") && (
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                                    <span>Add a dal or protein source</span>
                                  </div>
                                )}
                                {!thaliItems.some((item) => item.category === "vegetables") && (
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                                    <span>Add a vegetable dish</span>
                                  </div>
                                )}
                                {totalNutrition.protein < 15 && (
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                                    <span>Increase protein content</span>
                                  </div>
                                )}
                                {totalNutrition.fiber < 8 && (
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                                    <span>Add more fiber-rich foods</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 border-t pt-6">
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Total Price</div>
                <div className="text-2xl font-bold">₹{totalPrice}</div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="flex-1 sm:flex-initial"
                  onClick={() => setShowSaveDialog(true)}
                  disabled={thaliItems.length === 0}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Thali
                </Button>
                <Button
                  className="flex-1 sm:flex-initial bg-saffron-500 hover:bg-saffron-600"
                  disabled={thaliItems.length === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Order Now
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Save Thali Dialog */}
          {showSaveDialog && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-bold mb-4">Save Your Thali</h3>
                <div className="mb-4">
                  <label htmlFor="thali-name" className="block text-sm font-medium mb-1">
                    Thali Name
                  </label>
                  <input
                    type="text"
                    id="thali-name"
                    className="w-full p-2 border rounded-md"
                    value={thaliName}
                    onChange={(e) => setThaliName(e.target.value)}
                    placeholder="e.g., My Balanced Lunch Thali"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowSaveDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={saveThali} disabled={thaliName.trim() === ""}>
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Saved Thalis */}
          {savedThalis.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Your Saved Thalis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedThalis.map((savedThali) => (
                  <Card key={savedThali.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{savedThali.name}</CardTitle>
                      <CardDescription>
                        {new Date(savedThali.date).toLocaleDateString()} • {savedThali.items.length} items
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {savedThali.items.slice(0, 4).map((item) => (
                          <div key={item.id} className="w-8 h-8 rounded-full overflow-hidden border" title={item.name}>
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {savedThali.items.length > 4 && (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">
                            +{savedThali.items.length - 4}
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="text-muted-foreground">Calories:</span>{" "}
                          <span className="font-medium">{savedThali.nutrition.calories}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Protein:</span>{" "}
                          <span className="font-medium">{savedThali.nutrition.protein}g</span>
                        </div>
                        <div>
                          {savedThali.isBalanced ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Balanced
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                              Unbalanced
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Load Thali
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
