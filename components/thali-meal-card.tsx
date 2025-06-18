"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRegionalTheme } from "./regional-theme-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Info } from "lucide-react"

interface ThaliMealCardProps {
  title: string
  description: string
  price: number
  image: string
  healthScore: number
  tags: string[]
  calories: number
}

export function ThaliMealCard({ title, description, price, image, healthScore, tags, calories }: ThaliMealCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { region, themeClass } = useRegionalTheme()

  // Get region-specific styling
  const getRegionalStyling = () => {
    switch (region) {
      case "andhra":
        return {
          borderClass: "border-2 border-tandoori-700",
          badgeClass: "bg-tandoori-700",
          buttonClass: "bg-tandoori-700 hover:bg-tandoori-600",
          patternClass: "bg-pattern-kalamkari",
        }
      case "tamil":
        return {
          borderClass: "border-2 border-curryleaf-500",
          badgeClass: "bg-curryleaf-500",
          buttonClass: "bg-curryleaf-500 hover:bg-curryleaf-600",
          patternClass: "bg-pattern-kolam",
        }
      case "kerala":
        return {
          borderClass: "border-2 border-jaggery-600",
          badgeClass: "bg-jaggery-600",
          buttonClass: "bg-jaggery-600 hover:bg-jaggery-500",
          patternClass: "bg-texture-banana-leaf",
        }
      case "bengal":
        return {
          borderClass: "border-2 border-indigo-900",
          badgeClass: "bg-indigo-900",
          buttonClass: "bg-indigo-900 hover:bg-indigo-800",
          patternClass: "bg-texture-mud-wall",
        }
      case "gujarat":
        return {
          borderClass: "border-2 border-haldi-500",
          badgeClass: "bg-haldi-500",
          buttonClass: "bg-haldi-500 hover:bg-haldi-400 text-jaggery-900",
          patternClass: "bg-pattern-phulkari",
        }
      case "punjab":
        return {
          borderClass: "border-2 border-mustard-600",
          badgeClass: "bg-mustard-600",
          buttonClass: "bg-mustard-600 hover:bg-mustard-500",
          patternClass: "bg-gradient-pongal",
        }
      default:
        return {
          borderClass: "border-2 border-saffron-500",
          badgeClass: "bg-saffron-500",
          buttonClass: "bg-saffron-500 hover:bg-saffron-600",
          patternClass: "bg-sweetlime-50",
        }
    }
  }

  const styling = getRegionalStyling()

  return (
    <motion.div
      className={`rounded-xl overflow-hidden shadow-md ${styling.borderClass} ${styling.patternClass} bg-opacity-10`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <Badge className={`absolute top-2 left-2 ${styling.badgeClass}`}>{healthScore}/10 Health Score</Badge>
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-white/80">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Info className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground">{calories} cal</span>
          </div>
          <div className="font-bold text-lg">₹{price}</div>
        </div>

        <Button className={`w-full ${styling.buttonClass}`}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )
}
