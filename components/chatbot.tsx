"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export function Chatbot() {
  // Update the initial messages to include recipe-related information
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Hello! I'm your Aahara nutrition assistant. I can help with health and nutrition questions, provide recipe suggestions, or assist with meal planning. What can I help you with today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  // Replace the handleSend function with this enhanced version
  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      let response = ""
      const userInput = input.toLowerCase()

      // Check if the query is about recipes
      if (userInput.includes("recipe") || userInput.includes("how to make") || userInput.includes("cook")) {
        if (userInput.includes("diabetic") || userInput.includes("diabetes")) {
          response = `Here's a diabetic-friendly recipe for Ragi Dosa:

**Ingredients:**
- 1 cup ragi (finger millet) flour
- 1/2 cup rice flour
- 1/4 cup urad dal (split black gram)
- 1 tsp fenugreek seeds
- Salt to taste
- Water as needed
- Oil for cooking

**Instructions:**
1. Soak urad dal and fenugreek seeds for 4-5 hours
2. Grind to a smooth paste
3. Mix with ragi flour and rice flour
4. Add water to make a batter of pouring consistency
5. Ferment overnight
6. Cook on a hot griddle with minimal oil

This recipe has a low glycemic index and helps maintain stable blood sugar levels.

Would you like to print this recipe?`
        } else if (userInput.includes("weight loss") || userInput.includes("diet")) {
          response = `Here's a weight-loss friendly recipe for Quinoa Salad:

**Ingredients:**
- 1 cup cooked quinoa
- 1/2 cup cucumber, diced
- 1/2 cup bell peppers, diced
- 1/4 cup onions, finely chopped
- 1/4 cup tomatoes, diced
- 2 tbsp lemon juice
- 1 tbsp olive oil
- Fresh herbs (mint, coriander)
- Salt and pepper to taste

**Instructions:**
1. Cook quinoa as per package instructions and let it cool
2. Mix all the vegetables in a bowl
3. Add cooled quinoa
4. Dress with lemon juice, olive oil, salt, and pepper
5. Garnish with fresh herbs
6. Refrigerate for 30 minutes before serving

This recipe is high in protein and fiber while being low in calories.

Would you like to print this recipe?`
        } else {
          response = `Here's a healthy recipe for Vegetable Khichdi:

**Ingredients:**
- 1/2 cup rice
- 1/4 cup moong dal (yellow lentils)
- 1 cup mixed vegetables (carrots, peas, beans)
- 1 tsp cumin seeds
- 1/2 tsp turmeric powder
- 1 tsp ginger-garlic paste
- 2 green chilies, chopped
- 1 tbsp ghee
- Salt to taste
- 2.5 cups water

**Instructions:**
1. Wash rice and dal together until water runs clear
2. Heat ghee in a pressure cooker, add cumin seeds
3. Add ginger-garlic paste and green chilies
4. Add vegetables and sauté for 2 minutes
5. Add rice, dal, turmeric, and salt
6. Add water and pressure cook for 4 whistles
7. Let pressure release naturally
8. Serve hot with yogurt

This is a balanced one-pot meal rich in protein and fiber.

Would you like to print this recipe?`
        }
      } else if (userInput.includes("meal plan") || userInput.includes("diet plan")) {
        response =
          "I can help you create a personalized meal plan. Please visit our 'Meal Plans' section and click on 'Create My Plan' to get a customized plan based on your health conditions, dietary preferences, and goals."
      } else if (userInput.includes("health") || userInput.includes("nutrition")) {
        response =
          "For personalized health and nutrition advice, I recommend checking your health profile in the dashboard. You can also join our health challenges to stay motivated on your wellness journey."
      } else {
        const responses = [
          "Based on your health profile, I recommend increasing your protein intake to support muscle recovery.",
          "Ayurvedic principles suggest incorporating more warming spices like ginger and turmeric in your diet.",
          "For managing blood sugar, try replacing white rice with brown rice or millets like ragi.",
          "Our nutritionists recommend eating smaller, more frequent meals to maintain energy levels throughout the day.",
          "Have you tried our new diabetic-friendly meal plans? They're specifically designed to help maintain stable blood sugar levels.",
        ]
        response = responses[Math.floor(Math.random() * responses.length)]
      }

      const botMessage = { role: "system", content: response }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Add a print recipe function after the handleKeyDown function
  const printRecipe = (recipeText) => {
    const printWindow = window.open("", "_blank")
    printWindow.document.write(`
      <html>
        <head>
          <title>Aahara Recipe</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #e65100; }
            h2 { color: #f57c00; margin-top: 20px; }
            ul, ol { margin-bottom: 20px; }
            .logo { text-align: center; margin-bottom: 20px; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="logo">
            <h1>Aahara Health</h1>
            <p>Nutrition for Holistic Well-being</p>
          </div>
          <div>
            ${recipeText.replace(/\*\*(.*?)\*\*/g, "<h2>$1</h2>").replace(/\n/g, "<br>")}
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Aahara Health. All rights reserved.</p>
            <p>For more recipes and personalized meal plans, visit www.aahara.com</p>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  // Add a function to render message content with print button
  const renderMessageContent = (content) => {
    if (content.includes("Would you like to print this recipe?")) {
      const recipeText = content.replace("Would you like to print this recipe?", "")
      return (
        <div>
          <div>{recipeText}</div>
          <div className="mt-2">
            <Button size="sm" variant="outline" className="text-xs" onClick={() => printRecipe(recipeText)}>
              Print Recipe
            </Button>
          </div>
        </div>
      )
    }
    return content
  }

  return (
    <>
      {/* Floating button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 rounded-full p-4 shadow-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700",
          isOpen && "hidden",
        )}
        size="icon"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-80 sm:w-96 shadow-xl border-orange-200 overflow-hidden z-50">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-medium flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Nutrition Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Update the message rendering in the return statement to use the new renderMessageContent function */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex items-start gap-2 max-w-[85%]", message.role === "user" ? "ml-auto" : "")}
                >
                  {message.role === "system" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Aahara Assistant" />
                      <AvatarFallback className="bg-orange-100 text-orange-600">AA</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm",
                      message.role === "user"
                        ? "bg-orange-500 text-white rounded-tr-none"
                        : "bg-gray-100 text-gray-800 rounded-tl-none",
                    )}
                  >
                    {message.role === "system" ? renderMessageContent(message.content) : message.content}
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback className="bg-blue-100 text-blue-600">U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <div className="flex w-full items-center gap-2">
              <Input
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-orange-500 hover:bg-orange-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
