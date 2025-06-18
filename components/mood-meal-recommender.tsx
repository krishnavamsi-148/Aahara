"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smile, Frown, Meh, Heart, Clock, Flame, ChevronRight, ThumbsUp } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

// Sample mood-based meal recommendations
const moodMeals = {
  happy: [
    {
      id: 1,
      name: "Colorful Vegetable Pulao",
      description: "A vibrant, aromatic rice dish with seasonal vegetables and spices",
      image:
        "https://t3.ftcdn.net/jpg/13/90/99/82/240_F_1390998299_qhxZYuFz48sJjPbbqIGTml40CI6OE5Sn.jpg?height=150&width=250",
      prepTime: "30 mins",
      calories: 320,
      benefits: ["Boosts serotonin", "Rich in antioxidants", "Provides sustained energy"],
      healthTags: ["Vegetarian", "Gluten-Free", "Balanced"],
    },
    {
      id: 2,
      name: "Fruit and Nut Yogurt Bowl",
      description: "Creamy yogurt topped with fresh fruits, honey, and mixed nuts",
      image:
        "https://t4.ftcdn.net/jpg/10/70/78/25/240_F_1070782510_JsmJHoD9NUKJzw9Igagzjy5eMBTByi2x.jpg?height=150&width=250",
      prepTime: "10 mins",
      calories: 280,
      benefits: ["Probiotics for gut health", "Natural sweetness", "Protein-rich"],
      healthTags: ["Vegetarian", "Probiotic", "High-Protein"],
    },
  ],
  sad: [
    {
      id: 3,
      name: "Warm Turmeric Milk",
      description: "Traditional haldi doodh with turmeric, black pepper, and a touch of honey",
      image:
        "https://t3.ftcdn.net/jpg/11/44/07/66/240_F_1144076600_tveENHWMQ564MnvfIm0XEhYgQ840Zdw7.jpg?height=150&width=250",
      prepTime: "5 mins",
      calories: 120,
      benefits: ["Anti-inflammatory", "Mood-lifting", "Promotes sleep"],
      healthTags: ["Vegetarian", "Ayurvedic", "Comforting"],
    },
    {
      id: 4,
      name: "Khichdi with Ghee",
      description: "Comforting one-pot meal with rice, lentils, and healing spices",
      image:
        "https://t4.ftcdn.net/jpg/11/84/47/41/240_F_1184474184_iNJOW3TDoFxPAH1cFnbiBozVcuLmDknr.jpg?height=150&width=250",
      prepTime: "25 mins",
      calories: 310,
      benefits: ["Easy to digest", "Complete protein", "Grounding effect"],
      healthTags: ["Vegetarian", "Ayurvedic", "Balanced"],
    },
  ],
  stressed: [
    {
      id: 5,
      name: "Chamomile Tea with Honey",
      description: "Soothing herbal tea with a touch of honey and lemon",
      image:
        "https://t4.ftcdn.net/jpg/13/45/97/99/240_F_1345979948_zkpvMGBoXWG1so0ZlzIbXCNWiDHEyWD2.jpg?height=150&width=250",
      prepTime: "5 mins",
      calories: 40,
      benefits: ["Calming effect", "Reduces anxiety", "Aids sleep"],
      healthTags: ["Caffeine-Free", "Herbal", "Calming"],
    },
    {
      id: 6,
      name: "Dark Chocolate Covered Almonds",
      description: "Crunchy almonds coated in antioxidant-rich dark chocolate",
      image:
        "https://t3.ftcdn.net/jpg/12/56/39/74/240_F_1256397400_nsE1xychlm25kptKdMcriHz5D9acNsYI.jpg?height=150&width=250",
      prepTime: "15 mins",
      calories: 180,
      benefits: ["Magnesium-rich", "Mood-boosting", "Satisfying crunch"],
      healthTags: ["Vegetarian", "Antioxidant-Rich", "Mindful Snack"],
    },
  ],
  tired: [
    {
      id: 7,
      name: "Sprouted Moong Salad",
      description: "Protein-packed sprouted mung beans with fresh vegetables and lemon dressing",
      image:
        "https://t3.ftcdn.net/jpg/12/91/61/92/240_F_1291619213_4lVVvyV3H8IDWPu1uy7WfJF9FM69qV90.jpg?height=150&width=250",
      prepTime: "15 mins",
      calories: 220,
      benefits: ["Quick energy", "Easy to digest", "Nutrient-dense"],
      healthTags: ["Vegetarian", "High-Protein", "Raw"],
    },
    {
      id: 8,
      name: "Ragi Malt with Jaggery",
      description: "Traditional energy drink made with finger millet and natural sweetener",
      image:
        "https://t3.ftcdn.net/jpg/06/19/52/84/240_F_619528487_qfbLD5WPmLzVYxVmWL7RF0y5rU5aLjXW.jpg?height=150&width=250",
      prepTime: "10 mins",
      calories: 150,
      benefits: ["Sustained energy", "Rich in calcium", "Blood sugar friendly"],
      healthTags: ["Vegetarian", "Gluten-Free", "Traditional"],
    },
  ],
  energetic: [
    {
      id: 9,
      name: "Coconut Water with Chia Seeds",
      description: "Hydrating coconut water infused with omega-rich chia seeds",
      image:
        "https://t3.ftcdn.net/jpg/12/95/09/88/240_F_1295098805_yYKXsg9IZ9jvxEazxVlzVggIHAzU0qIJ.jpg?height=150&width=250",
      prepTime: "5 mins",
      calories: 90,
      benefits: ["Natural electrolytes", "Hydrating", "Sustained energy"],
      healthTags: ["Vegan", "Raw", "Hydrating"],
    },
    {
      id: 10,
      name: "Vegetable Upma",
      description: "Savory semolina dish with mixed vegetables and curry leaves",
      image:
        "https://t4.ftcdn.net/jpg/04/09/19/03/240_F_409190380_O071bxWxaglng2jnHAKvI5hCEPr8snj7.jpg?height=150&width=250",
      prepTime: "20 mins",
      calories: 260,
      benefits: ["Complex carbs", "Vegetable nutrients", "Balanced meal"],
      healthTags: ["Vegetarian", "Balanced", "Traditional"],
    },
  ],
}

