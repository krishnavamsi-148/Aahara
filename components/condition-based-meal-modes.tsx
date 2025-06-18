"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  ArrowRight,
  Brain,
  Check,
  Droplets,
  Heart,
  Info,
  Play,
  ThumbsDown,
  ThumbsUp,
  Utensils,
} from "lucide-react"

export function ConditionBasedMealModes() {
  const [activeTab, setActiveTab] = useState("diabetes")

  const conditionModes = [
    {
      id: "diabetes",
      name: "Diabetes Mode",
      description: "Meals designed to maintain stable blood sugar levels",
      image: "/placeholder.svg?height=200&width=400",
      color: "from-blue-500 to-cyan-500",
      icon: <Droplets className="h-5 w-5" />,
      keyPrinciples: [
        "Focus on low glycemic index foods",
        "Balanced carbohydrate distribution throughout the day",
        "High fiber content to slow sugar absorption",
        "Adequate protein with each meal",
        "Healthy fats to improve insulin sensitivity",
      ],
      approvedFoods: [
        "Whole grains (brown rice, quinoa, millets)",
        "Leafy greens and non-starchy vegetables",
        "Legumes and pulses",
        "Lean proteins (fish, tofu, chicken)",
        "Nuts and seeds",
        "Low-sugar fruits (berries, apple, pear)",
      ],
      foodsToAvoid: [
        "Refined carbohydrates (white rice, white bread)",
        "Sugary foods and beverages",
        "Processed foods with hidden sugars",
        "High glycemic fruits (watermelon, pineapple)",
        "Fruit juices and sweetened drinks",
      ],
      sampleMeals: [
        {
          name: "Ragi Dosa with Vegetable Stuffing",
          type: "breakfast",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Low glycemic index, high fiber, slow-releasing energy",
        },
        {
          name: "Multigrain Roti with Palak Paneer",
          type: "lunch",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Balanced carbs with protein, nutrient-dense greens",
        },
        {
          name: "Grilled Fish with Quinoa and Vegetables",
          type: "dinner",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Lean protein, complex carbs, omega-3 fatty acids",
        },
      ],
      educationalContent: {
        title: "Understanding Glycemic Index",
        description:
          "The glycemic index (GI) measures how quickly foods raise blood sugar levels. Low GI foods are digested and absorbed more slowly, causing a slower and smaller rise in blood sugar levels.",
        videoUrl: "#",
      },
    },
    {
      id: "hypertension",
      name: "Hypertension Mode",
      description: "Low sodium meals to support healthy blood pressure",
      image: "/placeholder.svg?height=200&width=400",
      color: "from-red-500 to-pink-500",
      icon: <Heart className="h-5 w-5" />,
      keyPrinciples: [
        "Drastically reduced sodium content",
        "Rich in potassium, magnesium, and calcium",
        "Emphasis on DASH diet principles",
        "Increased intake of nitrate-rich foods",
        "Adequate hydration throughout the day",
      ],
      approvedFoods: [
        "Fresh fruits and vegetables",
        "Whole grains (oats, brown rice, millets)",
        "Low-fat dairy products",
        "Legumes and pulses",
        "Nuts and seeds",
        "Herbs and spices for flavoring",
      ],
      foodsToAvoid: [
        "Processed and packaged foods",
        "Pickles and preservatives",
        "Table salt and high-sodium seasonings",
        "Fast food and restaurant meals",
        "Canned soups and vegetables with added salt",
      ],
      sampleMeals: [
        {
          name: "Oats Porridge with Fruits and Nuts",
          type: "breakfast",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Soluble fiber, potassium-rich, no added sodium",
        },
        {
          name: "Vegetable Khichdi with Low-Sodium Spices",
          type: "lunch",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Balanced meal with minimal sodium, rich in potassium",
        },
        {
          name: "Herb-Roasted Vegetables with Grilled Fish",
          type: "dinner",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Flavor from herbs instead of salt, rich in omega-3",
        },
      ],
      educationalContent: {
        title: "The DASH Diet Approach",
        description:
          "The DASH (Dietary Approaches to Stop Hypertension) diet is specifically designed to help lower blood pressure. It emphasizes foods rich in potassium, calcium, and magnesium while limiting sodium intake.",
        videoUrl: "#",
      },
    },
    {
      id: "pcos",
      name: "PCOS/PCOD Mode",
      description: "Meals designed to balance hormones and manage insulin resistance",
      image: "/placeholder.svg?height=200&width=400",
      color: "from-purple-500 to-indigo-500",
      icon: <Activity className="h-5 w-5" />,
      keyPrinciples: [
        "Low glycemic load to manage insulin resistance",
        "Anti-inflammatory foods to reduce inflammation",
        "Balanced macronutrients with focus on protein",
        "Rich in omega-3 fatty acids",
        "Includes specific nutrients for hormone balance",
      ],
      approvedFoods: [
        "Leafy greens and cruciferous vegetables",
        "Berries and low-glycemic fruits",
        "Healthy fats (avocado, olive oil, nuts)",
        "Lean proteins and fatty fish",
        "Whole grains and legumes in moderation",
        "Anti-inflammatory spices (turmeric, cinnamon)",
      ],
      foodsToAvoid: [
        "Refined carbohydrates and sugars",
        "Processed foods with trans fats",
        "Dairy products (for some individuals)",
        "Alcohol and caffeine",
        "High-glycemic fruits and starchy vegetables",
      ],
      sampleMeals: [
        {
          name: "Cinnamon Oatmeal with Chia Seeds and Berries",
          type: "breakfast",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Blood sugar stabilizing, rich in omega-3, high fiber",
        },
        {
          name: "Quinoa Bowl with Roasted Vegetables and Avocado",
          type: "lunch",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Complete protein, healthy fats, anti-inflammatory",
        },
        {
          name: "Turmeric-Spiced Salmon with Leafy Greens",
          type: "dinner",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Omega-3 rich, anti-inflammatory, hormone-balancing",
        },
      ],
      educationalContent: {
        title: "Insulin Resistance and PCOS",
        description:
          "Insulin resistance plays a key role in PCOS. When cells become resistant to insulin, the body produces more insulin to compensate, which can increase androgen production and worsen PCOS symptoms.",
        videoUrl: "#",
      },
    },
    {
      id: "weightloss",
      name: "Weight Loss Mode",
      description: "Calorie-controlled meals with optimal nutrition for healthy weight loss",
      image: "/placeholder.svg?height=200&width=400",
      color: "from-green-500 to-emerald-500",
      icon: <Activity className="h-5 w-5" />,
      keyPrinciples: [
        "Moderate calorie deficit (300-500 calories/day)",
        "High protein content for satiety and muscle preservation",
        "High fiber foods for fullness and digestive health",
        "Balanced macronutrients with focus on nutrient density",
        "Proper meal timing and portion control",
      ],
      approvedFoods: [
        "Lean proteins (chicken, fish, tofu, legumes)",
        "Non-starchy vegetables in abundance",
        "Whole grains in moderation",
        "Low-sugar fruits",
        "Healthy fats in controlled portions",
        "Herbs and spices for flavor without calories",
      ],
      foodsToAvoid: [
        "Processed foods high in added sugars",
        "Refined carbohydrates",
        "Fried and high-fat foods",
        "Sugary beverages and alcohol",
        "Large portions of calorie-dense foods",
      ],
      sampleMeals: [
        {
          name: "Vegetable Omelette with Sprouts",
          type: "breakfast",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "High protein, low carb, nutrient-dense vegetables",
        },
        {
          name: "Lentil Soup with Mixed Greens Salad",
          type: "lunch",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Filling fiber, lean protein, volume from vegetables",
        },
        {
          name: "Grilled Chicken with Roasted Vegetables",
          type: "dinner",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Lean protein, low-calorie vegetables, satisfying meal",
        },
      ],
      educationalContent: {
        title: "Sustainable Weight Loss Principles",
        description:
          "Sustainable weight loss focuses on creating healthy habits rather than drastic restrictions. A moderate calorie deficit combined with nutrient-dense foods and regular physical activity leads to gradual, lasting weight loss.",
        videoUrl: "#",
      },
    },
    {
      id: "cholesterol",
      name: "Cholesterol-Control Mode",
      description: "Heart-healthy meals to improve lipid profile and cardiovascular health",
      image: "/placeholder.svg?height=200&width=400",
      color: "from-red-500 to-orange-500",
      icon: <Heart className="h-5 w-5" />,
      keyPrinciples: [
        "Limited saturated and trans fats",
        "Rich in soluble fiber to bind cholesterol",
        "Includes plant sterols and stanols",
        "Omega-3 fatty acids for heart health",
        "Antioxidant-rich foods to prevent LDL oxidation",
      ],
      approvedFoods: [
        "Oats, barley, and other soluble fiber sources",
        "Fatty fish (salmon, mackerel, sardines)",
        "Nuts and seeds (especially walnuts, flaxseeds)",
        "Legumes and beans",
        "Fruits and vegetables (especially berries, apples)",
        "Olive oil and avocados",
      ],
      foodsToAvoid: [
        "Full-fat dairy products",
        "Red meat and processed meats",
        "Fried foods and fast food",
        "Baked goods with trans fats",
        "Coconut and palm oils",
      ],
      sampleMeals: [
        {
          name: "Oatmeal with Flaxseeds and Berries",
          type: "breakfast",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Soluble fiber binds cholesterol, plant sterols, antioxidants",
        },
        {
          name: "Lentil and Vegetable Soup with Barley",
          type: "lunch",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Plant protein, soluble fiber, low saturated fat",
        },
        {
          name: "Baked Salmon with Steamed Vegetables",
          type: "dinner",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Omega-3 fatty acids, lean protein, antioxidants",
        },
      ],
      educationalContent: {
        title: "Understanding HDL vs. LDL Cholesterol",
        description:
          "Not all cholesterol is harmful. HDL (high-density lipoprotein) helps remove other forms of cholesterol from your bloodstream, while LDL (low-density lipoprotein) can build up in your arteries and increase heart disease risk.",
        videoUrl: "#",
      },
    },
    {
      id: "thyroid",
      name: "Thyroid-Supportive Diet",
      description: "Meals designed to support optimal thyroid function and metabolism",
      image: "/placeholder.svg?height=200&width=400",
      color: "from-teal-500 to-cyan-500",
      icon: <Brain className="h-5 w-5" />,
      keyPrinciples: [
        "Adequate iodine without excess",
        "Selenium-rich foods for T4 to T3 conversion",
        "Limited goitrogenic foods (especially raw)",
        "Anti-inflammatory focus",
        "Balanced macronutrients for metabolic support",
      ],
      approvedFoods: [
        "Seafood and seaweed (iodine sources)",
        "Brazil nuts, eggs, and fish (selenium sources)",
        "Zinc-rich foods (oysters, beef, pumpkin seeds)",
        "Cooked cruciferous vegetables in moderation",
        "Anti-inflammatory herbs and spices",
        "Fermented foods for gut health",
      ],
      foodsToAvoid: [
        "Large amounts of raw cruciferous vegetables",
        "Soy products in excess",
        "Gluten (for those with autoimmune thyroid conditions)",
        "Processed foods with artificial additives",
        "Excessive caffeine and alcohol",
      ],
      sampleMeals: [
        {
          name: "Greek Yogurt with Brazil Nuts and Berries",
          type: "breakfast",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Selenium-rich, protein, probiotics for gut health",
        },
        {
          name: "Seafood Curry with Coconut and Turmeric",
          type: "lunch",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Iodine from seafood, anti-inflammatory spices",
        },
        {
          name: "Zinc-Rich Lamb with Cooked Vegetables",
          type: "dinner",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Zinc for thyroid function, cooked goitrogens are safer",
        },
      ],
      educationalContent: {
        title: "Thyroid Function and Nutrition",
        description:
          "The thyroid gland requires specific nutrients to produce hormones that regulate metabolism. Iodine is essential for thyroid hormone production, while selenium helps convert T4 to the active T3 hormone.",
        videoUrl: "#",
      },
    },
    {
      id: "gut",
      name: "IBS/Gut-Health Mode",
      description: "Gentle, digestive-friendly meals to support gut health and reduce symptoms",
      image: "/placeholder.svg?height=200&width=400",
      color: "from-amber-500 to-yellow-500",
      icon: <Activity className="h-5 w-5" />,
      keyPrinciples: [
        "Low FODMAP approach when needed",
        "Rich in soluble fiber for regularity",
        "Includes fermented foods for probiotics",
        "Anti-inflammatory focus",
        "Elimination of common trigger foods",
      ],
      approvedFoods: [
        "Easily digestible grains (rice, oats)",
        "Low FODMAP vegetables (carrots, cucumber)",
        "Lean proteins (chicken, fish, eggs)",
        "Fermented foods (yogurt, kefir, kimchi)",
        "Cooked fruits and vegetables",
        "Bone broth and healing spices (ginger, turmeric)",
      ],
      foodsToAvoid: [
        "High FODMAP foods (onions, garlic, wheat)",
        "Spicy and very fatty foods",
        "Gas-producing vegetables (raw cruciferous)",
        "Caffeine and alcohol",
        "Processed foods with additives",
      ],
      sampleMeals: [
        {
          name: "Overnight Oats with Ripe Banana",
          type: "breakfast",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Gentle soluble fiber, easy to digest, gut-soothing",
        },
        {
          name: "Kitchari (Rice and Mung Bean Porridge)",
          type: "lunch",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Ayurvedic healing food, easy to digest, anti-inflammatory",
        },
        {
          name: "Baked Fish with Low FODMAP Vegetables",
          type: "dinner",
          image: "/placeholder.svg?height=150&width=150",
          benefits: "Gentle protein, non-triggering vegetables, easy on digestion",
        },
      ],
      educationalContent: {
        title: "The Gut-Brain Connection",
        description:
          "Your gut and brain are connected through the gut-brain axis. This connection explains why digestive issues can affect mood and why stress can trigger gut symptoms. A healthy gut microbiome supports both digestive and mental health.",
        videoUrl: "#",
      },
    },
  ]

  const activeCondition = conditionModes.find((condition) => condition.id === activeTab) || conditionModes[0]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          <Activity className="mr-2 h-5 w-5 text-green-500" />
          Condition-Based Meal Modes
        </CardTitle>
        <CardDescription>Doctor-aligned meal plans tailored to specific health conditions</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="px-6 pt-4 overflow-x-auto">
            <TabsList className="inline-flex min-w-max mb-6">
              {conditionModes.map((condition) => (
                <TabsTrigger key={condition.id} value={condition.id} className="flex items-center">
                  <div className="mr-2">{condition.icon}</div>
                  {condition.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {conditionModes.map((condition) => (
            <TabsContent key={condition.id} value={condition.id} className="mt-0">
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${condition.color} opacity-80`}></div>
                <img
                  src={condition.image || "/placeholder.svg"}
                  alt={condition.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      {condition.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{condition.name}</h3>
                  </div>
                  <p className="text-lg opacity-90 max-w-2xl">{condition.description}</p>
                  <Button className="mt-4 bg-white text-black hover:bg-white/90 w-fit">Activate This Mode</Button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      Key Dietary Principles
                    </h3>
                    <ul className="space-y-2">
                      {condition.keyPrinciples.map((principle, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            ✓
                          </div>
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <ThumbsUp className="mr-2 h-5 w-5 text-green-500" />
                      Approved Foods
                    </h3>
                    <ul className="space-y-2">
                      {condition.approvedFoods.map((food, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            ✓
                          </div>
                          <span>{food}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <ThumbsDown className="mr-2 h-5 w-5 text-red-500" />
                    Foods to Avoid
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {condition.foodsToAvoid.map((food, index) => (
                      <div key={index} className="flex items-center p-2 bg-red-50 rounded-md">
                        <div className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          ✗
                        </div>
                        <span>{food}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Utensils className="mr-2 h-5 w-5 text-blue-500" />
                    Sample Meals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {condition.sampleMeals.map((meal, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="relative h-40">
                          <img
                            src={meal.image || "/placeholder.svg"}
                            alt={meal.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge
                              className={`
                              ${
                                meal.type === "breakfast"
                                  ? "bg-amber-500"
                                  : meal.type === "lunch"
                                    ? "bg-green-500"
                                    : "bg-blue-500"
                              }
                            `}
                            >
                              {meal.type}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">{meal.name}</h4>
                          <p className="text-sm text-muted-foreground">{meal.benefits}</p>
                          <Button variant="link" className="p-0 h-auto text-blue-600 mt-2">
                            View Recipe
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Info className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{condition.educationalContent.title}</h3>
                      <p className="text-muted-foreground mb-4">{condition.educationalContent.description}</p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Educational Video
                      </Button>
                    </div>
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
