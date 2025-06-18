"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Heart, Info, Star, Clock, Utensils } from "lucide-react"
import { motion } from "framer-motion"

export function FestivalSpecificMenus() {
  const [activeTab, setActiveTab] = useState("diwali")

  const festivals = [
    {
      id: "diwali",
      name: "Diwali",
      description: "Festival of Lights",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-amber-500 to-orange-500",
      pattern: "bg-pattern-rangoli",
      foods: [
        {
          name: "Baked Besan Ladoo",
          description: "Traditional besan ladoo made with jaggery instead of sugar and baked instead of fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["40% less sugar", "30% less fat", "Rich in protein"],
          calories: 120,
          prepTime: "30 mins",
          difficulty: "Easy",
          rating: 4.8,
        },
        {
          name: "Ragi Mathri",
          description: "Crispy snack made with finger millet flour instead of refined wheat flour",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High in calcium", "Low glycemic index", "Good for diabetics"],
          calories: 85,
          prepTime: "45 mins",
          difficulty: "Medium",
          rating: 4.5,
        },
        {
          name: "Quinoa Kheer",
          description: "Traditional rice pudding made with protein-rich quinoa and almond milk",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High protein", "Low glycemic index", "Dairy-free option"],
          calories: 180,
          prepTime: "25 mins",
          difficulty: "Easy",
          rating: 4.7,
        },
        {
          name: "Baked Chakli",
          description: "Spiral-shaped savory snack baked instead of deep-fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["60% less oil", "Whole grain option", "High in fiber"],
          calories: 95,
          prepTime: "50 mins",
          difficulty: "Medium",
          rating: 4.6,
        },
        {
          name: "Oats Gujiya",
          description: "Sweet dumplings made with oats and stuffed with a healthier date and nut filling",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Whole grain", "Natural sweetness", "Heart-healthy"],
          calories: 135,
          prepTime: "60 mins",
          difficulty: "Hard",
          rating: 4.9,
        },
        {
          name: "Jowar Namak Pare",
          description: "Crunchy savory snack made with sorghum flour and baked to perfection",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Gluten-free", "High in antioxidants", "Good for digestion"],
          calories: 110,
          prepTime: "40 mins",
          difficulty: "Medium",
          rating: 4.4,
        },
      ],
    },
    {
      id: "navratri",
      name: "Navratri",
      description: "Nine Nights of Worship",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-red-500 to-pink-500",
      pattern: "bg-pattern-kolam",
      foods: [
        {
          name: "Kuttu Ki Poori",
          description: "Buckwheat flour flatbreads that are baked instead of fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Gluten-free", "High in protein", "Rich in minerals"],
          calories: 130,
          prepTime: "25 mins",
          difficulty: "Easy",
          rating: 4.6,
        },
        {
          name: "Sabudana Khichdi with Quinoa",
          description: "Traditional sago pearls dish with added quinoa for protein",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Balanced protein", "Sustained energy", "Good for fasting"],
          calories: 220,
          prepTime: "30 mins",
          difficulty: "Medium",
          rating: 4.7,
        },
        {
          name: "Makhana Kheer",
          description: "Fox nuts pudding made with almond milk and natural sweeteners",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Low calorie", "High in magnesium", "Anti-inflammatory"],
          calories: 160,
          prepTime: "35 mins",
          difficulty: "Easy",
          rating: 4.8,
        },
        {
          name: "Baked Samak Rice Cutlets",
          description: "Barnyard millet patties baked with vegetables and herbs",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High fiber", "Low fat", "Rich in B vitamins"],
          calories: 140,
          prepTime: "45 mins",
          difficulty: "Medium",
          rating: 4.5,
        },
        {
          name: "Singhare Atta Cheela",
          description: "Water chestnut flour pancakes with vegetable stuffing",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Gluten-free", "Low calorie", "Rich in antioxidants"],
          calories: 110,
          prepTime: "20 mins",
          difficulty: "Easy",
          rating: 4.4,
        },
        {
          name: "Steamed Rajgira Paratha",
          description: "Amaranth flour flatbreads steamed instead of fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Complete protein", "High in calcium", "Good for heart health"],
          calories: 125,
          prepTime: "30 mins",
          difficulty: "Medium",
          rating: 4.6,
        },
      ],
    },
    {
      id: "pongal",
      name: "Pongal",
      description: "Harvest Festival",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-green-500 to-emerald-500",
      pattern: "bg-pattern-warli",
      foods: [
        {
          name: "Brown Rice Pongal",
          description: "Traditional pongal made with brown rice instead of white rice",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High in fiber", "Lower glycemic index", "Rich in B vitamins"],
          calories: 220,
          prepTime: "35 mins",
          difficulty: "Easy",
          rating: 4.5,
        },
        {
          name: "Millet Sakkarai Pongal",
          description: "Sweet pongal made with millets and jaggery",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High in minerals", "Slow-releasing energy", "Diabetic-friendly"],
          calories: 190,
          prepTime: "40 mins",
          difficulty: "Medium",
          rating: 4.7,
        },
        {
          name: "Steamed Pongal Vadai",
          description: "Savory lentil cakes steamed instead of fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High protein", "Low fat", "Good source of iron"],
          calories: 110,
          prepTime: "50 mins",
          difficulty: "Medium",
          rating: 4.6,
        },
        {
          name: "Coconut Jaggery Payasam",
          description: "Traditional dessert made with coconut milk and natural sweeteners",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Dairy-free", "Rich in medium-chain fatty acids", "No refined sugar"],
          calories: 165,
          prepTime: "30 mins",
          difficulty: "Easy",
          rating: 4.8,
        },
        {
          name: "Quinoa Ven Pongal",
          description: "Savory pongal made with quinoa and moong dal",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Complete protein", "High in fiber", "Good for digestion"],
          calories: 205,
          prepTime: "35 mins",
          difficulty: "Easy",
          rating: 4.4,
        },
        {
          name: "Ragi Kozhukattai",
          description: "Sweet dumplings made with finger millet flour and coconut filling",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Rich in calcium", "High in iron", "Good for bone health"],
          calories: 145,
          prepTime: "60 mins",
          difficulty: "Hard",
          rating: 4.9,
        },
      ],
    },
    {
      id: "onam",
      name: "Onam",
      description: "Kerala Harvest Festival",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-yellow-500 to-amber-500",
      pattern: "bg-texture-banana-leaf",
      foods: [
        {
          name: "Brown Rice Avial",
          description: "Mixed vegetable curry with brown rice and coconut",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High fiber", "Rich in vegetables", "Good source of vitamins"],
          calories: 180,
          prepTime: "40 mins",
          difficulty: "Medium",
          rating: 4.7,
        },
        {
          name: "Steamed Ela Ada",
          description: "Rice parcels with jaggery and coconut filling, steamed in banana leaves",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Natural sweeteners", "Low fat", "Rich in minerals"],
          calories: 165,
          prepTime: "60 mins",
          difficulty: "Hard",
          rating: 4.9,
        },
        {
          name: "Ragi Payasam",
          description: "Finger millet pudding with jaggery and coconut milk",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High in calcium", "Iron-rich", "Good for bone health"],
          calories: 190,
          prepTime: "35 mins",
          difficulty: "Easy",
          rating: 4.6,
        },
        {
          name: "Baked Banana Chips",
          description: "Thinly sliced plantains baked instead of fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["70% less oil", "Rich in potassium", "Good for heart health"],
          calories: 120,
          prepTime: "30 mins",
          difficulty: "Easy",
          rating: 4.5,
        },
        {
          name: "Quinoa Olan",
          description: "Traditional white gourd curry with quinoa and coconut milk",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High protein", "Low calorie", "Good for digestion"],
          calories: 160,
          prepTime: "35 mins",
          difficulty: "Medium",
          rating: 4.4,
        },
        {
          name: "Millet Sambar",
          description: "Traditional lentil stew with added millets for nutrition",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Protein-rich", "High in fiber", "Good source of iron"],
          calories: 175,
          prepTime: "45 mins",
          difficulty: "Medium",
          rating: 4.8,
        },
      ],
    },
    {
      id: "sankranti",
      name: "Sankranti",
      description: "Harvest Festival",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-orange-500 to-amber-500",
      pattern: "bg-pattern-madhubani",
      foods: [
        {
          name: "Date & Nut Tilgul",
          description: "Sesame and jaggery sweets with dates and nuts",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Rich in calcium", "Good source of iron", "Heart-healthy fats"],
          calories: 130,
          prepTime: "40 mins",
          difficulty: "Medium",
          rating: 4.7,
        },
        {
          name: "Mixed Grain Poli",
          description: "Sweet flatbread made with multiple whole grains",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High in fiber", "Complex carbohydrates", "Sustained energy release"],
          calories: 180,
          prepTime: "60 mins",
          difficulty: "Hard",
          rating: 4.8,
        },
        {
          name: "Baked Puran Poli",
          description: "Traditional sweet flatbread baked instead of pan-fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Lower fat content", "Whole wheat option", "Protein from lentil filling"],
          calories: 210,
          prepTime: "70 mins",
          difficulty: "Hard",
          rating: 4.9,
        },
        {
          name: "Sesame Ladoo with Flaxseed",
          description: "Traditional sesame balls with added flaxseed for omega-3 fatty acids",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Rich in omega-3", "High in calcium", "Good for bone health"],
          calories: 140,
          prepTime: "30 mins",
          difficulty: "Easy",
          rating: 4.6,
        },
        {
          name: "Jowar Chikki",
          description: "Sorghum and jaggery brittle with added nuts and seeds",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Gluten-free", "Rich in antioxidants", "Good source of protein"],
          calories: 155,
          prepTime: "35 mins",
          difficulty: "Medium",
          rating: 4.5,
        },
        {
          name: "Ragi Undhiyu",
          description: "Mixed vegetable curry with finger millet dumplings",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Vegetable-rich", "High in calcium", "Good for digestion"],
          calories: 195,
          prepTime: "75 mins",
          difficulty: "Hard",
          rating: 4.8,
        },
      ],
    },
    {
      id: "lohri",
      name: "Lohri",
      description: "Punjabi Winter Festival",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-red-500 to-orange-500",
      pattern: "bg-pattern-phulkari",
      foods: [
        {
          name: "Baked Whole Grain Gajak",
          description: "Sesame and jaggery brittle made with whole grains",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Rich in calcium", "High in fiber", "Good for bone health"],
          calories: 145,
          prepTime: "35 mins",
          difficulty: "Medium",
          rating: 4.6,
        },
        {
          name: "Millet Khichdi",
          description: "Traditional rice and lentil dish made with millets",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High protein", "Rich in fiber", "Good for digestion"],
          calories: 210,
          prepTime: "30 mins",
          difficulty: "Easy",
          rating: 4.5,
        },
        {
          name: "Baked Makki Di Roti",
          description: "Cornmeal flatbread baked instead of pan-fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Less oil", "High in fiber", "Rich in antioxidants"],
          calories: 130,
          prepTime: "25 mins",
          difficulty: "Easy",
          rating: 4.4,
        },
        {
          name: "Quinoa Sarson Da Saag",
          description: "Traditional mustard greens curry with added quinoa",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Iron-rich", "High protein", "Good for immunity"],
          calories: 175,
          prepTime: "45 mins",
          difficulty: "Medium",
          rating: 4.8,
        },
        {
          name: "Jowar Pinni",
          description: "Sweet flour balls made with sorghum and natural sweeteners",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Gluten-free", "Sustained energy", "Good for winters"],
          calories: 165,
          prepTime: "40 mins",
          difficulty: "Medium",
          rating: 4.7,
        },
        {
          name: "Ragi Til Barfi",
          description: "Sweet sesame squares made with finger millet and jaggery",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Calcium-rich", "Good for bones", "Natural sweetness"],
          calories: 155,
          prepTime: "35 mins",
          difficulty: "Medium",
          rating: 4.6,
        },
      ],
    },
    {
      id: "durga-puja",
      name: "Durga Puja",
      description: "Bengali Festival",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-red-500 to-pink-500",
      pattern: "bg-texture-mud-wall",
      foods: [
        {
          name: "Baked Luchi",
          description: "Traditional Bengali fried bread, baked instead of deep-fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["70% less oil", "Lower calories", "Light on stomach"],
          calories: 120,
          prepTime: "30 mins",
          difficulty: "Medium",
          rating: 4.5,
        },
        {
          name: "Ragi Kosha Mangsho",
          description: "Bengali mutton curry with finger millet flour as thickener",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High in calcium", "Rich in protein", "Good for bone health"],
          calories: 250,
          prepTime: "60 mins",
          difficulty: "Hard",
          rating: 4.9,
        },
        {
          name: "Steamed Bhapa Doi",
          description: "Steamed yogurt dessert with natural sweeteners",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Probiotic-rich", "High in protein", "Good for gut health"],
          calories: 140,
          prepTime: "20 mins + setting time",
          difficulty: "Easy",
          rating: 4.8,
        },
        {
          name: "Quinoa Cholar Dal",
          description: "Bengali chana dal preparation with added quinoa",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Protein-rich", "High in fiber", "Good for digestion"],
          calories: 180,
          prepTime: "35 mins",
          difficulty: "Medium",
          rating: 4.6,
        },
        {
          name: "Baked Macher Paturi",
          description: "Fish marinated in mustard paste and baked in banana leaf",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Rich in omega-3", "High protein", "Good for heart health"],
          calories: 195,
          prepTime: "45 mins",
          difficulty: "Medium",
          rating: 4.7,
        },
        {
          name: "Jowar Payesh",
          description: "Traditional rice pudding made with sorghum instead of rice",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Gluten-free", "Lower glycemic index", "Rich in antioxidants"],
          calories: 170,
          prepTime: "40 mins",
          difficulty: "Medium",
          rating: 4.5,
        },
      ],
    },
    {
      id: "eid",
      name: "Eid",
      description: "Festival of Breaking the Fast",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-blue-500 to-indigo-500",
      pattern: "bg-pattern-kalamkari",
      foods: [
        {
          name: "Baked Whole Wheat Sheer Khurma",
          description: "Traditional vermicelli pudding made with whole wheat and less sugar",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High in fiber", "Lower in sugar", "Rich in nuts and dried fruits"],
          calories: 220,
          prepTime: "35 mins",
          difficulty: "Medium",
          rating: 4.7,
        },
        {
          name: "Quinoa Biryani",
          description: "Traditional biryani made with quinoa instead of rice",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High protein", "Lower carbs", "Rich in minerals"],
          calories: 310,
          prepTime: "60 mins",
          difficulty: "Hard",
          rating: 4.8,
        },
        {
          name: "Baked Samosas",
          description: "Traditional samosas baked instead of deep-fried",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["70% less oil", "Whole wheat crust option", "Vegetable-packed filling"],
          calories: 120,
          prepTime: "45 mins",
          difficulty: "Medium",
          rating: 4.6,
        },
        {
          name: "Date-Sweetened Phirni",
          description: "Rice pudding sweetened with dates instead of sugar",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Natural sweetness", "Rich in fiber", "Contains minerals from dates"],
          calories: 180,
          prepTime: "30 mins + setting time",
          difficulty: "Easy",
          rating: 4.5,
        },
        {
          name: "Millet Haleem",
          description: "Traditional meat and lentil stew made with millets",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["High protein", "Rich in fiber", "Good for sustained energy"],
          calories: 240,
          prepTime: "90 mins",
          difficulty: "Hard",
          rating: 4.9,
        },
        {
          name: "Steamed Malpua",
          description: "Sweet pancakes steamed instead of fried, with reduced sugar",
          image: "/placeholder.svg?height=150&width=150",
          healthBenefits: ["Lower fat", "Less sugar", "Light on stomach"],
          calories: 150,
          prepTime: "30 mins",
          difficulty: "Medium",
          rating: 4.4,
        },
      ],
    },
  ]

  const activeFestival = festivals.find((festival) => festival.id === activeTab) || festivals[0]

  return (
    <Card className="w-full overflow-hidden border-none shadow-lg">
      <div className="bg-gradient-to-r from-saffron-600 to-spice-600 p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern-madhubani"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <Calendar className="mr-2 h-6 w-6" />
            <h2 className="text-2xl font-bold">Festival-Specific Healthy Menus</h2>
          </div>
          <p className="text-white/80 max-w-3xl">
            Experience the joy of Indian festivals with our healthier versions of traditional delicacies. All recipes
            are crafted to maintain authentic flavors while enhancing nutritional value.
          </p>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center text-white font-bold">
                Healthy Sweets
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6 pt-6 overflow-x-auto scrollbar-hide">
            <div className="indian-border relative">
              <TabsList className="grid min-w-max w-full grid-cols-8 mb-6 bg-muted/30">
                {festivals.map((festival) => (
                  <TabsTrigger
                    key={festival.id}
                    value={festival.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-saffron-500 data-[state=active]:to-spice-500 data-[state=active]:text-white py-3"
                  >
                    {festival.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {festivals.map((festival) => (
            <TabsContent key={festival.id} value={festival.id} className="mt-0 outline-none">
              <div className={`relative h-64 overflow-hidden ${festival.pattern}`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${festival.color} opacity-80`}></div>
                <img
                  src={festival.image || "/placeholder.svg"}
                  alt={festival.name}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl font-bold mb-2">{festival.name}</h3>
                    <p className="text-xl opacity-90 mb-4">{festival.description}</p>
                    <p className="text-lg max-w-xl">
                      Enjoy these healthier alternatives to traditional {festival.name} treats without compromising on
                      taste. Our recipes maintain the essence of celebration while supporting your health goals.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <span className="w-1 h-8 bg-gradient-to-b from-saffron-500 to-spice-500 rounded-full mr-3"></span>
                    Healthy {festival.name} Specialties
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Info className="h-4 w-4 mr-1" />
                    <span>All recipes are reviewed by nutritionists and chefs</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {festival.foods.map((food, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-muted bg-card shadow-sm hover:shadow-md transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={food.image || "/placeholder.svg"}
                          alt={food.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex justify-between items-end">
                            <h4 className="font-bold text-lg text-white">{food.name}</h4>
                            <div className="flex items-center bg-black/30 text-white text-sm px-2 py-1 rounded-full">
                              <Heart className="h-3 w-3 text-red-500 mr-1" />
                              <span>{food.calories} cal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                            <span className="text-xs text-muted-foreground">{food.prepTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs ml-1">{food.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{food.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {food.healthBenefits.map((benefit, i) => (
                            <Badge key={i} variant="outline" className="bg-green-50 text-green-700 text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <Utensils className="h-3 w-3 text-muted-foreground mr-1" />
                            <span className="text-xs text-muted-foreground">{food.difficulty}</span>
                          </div>
                          <Button variant="link" className="p-0 h-auto text-saffron-600 text-sm">
                            View Recipe
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-saffron-500 to-spice-500 rounded-lg blur opacity-25"></div>
                    <Button className="relative bg-gradient-to-r from-saffron-500 to-spice-500 hover:from-saffron-600 hover:to-spice-600 text-white px-8 py-6">
                      View All {festival.name} Recipes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