export function MoodMealRecommender() {
  const [currentMood, setCurrentMood] = useState("")
  const [recommendations, setRecommendations] = useState([])
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [healthCondition, setHealthCondition] = useState("none")

  const handleMoodSelection = (mood) => {
    setCurrentMood(mood)
    setRecommendations(moodMeals[mood])
    setShowRecommendations(true)
  }

  const getMoodIcon = (mood, size = 24) => {
    switch (mood) {
      case "happy":
        return <Smile size={size} className="text-yellow-500" />
      case "sad":
        return <Frown size={size} className="text-blue-500" />
      case "stressed":
        return <Meh size={size} className="text-red-500" />
      case "tired":
        return <Meh size={size} className="text-purple-500" />
      case "energetic":
        return <ThumbsUp size={size} className="text-green-500" />
      default:
        return null
    }
  }

  const getMoodTitle = (mood) => {
    switch (mood) {
      case "happy":
        return "Happy & Joyful"
      case "sad":
        return "Low & Down"
      case "stressed":
        return "Stressed & Anxious"
      case "tired":
        return "Tired & Fatigued"
      case "energetic":
        return "Energetic & Active"
      default:
        return ""
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <Heart className="mr-2 h-5 w-5 text-red-500" />
          Mood-Based Meal Recommender
        </CardTitle>
        <CardDescription>Get personalized food suggestions based on how you're feeling today</CardDescription>
      </CardHeader>
      <CardContent>
        {!showRecommendations ? (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">How are you feeling today?</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {["happy", "sad", "stressed", "tired", "energetic"].map((mood) => (
                  <Card
                    key={mood}
                    className={`cursor-pointer hover:border-orange-300 transition-all ${
                      currentMood === mood ? "border-orange-500 bg-orange-50" : ""
                    }`}
                    onClick={() => setCurrentMood(mood)}
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        {getMoodIcon(mood)}
                      </div>
                      <span className="font-medium">{getMoodTitle(mood)}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Any health conditions to consider?</h3>
              <RadioGroup
                defaultValue="none"
                onValueChange={setHealthCondition}
                className="grid grid-cols-1 md:grid-cols-3 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="diabetes" id="diabetes" />
                  <Label htmlFor="diabetes">Diabetes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hypertension" id="hypertension" />
                  <Label htmlFor="hypertension">Hypertension</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weight" id="weight" />
                  <Label htmlFor="weight">Weight Management</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="digestion" id="digestion" />
                  <Label htmlFor="digestion">Digestive Issues</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="heart" id="heart" />
                  <Label htmlFor="heart">Heart Health</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              className="w-full bg-orange-500 hover:bg-orange-600"
              onClick={() => handleMoodSelection(currentMood)}
              disabled={!currentMood}
            >
              Get Recommendations
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  {getMoodIcon(currentMood)}
                </div>
                <div>
                  <h3 className="font-medium">Recommendations for {getMoodTitle(currentMood)}</h3>
                  <p className="text-sm text-muted-foreground">Foods that may help balance your mood</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => setShowRecommendations(false)}>
                Change Mood
              </Button>
            </div>

            <Separator />

            <div className="space-y-4">
              {recommendations.map((meal) => (
                <Card key={meal.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                    <div>
                      <img
                        src={meal.image || "/placeholder.svg"}
                        alt={meal.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{meal.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{meal.description}</p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {meal.healthTags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-green-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {meal.prepTime}
                        </div>
                        <div className="flex items-center">
                          <Flame className="mr-1 h-4 w-4" />
                          {meal.calories} cal
                        </div>
                      </div>

                      <div className="mt-3">
                        <h4 className="text-sm font-medium">Mood Benefits:</h4>
                        <ul className="mt-1 space-y-1">
                          {meal.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm flex items-start">
                              <div className="h-4 w-4 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-[10px]">
                                ✓
                              </div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="mt-3 bg-orange-500 hover:bg-orange-600" size="sm">
                        View Recipe
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
