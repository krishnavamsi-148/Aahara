"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Filter, Heart, ShoppingCart, Star, Clock, MapPin, Search, Plus, Minus } from "lucide-react"
// Add these imports at the top of the file
import { MapPinIcon, Navigation, ClockIcon, StarIcon, Phone, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Add a new component for meal customization sliders
// Add this after the imports section

interface CustomizationOption {
  name: string
  value: number
  min: number
  max: number
  step: number
  icon: React.ReactNode
}

function MealCustomizationSliders({ onClose }: { onClose: () => void }) {
  const [options, setOptions] = useState<CustomizationOption[]>([
    { name: "Salt", value: 50, min: 0, max: 100, step: 10, icon: <Salt className="h-4 w-4" /> },
    { name: "Oil", value: 50, min: 0, max: 100, step: 10, icon: <Droplet className="h-4 w-4" /> },
    { name: "Spice", value: 50, min: 0, max: 100, step: 10, icon: <Flame className="h-4 w-4" /> },
    { name: "Sugar", value: 50, min: 0, max: 100, step: 10, icon: <Candy className="h-4 w-4" /> },
  ])

  const handleChange = (index: number, newValue: number) => {
    const newOptions = [...options]
    newOptions[index].value = newValue
    setOptions(newOptions)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Customize Your Meal</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-6">
        {options.map((option, index) => (
          <div key={option.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {option.icon}
                <span className="ml-2">{option.name}</span>
              </div>
              <span className="text-sm font-medium">
                {option.value < 30 ? "Low" : option.value < 70 ? "Medium" : "High"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 rounded-full"
                onClick={() => handleChange(index, Math.max(option.min, option.value - option.step))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Slider
                value={[option.value]}
                min={option.min}
                max={option.max}
                step={option.step}
                onValueChange={(values) => handleChange(index, values[0])}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 rounded-full"
                onClick={() => handleChange(index, Math.min(option.max, option.value + option.step))}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
        <div className="pt-4">
          <Button className="w-full bg-saffron-500 hover:bg-saffron-600">Apply Customization</Button>
        </div>
      </div>
    </div>
  )
}

// Add these imports at the top of the file
import { Slider } from "@/components/ui/slider"
import { SatelliteIcon as Salt, Droplet, Flame, Candy, Settings, X } from "lucide-react"

// Sample food items data
const foodItems = [
  {
    id: 1,
    name: "Ragi Dosa with Sambar",
    description: "A nutritious South Indian breakfast made with finger millet flour",
    price: 120,
    rating: 4.8,
    reviews: 124,
    image:
      "https://t4.ftcdn.net/jpg/11/99/42/55/240_F_1199425530_KzElDw4nh94hEldSLmYPshqkLMGi81Ae.jpg?height=200&width=320",
    category: "breakfast",
    tags: ["Diabetes-Friendly", "High-Fiber", "Vegetarian"],
    prepTime: "20 mins",
    calories: 320,
    popular: true,
    restaurant: "Aahara Kitchen",
    distance: "2.5 km",
    deliveryTime: "30-40 mins",
  },
  {
    id: 2,
    name: "Palak Paneer with Brown Rice",
    description: "Cottage cheese cubes in a spinach gravy served with brown rice",
    price: 180,
    rating: 4.7,
    reviews: 98,
    image:
      "https://summeryule.com/wp-content/uploads/2021/11/instant-pot-palak-paneer-recipe.jpeg?height=200&width=320",
    category: "lunch",
    tags: ["Heart-Healthy", "High-Protein", "Vegetarian"],
    prepTime: "15 mins",
    calories: 380,
    popular: true,
    restaurant: "Healthy Bites",
    distance: "3.2 km",
    deliveryTime: "35-45 mins",
  },
  {
    id: 3,
    name: "Masala Grilled Fish",
    description: "Spiced grilled fish with a side of steamed vegetables",
    price: 220,
    rating: 4.6,
    reviews: 87,
    image:
      "https://t4.ftcdn.net/jpg/11/70/22/77/240_F_1170227734_6YdjmeA8rJA6U6HS8qJUC7FyLAKkXJHQ.jpg?height=200&width=320",
    category: "dinner",
    tags: ["Weight-Loss", "High-Protein", "Low-Carb"],
    prepTime: "25 mins",
    calories: 290,
    popular: false,
    restaurant: "Coastal Flavors",
    distance: "4.1 km",
    deliveryTime: "40-50 mins",
  },
  {
    id: 4,
    name: "Oats Idli with Coconut Chutney",
    description: "Steamed savory cakes made with oats and traditional spices",
    price: 110,
    rating: 4.5,
    reviews: 76,
    image:
      "https://t4.ftcdn.net/jpg/02/02/01/83/240_F_202018324_VToFG6as09SaiIQF2pWxCmcuWEQfkgC5.jpg?height=200&width=320",
    category: "breakfast",
    tags: ["Diabetes-Friendly", "Low-Fat", "Vegetarian"],
    prepTime: "15 mins",
    calories: 220,
    popular: false,
    restaurant: "South Indian Delights",
    distance: "2.8 km",
    deliveryTime: "25-35 mins",
  },
  {
    id: 5,
    name: "Quinoa Pulao",
    description: "A protein-rich alternative to traditional rice pulao",
    price: 160,
    rating: 4.7,
    reviews: 92,
    image:
      "https://t3.ftcdn.net/jpg/13/36/09/98/240_F_1336099883_KAsWPfVed1A3jqxlBoWjzC3beBsI3vEb.jpg?height=200&width=320",
    category: "lunch",
    tags: ["Weight-Loss", "High-Protein", "Vegetarian"],
    prepTime: "20 mins",
    calories: 310,
    popular: true,
    restaurant: "Grain Bowl",
    distance: "3.5 km",
    deliveryTime: "30-40 mins",
  },
  {
    id: 6,
    name: "Baked Methi Chicken",
    description: "Chicken marinated with fenugreek leaves and baked to perfection",
    price: 240,
    rating: 4.8,
    reviews: 108,
    image:
      "https://t4.ftcdn.net/jpg/02/56/95/05/240_F_256950585_jT86TRlTwiUEvNICZWAVhj702P3xUKV3.jpg?height=200&width=320",
    category: "dinner",
    tags: ["High-Protein", "Low-Carb", "Gluten-Free"],
    prepTime: "30 mins",
    calories: 340,
    popular: true,
    restaurant: "Protein Hub",
    distance: "5.0 km",
    deliveryTime: "45-55 mins",
  },
  {
    id: 7,
    name: "Millet Upma",
    description: "A healthy twist on traditional upma made with mixed millets",
    price: 130,
    rating: 4.6,
    reviews: 82,
    image:
      "https://t3.ftcdn.net/jpg/13/34/41/84/240_F_1334418433_0PG6hbYfrRuat3yM1oZm7uAiUeqCTIya.jpg?height=200&width=320",
    category: "breakfast",
    tags: ["Diabetes-Friendly", "High-Fiber", "Vegetarian"],
    prepTime: "15 mins",
    calories: 280,
    popular: false,
    restaurant: "Millet Magic",
    distance: "3.0 km",
    deliveryTime: "30-40 mins",
  },
  {
    id: 8,
    name: "Lentil Soup with Multigrain Roti",
    description: "Protein-rich lentil soup served with multigrain flatbread",
    price: 150,
    rating: 4.5,
    reviews: 74,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGLdlcGM9Z-kMh3mNeEhWuppexbujlXt3vw&s?height=200&width=320",
    category: "lunch",
    tags: ["Heart-Healthy", "High-Protein", "Vegetarian"],
    prepTime: "20 mins",
    calories: 320,
    popular: false,
    restaurant: "Pulse & Grain",
    distance: "2.7 km",
    deliveryTime: "25-35 mins",
  },
]

// Sample restaurants data
const restaurants = [
  {
    id: 1,
    name: "Aahara Kitchen",
    description: "Specializing in diabetes-friendly and heart-healthy meals",
    rating: 4.8,
    reviews: 324,
    image: "/placeholder.svg?height=200&width=320",
    cuisines: ["North Indian", "South Indian", "Healthy"],
    distance: "2.5 km",
    deliveryTime: "30-40 mins",
    minOrder: 100,
  },
  {
    id: 2,
    name: "Healthy Bites",
    description: "Nutritious meals for weight management and overall wellness",
    rating: 4.7,
    reviews: 256,
    image: "/placeholder.svg?height=200&width=320",
    cuisines: ["Continental", "Mediterranean", "Healthy"],
    distance: "3.2 km",
    deliveryTime: "35-45 mins",
    minOrder: 150,
  },
  {
    id: 3,
    name: "Coastal Flavors",
    description: "Seafood specialties with a healthy twist",
    rating: 4.6,
    reviews: 198,
    image: "/placeholder.svg?height=200&width=320",
    cuisines: ["Coastal", "Seafood", "Low-Carb"],
    distance: "4.1 km",
    deliveryTime: "40-50 mins",
    minOrder: 200,
  },
  {
    id: 4,
    name: "South Indian Delights",
    description: "Traditional South Indian cuisine with healthier ingredients",
    rating: 4.5,
    reviews: 176,
    image: "/placeholder.svg?height=200&width=320",
    cuisines: ["South Indian", "Healthy"],
    distance: "2.8 km",
    deliveryTime: "25-35 mins",
    minOrder: 120,
  },
]

export default function FoodDeliveryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("meals")
  const [activeCategory, setActiveCategory] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([])
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [location, setLocation] = useState("Bangalore, HSR Layout")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  // Add these state variables after the existing useState declarations
  const [userLocation, setUserLocation] = useState("Bangalore, HSR Layout")
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [nearbyRestaurants, setNearbyRestaurants] = useState([
    {
      id: 1,
      name: "Aahara Kitchen",
      description: "Specializing in diabetes-friendly and heart-healthy meals",
      rating: 4.8,
      reviews: 324,
      image: "/placeholder.svg?height=200&width=320",
      cuisines: ["North Indian", "South Indian", "Healthy"],
      distance: "2.5 km",
      deliveryTime: "30-40 mins",
      minOrder: 100,
      address: "123 HSR Layout, Sector 3, Bangalore",
      phone: "+91 9876543210",
      openingHours: "8:00 AM - 10:00 PM",
      healthScore: 9.2,
      specialDiets: ["Diabetic-Friendly", "Heart-Healthy", "Gluten-Free"],
    },
    {
      id: 2,
      name: "Healthy Bites",
      description: "Nutritious meals for weight management and overall wellness",
      rating: 4.7,
      reviews: 256,
      image: "/placeholder.svg?height=200&width=320",
      cuisines: ["Continental", "Mediterranean", "Healthy"],
      distance: "3.2 km",
      deliveryTime: "35-45 mins",
      minOrder: 150,
      address: "456 Koramangala, 6th Block, Bangalore",
      phone: "+91 9876543211",
      openingHours: "9:00 AM - 11:00 PM",
      healthScore: 8.9,
      specialDiets: ["Weight-Management", "High-Protein", "Vegan Options"],
    },
    {
      id: 3,
      name: "Coastal Flavors",
      description: "Seafood specialties with a healthy twist",
      rating: 4.6,
      reviews: 198,
      image: "/placeholder.svg?height=200&width=320",
      cuisines: ["Coastal", "Seafood", "Low-Carb"],
      distance: "4.1 km",
      deliveryTime: "40-50 mins",
      minOrder: 200,
      address: "789 Indiranagar, 12th Main, Bangalore",
      phone: "+91 9876543212",
      openingHours: "10:00 AM - 10:00 PM",
      healthScore: 8.5,
      specialDiets: ["Low-Carb", "High-Protein", "Pescatarian"],
    },
    {
      id: 4,
      name: "South Indian Delights",
      description: "Traditional South Indian cuisine with healthier ingredients",
      rating: 4.5,
      reviews: 176,
      image: "/placeholder.svg?height=200&width=320",
      cuisines: ["South Indian", "Healthy"],
      distance: "2.8 km",
      deliveryTime: "25-35 mins",
      minOrder: 120,
      address: "321 Jayanagar, 4th Block, Bangalore",
      phone: "+91 9876543213",
      openingHours: "7:00 AM - 9:00 PM",
      healthScore: 8.7,
      specialDiets: ["Diabetic-Friendly", "Low-Oil", "Traditional"],
    },
  ])

  // Add a state variable for customization modal
  const [showCustomization, setShowCustomization] = useState(false)

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const addToCart = (id: number) => {
    const existingItem = cart.find((item) => item.id === id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { id, quantity: 1 }])
    }
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const filteredItems = foodItems.filter((item) => {
    // Filter by category
    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false
    }

    // Filter by search term
    if (
      searchTerm &&
      !item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !item.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  const filteredRestaurants = restaurants.filter((restaurant) => {
    // Filter by search term
    if (
      searchTerm &&
      !restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !restaurant.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !restaurant.cuisines.some((cuisine) => cuisine.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0)
  const totalCartPrice = cart.reduce((total, item) => {
    const foodItem = foodItems.find((food) => food.id === item.id)
    return total + (foodItem?.price || 0) * item.quantity
  }, 0)

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Healthy Food Delivery</h1>
        <div className="flex items-center mt-2 text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="mr-2">Delivering to:</span>
          <Select defaultValue={location} onValueChange={setLocation}>
            <SelectTrigger className="w-[240px] h-8 text-sm border-none bg-transparent hover:bg-muted focus:ring-0">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bangalore, HSR Layout">Bangalore, HSR Layout</SelectItem>
              <SelectItem value="Bangalore, Indiranagar">Bangalore, Indiranagar</SelectItem>
              <SelectItem value="Bangalore, Koramangala">Bangalore, Koramangala</SelectItem>
              <SelectItem value="Bangalore, Whitefield">Bangalore, Whitefield</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Add a location selector component at the top of the page */}
      {/* Add this after the heading section */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Find Healthy Restaurants Near You</h2>
            <p className="text-muted-foreground">
              Discover restaurants that offer nutritious meals tailored to your health needs.
            </p>
          </div>
          <Button onClick={() => setShowLocationModal(true)} className="bg-emerald-600 hover:bg-emerald-700">
            <MapPinIcon className="mr-2 h-4 w-4" />
            Change Location
          </Button>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-emerald-100 text-emerald-800 p-4 rounded-md shadow-md border border-emerald-200 animate-fade-in">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <span>Item added to cart successfully!</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
        {/* Filters sidebar */}
        <div className="order-2 lg:order-1">
          <div className="sticky top-20">
            <Card className="border-saffron-100 mb-6">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Filters</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 lg:hidden"
                    onClick={() => setFiltersOpen(!filtersOpen)}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    {filtersOpen ? "Hide" : "Show"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="font-medium">Dietary Preferences</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="vegetarian" />
                        <Label htmlFor="vegetarian">Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="vegan" />
                        <Label htmlFor="vegan">Vegan</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gluten-free" />
                        <Label htmlFor="gluten-free">Gluten Free</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="dairy-free" />
                        <Label htmlFor="dairy-free">Dairy Free</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="font-medium">Health Focus</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="diabetes-friendly" />
                        <Label htmlFor="diabetes-friendly">Diabetes-Friendly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="heart-healthy" />
                        <Label htmlFor="heart-healthy">Heart-Healthy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weight-loss" />
                        <Label htmlFor="weight-loss">Weight Loss</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="high-protein" />
                        <Label htmlFor="high-protein">High Protein</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="font-medium">Cuisine Type</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="north-indian" defaultChecked />
                        <Label htmlFor="north-indian">North Indian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="south-indian" defaultChecked />
                        <Label htmlFor="south-indian">South Indian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="continental" />
                        <Label htmlFor="continental">Continental</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mediterranean" />
                        <Label htmlFor="mediterranean">Mediterranean</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="font-medium">Price Range</Label>
                    <RadioGroup defaultValue="all">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all-prices" />
                        <Label htmlFor="all-prices">All Prices</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-100" id="under-100" />
                        <Label htmlFor="under-100">Under ₹100</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100-200" id="100-200" defaultChecked />
                        <Label htmlFor="100-200">₹100 - ₹200</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="above-200" id="above-200" />
                        <Label htmlFor="above-200">Above ₹200</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button className="w-full bg-saffron-500 hover:bg-saffron-600">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>

            {/* Cart summary */}
            {cart.length > 0 && (
              <Card className="border-saffron-100">
                <CardHeader className="pb-3">
                  <CardTitle>Your Cart ({totalCartItems})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cart.map((cartItem) => {
                      const item = foodItems.find((food) => food.id === cartItem.id)
                      if (!item) return null
                      return (
                        <div key={cartItem.id} className="flex items-center gap-3">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-xs text-muted-foreground">
                              ₹{item.price} x {cartItem.quantity}
                            </div>
                          </div>
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-none"
                              onClick={() => updateCartQuantity(cartItem.id, cartItem.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-7 text-center text-sm">{cartItem.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-none"
                              onClick={() => updateCartQuantity(cartItem.id, cartItem.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>₹{totalCartPrice}</span>
                  </div>
                  <Link href="/cart">
                    <Button className="w-full mt-4 bg-saffron-500 hover:bg-saffron-600">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="order-1 lg:order-2">
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search for meals, restaurants, or cuisines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <Tabs defaultValue="meals" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="meals">Healthy Meals</TabsTrigger>
              <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
              {/* Add a new tab for nearby restaurants */}
              {/* Find the TabsList in the component and add a new TabsTrigger: */}
              <TabsTrigger value="nearby">Nearby</TabsTrigger>
            </TabsList>

            <TabsContent value="meals">
              <div className="mb-6">
                <TabsList>
                  <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>
                    All
                  </TabsTrigger>
                  <TabsTrigger value="breakfast" onClick={() => setActiveCategory("breakfast")}>
                    Breakfast
                  </TabsTrigger>
                  <TabsTrigger value="lunch" onClick={() => setActiveCategory("lunch")}>
                    Lunch
                  </TabsTrigger>
                  <TabsTrigger value="dinner" onClick={() => setActiveCategory("dinner")}>
                    Dinner
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.length === 0 ? (
                  <div className="col-span-2 text-center py-12">
                    <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-lg font-semibold">No meals found</h3>
                    <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
                    >
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        {item.popular && <Badge className="absolute top-2 left-2 bg-spice-500">Popular</Badge>}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                          onClick={() => toggleFavorite(item.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${favorites.includes(item.id) ? "fill-spice-500 text-spice-500" : ""}`}
                          />
                          <span className="sr-only">Add to favorites</span>
                        </Button>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="bg-saffron-50">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{item.deliveryTime}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{item.distance}</span>
                          </div>
                          <div className="flex items-center font-medium text-saffron-700">₹{item.price}</div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="w-full flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="flex-1 border-saffron-200">
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>{item.name}</DialogTitle>
                                <DialogDescription>{item.description}</DialogDescription>
                              </DialogHeader>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-md"
                                  />
                                  <div className="mt-4">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      {item.tags.map((tag, index) => (
                                        <Badge key={index} variant="outline" className="bg-saffron-50">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                      <div className="flex flex-col items-center p-3 bg-saffron-50 rounded-md">
                                        <span className="text-sm text-muted-foreground">Calories</span>
                                        <span className="font-medium">{item.calories}</span>
                                      </div>
                                      <div className="flex flex-col items-center p-3 bg-saffron-50 rounded-md">
                                        <span className="text-sm text-muted-foreground">Prep Time</span>
                                        <span className="font-medium">{item.prepTime}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center">
                                      <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                                      <span className="font-medium">{item.rating}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">({item.reviews} reviews)</span>
                                  </div>
                                  <div className="space-y-3 mb-4">
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Restaurant</span>
                                      <span>{item.restaurant}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Delivery Time</span>
                                      <span>{item.deliveryTime}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Distance</span>
                                      <span>{item.distance}</span>
                                    </div>
                                  </div>
                                  <Separator className="my-4" />
                                  <div className="flex justify-between items-center mb-4">
                                    <span className="font-medium">Price:</span>
                                    <span className="text-xl font-bold text-saffron-700">₹{item.price}</span>
                                  </div>
                                  {/* Add this inside the DialogContent, before the "Add to Cart" button */}

                                  <Button
                                    variant="outline"
                                    className="w-full mb-2 border-saffron-200"
                                    onClick={() => setShowCustomization(true)}
                                  >
                                    <Settings className="mr-2 h-4 w-4" />
                                    Customize Meal
                                  </Button>
                                  <Button
                                    className="w-full bg-saffron-500 hover:bg-saffron-600"
                                    onClick={() => addToCart(item.id)}
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            className="flex-1 bg-saffron-500 hover:bg-saffron-600"
                            onClick={() => addToCart(item.id)}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="restaurants">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRestaurants.length === 0 ? (
                  <div className="col-span-2 text-center py-12">
                    <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-lg font-semibold">No restaurants found</h3>
                    <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredRestaurants.map((restaurant) => (
                    <Card
                      key={restaurant.id}
                      className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
                    >
                      <div className="relative">
                        <img
                          src={restaurant.image || "/placeholder.svg"}
                          alt={restaurant.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                            <span className="text-sm font-medium">{restaurant.rating}</span>
                          </div>
                        </div>
                        <CardDescription>{restaurant.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {restaurant.cuisines.map((cuisine, index) => (
                            <Badge key={index} variant="outline" className="bg-saffron-50">
                              {cuisine}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{restaurant.deliveryTime}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{restaurant.distance}</span>
                          </div>
                          <div className="flex items-center">
                            <span>Min. ₹{restaurant.minOrder}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/restaurants/${restaurant.id}`} className="w-full">
                          <Button className="w-full bg-saffron-500 hover:bg-saffron-600">
                            View Restaurant
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            {/* Add the new TabsContent for nearby restaurants */}
            {/* Add this after the restaurants TabsContent */}
            <TabsContent value="nearby">
              <div className="mb-4 flex items-center">
                <MapPinIcon className="h-5 w-5 text-emerald-600 mr-2" />
                <span className="font-medium">Showing healthy restaurants near {userLocation}</span>
              </div>

              <div className="space-y-6">
                {nearbyRestaurants.map((restaurant) => (
                  <Card
                    key={restaurant.id}
                    className="overflow-hidden border-emerald-100 hover:border-emerald-300 transition-all"
                  >
                    <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                      <div className="relative">
                        <img
                          src={restaurant.image || "/placeholder.svg"}
                          alt={restaurant.name}
                          className="h-full w-full object-cover"
                        />
                        <Badge className="absolute top-2 left-2 bg-emerald-500">
                          {restaurant.healthScore} Health Score
                        </Badge>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">{restaurant.name}</h3>
                            <p className="text-muted-foreground">{restaurant.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {restaurant.cuisines.map((cuisine, index) => (
                                <Badge key={index} variant="outline" className="bg-emerald-50">
                                  {cuisine}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <StarIcon className="h-5 w-5 fill-amber-400 text-amber-400 mr-1" />
                            <span className="font-medium">{restaurant.rating}</span>
                            <span className="text-sm text-muted-foreground ml-1">({restaurant.reviews})</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                          <div className="flex items-center">
                            <Navigation className="h-4 w-4 text-emerald-600 mr-2" />
                            <span className="text-sm">{restaurant.distance}</span>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 text-emerald-600 mr-2" />
                            <span className="text-sm">{restaurant.deliveryTime}</span>
                          </div>
                          <div className="flex items-center">
                            <ShoppingCart className="h-4 w-4 text-emerald-600 mr-2" />
                            <span className="text-sm">Min ₹{restaurant.minOrder}</span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Special Diets:</h4>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.specialDiets.map((diet, index) => (
                              <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700">
                                {diet}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="border-emerald-200">
                                <Info className="h-4 w-4 mr-2" />
                                Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>{restaurant.name}</DialogTitle>
                                <DialogDescription>{restaurant.description}</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                  <MapPinIcon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-medium">Address</h4>
                                    <p className="text-sm text-muted-foreground">{restaurant.address}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-medium">Contact</h4>
                                    <p className="text-sm text-muted-foreground">{restaurant.phone}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <ClockIcon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-medium">Opening Hours</h4>
                                    <p className="text-sm text-muted-foreground">{restaurant.openingHours}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <StarIcon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-medium">Health Score: {restaurant.healthScore}/10</h4>
                                    <p className="text-sm text-muted-foreground">
                                      This score is based on nutritional quality, ingredient sourcing, and preparation
                                      methods.
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Special Diets Accommodated:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {restaurant.specialDiets.map((diet, index) => (
                                      <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700">
                                        {diet}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Link href={`/restaurants/${restaurant.id}`}>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">
                              View Menu
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Location Selection Modal */}
      <Dialog open={showLocationModal} onOpenChange={setShowLocationModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Your Location</DialogTitle>
            <DialogDescription>Choose your location to find nearby restaurants and delivery options.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Select defaultValue="bangalore">
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="area">Area</Label>
              <Select
                defaultValue="hsr"
                onValueChange={(value) => {
                  const areas = {
                    hsr: "Bangalore, HSR Layout",
                    koramangala: "Bangalore, Koramangala",
                    indiranagar: "Bangalore, Indiranagar",
                    jayanagar: "Bangalore, Jayanagar",
                    whitefield: "Bangalore, Whitefield",
                  }
                  setUserLocation(areas[value])
                }}
              >
                <SelectTrigger id="area">
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hsr">HSR Layout</SelectItem>
                  <SelectItem value="koramangala">Koramangala</SelectItem>
                  <SelectItem value="indiranagar">Indiranagar</SelectItem>
                  <SelectItem value="jayanagar">Jayanagar</SelectItem>
                  <SelectItem value="whitefield">Whitefield</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="address">Detailed Address (Optional)</Label>
              <Input id="address" placeholder="Apartment/House No., Street Name" />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  // In a real app, this would use the browser's geolocation API
                  setUserLocation("Bangalore, Current Location")
                  setShowLocationModal(false)
                }}
              >
                <Navigation className="mr-2 h-4 w-4" />
                Use Current Location
              </Button>
              <Button
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                onClick={() => setShowLocationModal(false)}
              >
                Save Location
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Add this Dialog component at the end of the file, before the closing return tag */}

      <Dialog open={showCustomization} onOpenChange={setShowCustomization}>
        <DialogContent>
          <MealCustomizationSliders onClose={() => setShowCustomization(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
