"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Mic, Send, X, Volume2, Globe, Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Message {
  role: string
  content: string
  image?: string
}

export function AInutritionist() {
  // Initial messages with multilingual support
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        "Hello! I'm your Aahara nutrition assistant. I can help with health and nutrition questions in multiple languages. What can I help you with today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [language, setLanguage] = useState("english")
  const [showImageUpload, setShowImageUpload] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim() && !isRecording) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      let response = ""
      const userInput = input.toLowerCase()

      // Generate response based on language
      if (language === "hindi") {
        response =
          "हिंदी में आपके स्वास्थ्य प्रश्न का उत्तर: आपके आहार में अधिक फाइबर और कम चीनी वाले खाद्य पदार्थ शामिल करें। क्या आप किसी विशेष व्यंजन के बारे में जानना चाहते हैं?"
      } else if (language === "telugu") {
        response =
          "తెలుగులో మీ ఆరోగ్య ప్రశ్నకు సమాధానం: మీ ఆహారంలో ఎక్కువ ఫైబర్ మరియు తక్కువ చక్కెర ఉన్న ఆహారాలను చేర్చండి. మీరు ఏదైనా నిర్దిష్ట వంటకాల గురించి తెలుసుకోవాలనుకుంటున్నారా?"
      } else if (language === "tamil") {
        response =
          "தமிழில் உங்கள் சுகாதார கேள்விக்கான பதில்: உங்கள் உணவில் அதிக நார்ச்சத்து மற்றும் குறைந்த சர்க்கரை உணவுகளை சேர்க்கவும். நீங்கள் ஏதேனும் குறிப்பிட்ட உணவு பற்றி அறிய விரும்புகிறீர்களா?"
      } else {
        // Check if the query is about recipes or health
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

Would you like me to suggest more diabetic-friendly recipes?`
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

Would you like more weight management recipes?`
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

Would you like more healthy Indian recipes?`
          }
        } else if (userInput.includes("blood sugar") || userInput.includes("glucose")) {
          response =
            "Based on your recent blood sugar readings, I recommend including more complex carbohydrates like whole grains, legumes, and vegetables in your diet. Try to limit simple sugars and processed foods. Would you like me to suggest specific meals that can help stabilize your blood sugar levels?"
        } else if (userInput.includes("blood pressure") || userInput.includes("hypertension")) {
          response =
            "For managing blood pressure, focus on reducing sodium intake and increasing potassium-rich foods like bananas, oranges, and leafy greens. The DASH diet (Dietary Approaches to Stop Hypertension) is particularly effective. Would you like me to create a DASH-inspired meal plan for you?"
        } else if (userInput.includes("mood") || userInput.includes("feeling")) {
          response =
            "Your mood can definitely influence your food choices and vice versa. If you're feeling low, foods rich in omega-3 fatty acids and vitamin D can help boost your mood. Would you like me to suggest some mood-enhancing meals based on how you're feeling today?"
        } else if (userInput.includes("festival") || userInput.includes("fasting")) {
          response =
            "I can help you maintain your health goals during festivals or fasting periods. For example, during Navratri, you can opt for nutrient-dense foods like fruits, dairy, and amaranth (rajgira) that are permitted during the fast. Would you like specific festival or fasting meal suggestions?"
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
      }

      const botMessage: Message = { role: "system", content: response }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    // Simulate voice recognition
    if (!isRecording) {
      setTimeout(() => {
        setInput("What are some good breakfast options for diabetics?")
        setIsRecording(false)
      }, 3000)
    } else {
      setInput("")
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Simulate image analysis
      setMessages([
        ...messages,
        {
          role: "user",
          content: "I uploaded an image of my meal for analysis.",
          image: URL.createObjectURL(file),
        },
      ])

      // Simulate AI response
      setTimeout(() => {
        const response = `Based on the image analysis, I can see:

1. **Main dish**: Appears to be a rice-based dish, possibly pulao or biryani
2. **Side items**: Some curry and what looks like yogurt/raita

**Nutritional Analysis:**
- Estimated calories: 450-550 kcal
- Carbohydrates: Moderate to high (rice is the main source)
- Protein: Moderate (depending on meat/vegetable content)
- Fat: Moderate

**Health Recommendations:**
- If you have diabetes, consider reducing the portion size of rice
- The yogurt/raita is a good addition as it helps with digestion
- Consider adding more vegetables for additional fiber
- For better blood sugar control, try switching to brown rice or adding more protein

Would you like me to suggest modifications to make this meal more suitable for your health condition?`

        setMessages((prev) => [...prev, { role: "system", content: response }])
      }, 2000)
    }
    setShowImageUpload(false)
  }

  const speakText = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

      // Set language based on selected language
      if (language === "hindi") {
        utterance.lang = "hi-IN"
      } else if (language === "telugu") {
        utterance.lang = "te-IN"
      } else if (language === "tamil") {
        utterance.lang = "ta-IN"
      } else {
        utterance.lang = "en-US"
      }

      window.speechSynthesis.speak(utterance)
    }
  }

  // Function to render message content with image if present
  const renderMessageContent = (message: Message) => {
    return (
      <div>
        {message.image && (
          <div className="mb-2">
            <img
              src={message.image || "/placeholder.svg"}
              alt="Uploaded food"
              className="rounded-md max-w-full max-h-48 object-cover"
            />
          </div>
        )}
        <div>{message.content}</div>
        {message.role === "system" && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full mt-2 hover:bg-orange-100"
            onClick={() => speakText(message.content)}
          >
            <Volume2 className="h-3 w-3 text-orange-600" />
          </Button>
        )}
      </div>
    )
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
                AI Nutrition Assistant
              </CardTitle>
              <div className="flex items-center gap-2">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[110px] h-8 text-xs bg-white/20 border-0 text-white">
                    <Globe className="h-3 w-3 mr-1" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
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
                    {renderMessageContent(message)}
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback className="bg-blue-100 text-blue-600">U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-2 border-t">
            {showImageUpload ? (
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Upload food image for analysis</span>
                  <Button variant="ghost" size="sm" onClick={() => setShowImageUpload(false)} className="h-6 w-6 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="w-full text-sm"
                />
              </div>
            ) : (
              <div className="flex w-full items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 rounded-full ${isRecording ? "bg-red-100 text-red-600 animate-pulse" : ""}`}
                  onClick={toggleRecording}
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => {
                    setShowImageUpload(true)
                    setTimeout(() => {
                      fileInputRef.current?.click()
                    }, 100)
                  }}
                >
                  <Camera className="h-4 w-4" />
                </Button>
                <Input
                  placeholder={isRecording ? "Listening..." : "Type your question..."}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                  disabled={isRecording}
                />
                <Button onClick={handleSend} size="icon" className="bg-orange-500 hover:bg-orange-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardFooter>
        </Card>
      )}
    </>
  )
}
