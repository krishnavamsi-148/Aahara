"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Heart, Star, Calendar, User, Utensils, Leaf, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface MealKit {
  id: string
  title: string
  description: string
  image: string
  price: number
  discountPrice?: number
  rating: number
  reviews: number
  doctor: {
    name: string
    specialty: string
    image: string
  }
  tags: string[]
  healthConditions: string[]
  mealCount: number
  duration: string
  featured: boolean
}

export function DoctorCuratedMealKits() {
  const [activeTab, setActiveTab] = useState("all")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const mealKits: MealKit[] = [
    {
      id: "diabetes-friendly",
      title: "Diabetes Management Meal Kit",
      description: "Doctor-curated meals with low glycemic index ingredients to help manage blood sugar levels.",
      image: "/placeholder.svg?height=200&width=320",
      price: 1999,
      discountPrice: 1699,
      rating: 4.8,
      reviews: 124,
      doctor: {
        name: "Dr. Priya Sharma",
        specialty: "Endocrinologist",
        image: "/placeholder.svg?height=50&width=50",
      },
      tags: ["Low GI", "Balanced Meals", "Portion Controlled"],
      healthConditions: ["Diabetes", "Pre-diabetes"],
      mealCount: 14,
      duration: "7 days",
      featured: true,
    },
    {
      id: "heart-health",
      title: "Heart Health Meal Kit",
      description: "Cardiologist-approved meals low in sodium and unhealthy fats to support cardiovascular health.",
      image: "/placeholder.svg?height=200&width=320",
      price: 2199,
      discountPrice: 1899,
      rating: 4.7,
      reviews: 98,
      doctor: {
        name: "Dr. Rajesh Kumar",
        specialty: "Cardiologist",
        image: "/placeholder.svg?height=50&width=50",
      },
      tags: ["Low Sodium", "Heart-Healthy Fats", "Antioxidant Rich"],
      healthConditions: ["Hypertension", "High Cholesterol"],
      mealCount: 14,
      duration: "7 days",
      featured: true,
    },
    {
      id: "weight-management",
      title: "Weight Management Meal Kit",
      description: "Nutritionist-designed calorie-controlled meals with optimal macronutrient balance.",
      image: "/placeholder.svg?height=200&width=320",
      price: 1899,
      rating: 4.6,
      reviews: 87,
      doctor: {
        name: "Dr. Anita Desai",
        specialty: "Nutritionist",
        image: "/placeholder.svg?height=50&width=50",
      },
      tags: ["Calorie Controlled", "High Protein", "Fiber Rich"],
      healthConditions: ["Obesity", "Weight Management"],
      mealCount: 15,
      duration: "5 days",
      featured: false,
    },
    {
      id: "thyroid-support",
      title: "Thyroid Support Meal Kit",
      description: "Specially formulated meals with iodine-rich ingredients and selenium to support thyroid function.",
      image: "/placeholder.svg?height=200&width=320",
      price: 2099,
      rating: 4.5,
      reviews: 76,
      doctor: {
        name: "Dr. Sanjay Gupta",
        specialty: "Endocrinologist",
        image: "/placeholder.svg?height=50&width=50",
      },
      tags: ["Iodine Rich", "Selenium Rich", "Anti-inflammatory"],
      healthConditions: ["Hypothyroidism", "Hashimoto's"],
      mealCount: 12,
      duration: "6 days",
      featured: false,
    },
    {
      id: "pcos-management",
      title: "PCOS Management Meal Kit",
      description: "Low-glycemic, anti-inflammatory meals designed to help manage PCOS symptoms.",
      image: "/placeholder.svg?height=200&width=320",
      price: 1999,
      discountPrice: 1799,
      rating: 4.7,
      reviews: 92,
      doctor: {
        name: "Dr. Meera Patel",
        specialty: "Gynecologist",
        image: "/placeholder.svg?height=50&width=50",
      },
      tags: ["Low GI", "Anti-inflammatory", "Hormone Balancing"],
      healthConditions: ["PCOS", "Insulin Resistance"],
      mealCount: 14,
      duration: "7 days",
      featured: true,
    },
    {
      id: "ayurvedic-detox",
      title: "Ayurvedic Detox Meal Kit",
      description: "Traditional Ayurvedic meals designed to cleanse and rejuvenate according to your dosha.",
      image: "/placeholder.svg?height=200&width=320",
      price: 2299,
      rating: 4.9,
      reviews: 108,
      doctor: {
        name: "Dr. Arjun Verma",
        specialty: "Ayurvedic Physician",
        image: "/placeholder.svg?height=50&width=50",
      },
      tags: ["Ayurvedic", "Detoxifying", "Dosha Balancing"],
      healthConditions: ["General Wellness", "Digestive Issues"],
      mealCount: 15,
      duration: "5 days",
      featured: false,
    },
  ]

  const filteredMealKits =
    activeTab === "all"
      ? mealKits
      : activeTab === "featured"
        ? mealKits.filter((kit) => kit.featured)
        : mealKits.filter((kit) =>
            kit.healthConditions.some((condition) => condition.toLowerCase().includes(activeTab.toLowerCase())),
          )

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Doctor-Curated Meal Kits</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Expertly designed meal kits by leading healthcare professionals, tailored to specific health conditions and
          nutritional needs.
        </p>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-center mb-6 overflow-x-auto">
          <TabsTrigger value="all">All Kits</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
          <TabsTrigger value="heart">Heart Health</TabsTrigger>
          <TabsTrigger value="weight">Weight Management</TabsTrigger>
          <TabsTrigger value="thyroid">Thyroid</TabsTrigger>
          <TabsTrigger value="pcos">PCOS</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMealKits.map((kit) => (
              <Card key={kit.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={kit.image || "/placeholder.svg"}
                    alt={kit.title}
                    width={320}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {kit.discountPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      {Math.round(((kit.price - kit.discountPrice) / kit.price) * 100)}% OFF
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(kit.id)}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(kit.id) ? "fill-red-500 text-red-500" : ""}`} />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{kit.title}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                      <span className="text-sm font-medium">{kit.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({kit.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-1">
                    <Image
                      src={kit.doctor.image || "/placeholder.svg"}
                      alt={kit.doctor.name}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span className="text-sm text-muted-foreground">
                      {kit.doctor.name}, {kit.doctor.specialty}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{kit.description}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {kit.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-emerald-50 text-emerald-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Utensils className="mr-1 h-3 w-3" />
                      <span>{kit.mealCount} meals</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{kit.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div>
                      {kit.discountPrice ? (
                        <div className="flex items-center">
                          <span className="text-lg font-bold">₹{kit.discountPrice}</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">₹{kit.price}</span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold">₹{kit.price}</span>
                      )}
                    </div>
                    <div className="flex items-center text-emerald-600 text-sm">
                      <Leaf className="h-3 w-3 mr-1" />
                      <span>Fresh ingredients</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex gap-2">
                    <Link href={`/meal-kits/${kit.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Button className="flex-1 bg-saffron-500 hover:bg-saffron-600">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/meal-kits">
              <Button variant="outline" className="border-saffron-200">
                View All Meal Kits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 mt-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-emerald-100 flex items-center justify-center">
              <User className="h-12 w-12 text-emerald-600" />
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-2">Personalized Meal Kit Recommendation</h3>
            <p className="text-muted-foreground mb-4">
              Answer a few questions about your health conditions, dietary preferences, and goals to get a personalized
              meal kit recommendation from our healthcare professionals.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Personalized Recommendation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
