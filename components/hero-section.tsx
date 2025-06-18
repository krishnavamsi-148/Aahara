"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Utensils, Heart, Activity } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "https://images.pexels.com/photos/13243817/pexels-photo-13243817.jpeg?auto=compress&cs=tinysrgb&w=600?height=600&width=800",
    "https://images.pexels.com/photos/17104961/pexels-photo-17104961/free-photo-of-examples-of-philippians-cuisine.jpeg?auto=compress&cs=tinysrgb&w=600?height=600&width=800",
    "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600?height=600&width=800",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative overflow-hidden bg-pattern-warli">
      <div className="absolute inset-0 bg-gradient-to-r from-saffron-500/10 to-spice-500/10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-saffron-100 text-saffron-800 hover:bg-saffron-200 px-3 py-1 text-sm">
                <Sparkles className="mr-1 h-3 w-3" />
                AI-Powered Nutrition
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-saffron-600 to-spice-600 bg-clip-text text-transparent">
                  Traditional Wisdom,
                </span>
                <br />
                Modern Nutrition
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Personalized meal plans and diet charts based on your health conditions, combining traditional Indian
                recipes with AI-powered recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-saffron-500 hover:bg-saffron-600">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-saffron-200">
                  Explore Meal Plans
                </Button>
              </div>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mb-2">
                  <Utensils className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Personalized Meals</h3>
                <p className="text-xs text-muted-foreground mt-1">Based on your health profile</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-spice-100 text-spice-700 flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Health-Focused</h3>
                <p className="text-xs text-muted-foreground mt-1">For specific health conditions</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-turmeric-100 text-turmeric-700 flex items-center justify-center mb-2">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Track Progress</h3>
                <p className="text-xs text-muted-foreground mt-1">Monitor your health journey</p>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-saffron-500/20 to-transparent"></div>
              <img
                src={
                  images[currentImage] ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfswkrKUVixgTCIR0jM6gdmTKsof0Jm22fg&s"
                }
                alt="Healthy Indian meal"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <Badge className="bg-white/90 text-saffron-700 mb-2">Featured</Badge>
                <h3 className="text-xl font-bold text-white">Diabetes-Friendly Thali</h3>
                <p className="text-sm text-white/90">A balanced meal with low glycemic index ingredients</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]"
            >
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-neem-100 text-neem-700 flex items-center justify-center mr-2">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="font-medium text-sm">AI Analysis</span>
              </div>
              <p className="text-xs text-muted-foreground">
                "This meal is optimized for blood sugar control with a balanced mix of protein and complex carbs."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]"
            >
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-peacock-100 text-peacock-700 flex items-center justify-center mr-2">
                  <Activity className="h-4 w-4" />
                </div>
                <span className="font-medium text-sm">Health Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-neem-500 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <span className="text-xs font-medium">85%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Positive impact on blood sugar levels</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
