"use client"

import { useState } from "react"
import { SplashScreen } from "@/components/splash-screen"
import { SpiceBoxDashboard } from "@/components/spice-box-dashboard"
import { PalmLeafCalendar } from "@/components/palm-leaf-calendar"
import { ParchmentRecipe } from "@/components/parchment-recipe"
import { DeliveryTracker } from "@/components/delivery-tracker"
import { TempleOfWellness } from "@/components/temple-of-wellness"
import { RegionalThemeProvider } from "@/components/regional-theme-provider"
import { RegionalThemeSelector } from "@/components/regional-theme-selector"
import { ThaliMealCard } from "@/components/thali-meal-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DesignSystemPage() {
  const [showSplash, setShowSplash] = useState(false)

  // Sample recipe data
  const sampleRecipe = {
    title: "Ragi Dosa with Sambar",
    description: "A nutritious South Indian breakfast made with finger millet flour",
    region: "South Indian",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    calories: 320,
    ingredients: [
      {
        name: "Ragi flour",
        quantity: "1 cup",
        localName: "Finger millet",
        tooltip: "Rich in calcium and fiber, helps control blood sugar levels",
      },
      {
        name: "Rice flour",
        quantity: "1/2 cup",
      },
      {
        name: "Urad dal",
        quantity: "1/4 cup",
        localName: "Black gram",
        tooltip: "Used in South Indian sambars and provides protein",
      },
      {
        name: "Fenugreek seeds",
        quantity: "1 tsp",
        localName: "Methi",
        tooltip: "Helps with digestion and blood sugar control",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Water",
        quantity: "as needed",
      },
      {
        name: "Oil",
        quantity: "for cooking",
      },
    ],
    steps: [
      {
        step: "Wash and soak urad dal and fenugreek seeds for 4-5 hours.",
      },
      {
        step: "Drain the water and grind to a smooth paste.",
      },
      {
        step: "Mix ragi flour and rice flour with the urad dal paste.",
      },
      {
        step: "Add water to make a batter of pouring consistency.",
      },
      {
        step: "Add salt and let it ferment overnight or for at least 6-8 hours.",
      },
      {
        step: "Heat a non-stick pan or dosa tawa.",
      },
      {
        step: "Pour a ladleful of batter and spread it in a circular motion.",
      },
      {
        step: "Drizzle a little oil around the edges.",
      },
      {
        step: "Cook until the bottom turns golden brown.",
      },
      {
        step: "Fold and serve hot with sambar.",
      },
    ],
    healthBenefits: [
      "Low glycemic index helps manage blood sugar levels",
      "Rich in calcium for bone health",
      "High in dietary fiber for digestion",
      "Contains essential amino acids",
    ],
    image: "/placeholder.svg?height=400&width=800",
  }

  // Sample thali meal data
  const sampleThaliMeals = [
    {
      title: "Diabetic-Friendly Thali",
      description: "Low-GI foods with balanced nutrients for blood sugar management",
      price: 249,
      image: "/placeholder.svg?height=200&width=320",
      healthScore: 9,
      tags: ["Low-GI", "High-Fiber", "Balanced"],
      calories: 450,
    },
    {
      title: "Heart-Healthy Thali",
      description: "Low-sodium, heart-friendly meals with essential nutrients",
      price: 279,
      image: "/placeholder.svg?height=200&width=320",
      healthScore: 8,
      tags: ["Low-Sodium", "Omega-3", "Antioxidants"],
      calories: 420,
    },
    {
      title: "Weight Management Thali",
      description: "Calorie-controlled meals with optimal protein and fiber",
      price: 229,
      image: "/placeholder.svg?height=200&width=320",
      healthScore: 8,
      tags: ["Low-Calorie", "High-Protein", "Filling"],
      calories: 380,
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Aahara Design System</h1>
      <p className="text-muted-foreground mb-8">
        A comprehensive design system incorporating traditional Indian art forms and cultural elements
      </p>

      <Button onClick={() => setShowSplash(true)} className="mb-8 bg-haldi-500 hover:bg-haldi-600 text-jaggery-900">
        Show Splash Screen
      </Button>
      {showSplash && <SplashScreen />}

      <RegionalThemeProvider>
        <div className="flex justify-end mb-4">
          <RegionalThemeSelector />
        </div>

        <Tabs defaultValue="dashboard">
          <TabsList className="w-full">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="recipe">Recipe</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
            <TabsTrigger value="thali">Thali Cards</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <SpiceBoxDashboard />
          </TabsContent>

          <TabsContent value="calendar" className="mt-6">
            <PalmLeafCalendar />
          </TabsContent>

          <TabsContent value="recipe" className="mt-6">
            <ParchmentRecipe {...sampleRecipe} />
          </TabsContent>

          <TabsContent value="delivery" className="mt-6">
            <DeliveryTracker />
          </TabsContent>

          <TabsContent value="wellness" className="mt-6">
            <TempleOfWellness />
          </TabsContent>

          <TabsContent value="thali" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleThaliMeals.map((meal, index) => (
                <ThaliMealCard key={index} {...meal} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </RegionalThemeProvider>
    </div>
  )
}
