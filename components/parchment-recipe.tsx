"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Flame, Users, Info } from "lucide-react"

interface Ingredient {
  name: string
  quantity: string
  localName?: string
  tooltip?: string
}

interface RecipeStep {
  step: string
  image?: string
}

interface RecipeProps {
  title: string
  description: string
  region: string
  prepTime: string
  cookTime: string
  servings: number
  calories: number
  ingredients: Ingredient[]
  steps: RecipeStep[]
  healthBenefits: string[]
  image: string
}

export function ParchmentRecipe({
  title,
  description,
  region,
  prepTime,
  cookTime,
  servings,
  calories,
  ingredients,
  steps,
  healthBenefits,
  image,
}: RecipeProps) {
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-6 rounded-xl overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <Badge className="self-start mb-2 bg-haldi-500 text-jaggery-900">{region}</Badge>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-white/90 mt-2">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center justify-center p-4 bg-sweetlime-50 rounded-lg border border-haldi-200">
          <Clock className="h-5 w-5 text-haldi-500 mr-2" />
          <div>
            <p className="text-sm text-muted-foreground">Prep Time</p>
            <p className="font-medium">{prepTime}</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-sweetlime-50 rounded-lg border border-haldi-200">
          <Flame className="h-5 w-5 text-tandoori-700 mr-2" />
          <div>
            <p className="text-sm text-muted-foreground">Cook Time</p>
            <p className="font-medium">{cookTime}</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-sweetlime-50 rounded-lg border border-haldi-200">
          <Users className="h-5 w-5 text-curryleaf-500 mr-2" />
          <div>
            <p className="text-sm text-muted-foreground">Servings</p>
            <p className="font-medium">{servings} people</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <motion.div
            className="bg-texture-haldi-wash bg-sweetlime-50 rounded-xl p-6 border border-jaggery-300 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-jaggery-600 mb-4 text-center border-b border-jaggery-200 pb-2">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-haldi-500 mt-2 mr-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-medium">
                        {ingredient.quantity} {ingredient.name}
                      </span>
                      {ingredient.localName && (
                        <div className="relative ml-2">
                          <button
                            className="text-xs text-indigo-900 bg-indigo-100 px-1 rounded"
                            onMouseEnter={() => setShowTooltip(ingredient.name)}
                            onMouseLeave={() => setShowTooltip(null)}
                          >
                            {ingredient.localName}
                          </button>
                          {showTooltip === ingredient.name && ingredient.tooltip && (
                            <div className="absolute z-10 w-48 p-2 bg-white rounded shadow-lg text-xs border border-gray-200 -top-2 left-full ml-2">
                              {ingredient.tooltip}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mt-6 bg-white rounded-xl p-6 border border-jaggery-300 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-jaggery-600 mb-4 text-center border-b border-jaggery-200 pb-2">
              Health Benefits
            </h2>
            <ul className="space-y-3">
              {healthBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-curryleaf-100 text-curryleaf-700 flex items-center justify-center mr-2 flex-shrink-0">
                    <Info className="h-3 w-3" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="md:col-span-2">
          <motion.div
            className="bg-pattern-kalamkari bg-white bg-opacity-95 rounded-xl p-6 border border-jaggery-300 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-jaggery-600 mb-6 text-center border-b border-jaggery-200 pb-2">
              Preparation
            </h2>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-haldi-100 text-haldi-800 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p>{step.step}</p>
                    {step.image && (
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={`Step ${index + 1}`}
                        className="mt-3 rounded-lg w-full max-w-xs h-auto"
                      />
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button className="bg-haldi-500 hover:bg-haldi-600 text-jaggery-900">Print Recipe</Button>
      </div>
    </div>
  )
}
