"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FoodItem {
  id: string
  name: string
  category: string
  healthScore: number
  isSelected: boolean
  image: string
}

export function ThaliBuilderGame() {
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [feedback, setFeedback] = useState("")

  // Initial food items
  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    {
      id: "1",
      name: "Brown Rice",
      category: "Grain",
      healthScore: 8,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "2",
      name: "Chapati",
      category: "Grain",
      healthScore: 7,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "3",
      name: "Dal",
      category: "Protein",
      healthScore: 9,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "4",
      name: "Paneer",
      category: "Protein",
      healthScore: 7,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "5",
      name: "Spinach",
      category: "Vegetable",
      healthScore: 10,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "6",
      name: "Okra",
      category: "Vegetable",
      healthScore: 8,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "7",
      name: "Yogurt",
      category: "Dairy",
      healthScore: 9,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "8",
      name: "Pickle",
      category: "Condiment",
      healthScore: 4,
      isSelected: false,
      image: "/placeholder.svg?height=50&width=50",
    },
  ])

  const toggleFoodItem = (id: string) => {
    if (!gameStarted || gameCompleted) return

    setFoodItems(
      foodItems.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: !item.isSelected }
        }
        return item
      }),
    )
  }

  const startGame = () => {
    setGameStarted(true)
    setGameCompleted(false)
    setScore(0)
    setFeedback("")
    setFoodItems(foodItems.map((item) => ({ ...item, isSelected: false })))
  }

  const completeThali = () => {
    const selectedItems = foodItems.filter((item) => item.isSelected)

    if (selectedItems.length === 0) {
      setFeedback("Please select at least one item for your thali.")
      return
    }

    // Calculate score based on selected items
    let newScore = 0
    let hasPrimaryGrain = false
    let hasProtein = false
    let hasVegetable = false
    let hasDairy = false

    selectedItems.forEach((item) => {
      newScore += item.healthScore

      if (item.category === "Grain") hasPrimaryGrain = true
      if (item.category === "Protein") hasProtein = true
      if (item.category === "Vegetable") hasVegetable = true
      if (item.category === "Dairy") hasDairy = true
    })

    // Bonus for balanced meal
    if (hasPrimaryGrain && hasProtein && hasVegetable) {
      newScore += 10
    }

    // Normalize score to 100
    newScore = Math.min(100, Math.round((newScore / (selectedItems.length * 10 + 10)) * 100))

    setScore(newScore)
    setGameCompleted(true)

    // Generate feedback
    if (newScore >= 80) {
      setFeedback("Excellent! Your thali is well-balanced and nutritious.")
    } else if (newScore >= 60) {
      setFeedback("Good job! Your thali is fairly balanced but could use some improvements.")
    } else {
      setFeedback("Your thali needs more balance. Try adding more vegetables and proteins.")
    }
  }

  return (
    <div className="space-y-4">
      {!gameStarted ? (
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Build a balanced thali by selecting nutritious food items. Learn about healthy meal composition while having
            fun!
          </p>
          <Button onClick={startGame} className="bg-saffron-500 hover:bg-saffron-600">
            Start Game
          </Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Build Your Thali</h4>
            {!gameCompleted && (
              <Button size="sm" onClick={completeThali} className="bg-saffron-500 hover:bg-saffron-600">
                Complete Thali
              </Button>
            )}
          </div>

          <div className="grid grid-cols-4 gap-2">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className={`p-2 border rounded-lg cursor-pointer transition-all ${
                  item.isSelected ? "border-saffron-500 bg-saffron-50" : "border-gray-200"
                }`}
                onClick={() => toggleFoodItem(item.id)}
              >
                <div className="flex flex-col items-center">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-8 h-8 mb-1" />
                  <span className="text-xs font-medium text-center">{item.name}</span>
                  <Badge variant="outline" className="mt-1 text-xs px-1">
                    {item.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {gameCompleted && (
            <Card className={`mt-4 ${score >= 80 ? "bg-green-50" : score >= 60 ? "bg-amber-50" : "bg-red-50"}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Thali Score</h4>
                  <span className="font-bold text-lg">{score}/100</span>
                </div>
                <p className="text-sm mb-2">{feedback}</p>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" size="sm" onClick={startGame}>
                    Try Again
                  </Button>
                  <Button size="sm" className="bg-saffron-500 hover:bg-saffron-600">
                    Share Result
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
