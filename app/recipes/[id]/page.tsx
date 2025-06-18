"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Award, Camera, Clock, Flame, Heart, MessageSquare, Share2, Utensils } from "lucide-react"
import { Printer, Download, Share } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample recipe data
const recipe = {
  id: 1,
  name: "Ragi Dosa with Sambar",
  description:
    "A nutritious South Indian breakfast made with finger millet flour, perfect for diabetes management and overall health.",
  image: "/placeholder.svg?height=500&width=1000",
  prepTime: "20 mins",
  cookTime: "15 mins",
  servings: 4,
  calories: 320,
  protein: 12,
  carbs: 48,
  fat: 6,
  fiber: 8,
  tags: ["Diabetes-Friendly", "High-Fiber", "Vegetarian"],
  healthBenefits: [
    {
      title: "Low Glycemic Index",
      description: "Ragi has a low glycemic index of around 55, which helps in maintaining stable blood sugar levels.",
    },
    {
      title: "Rich in Calcium",
      description: "Ragi contains 3-4 times more calcium than other cereals, supporting bone health.",
    },
    {
      title: "High in Dietary Fiber",
      description:
        "The high fiber content aids digestion and promotes a feeling of fullness, helping with weight management.",
    },
  ],
  ingredients: [
    {
      title: "For Ragi Dosa",
      items: [
        "1 cup ragi (finger millet) flour",
        "1/2 cup rice flour",
        "1/4 cup urad dal (split black gram)",
        "1 tsp fenugreek seeds",
        "1 small onion, finely chopped",
        "1 green chili, finely chopped",
        "1/2 inch ginger, grated",
        "A handful of curry leaves, chopped",
        "Salt to taste",
        "Water as needed",
        "Oil for cooking",
      ],
    },
    {
      title: "For Sambar",
      items: [
        "1/2 cup toor dal (split pigeon peas)",
        "1 small onion, chopped",
        "1 tomato, chopped",
        "1 carrot, chopped",
        "10-12 green beans, chopped",
        "1/4 cup pumpkin, chopped",
        "1 tbsp sambar powder",
        "1/2 tsp turmeric powder",
        "1 tsp tamarind paste",
        "Salt to taste",
        "For tempering: mustard seeds, curry leaves, asafoetida, dry red chilies",
      ],
    },
  ],
  instructions: [
    {
      title: "Prepare the Dosa Batter",
      steps: [
        "Wash and soak urad dal and fenugreek seeds for 4-5 hours.",
        "Drain the water and grind to a smooth paste.",
        "Mix ragi flour and rice flour with the urad dal paste.",
        "Add water to make a batter of pouring consistency.",
        "Add salt and let it ferment overnight or for at least 6-8 hours.",
      ],
    },
    {
      title: "Prepare the Sambar",
      steps: [
        "Pressure cook toor dal until soft and mushy.",
        "In a pot, cook all the vegetables with turmeric powder and salt.",
        "Add the cooked dal, sambar powder, and tamarind paste.",
        "Simmer for 10 minutes until the flavors blend.",
        "Prepare the tempering by heating oil and adding mustard seeds, curry leaves, asafoetida, and dry red chilies.",
        "Pour the tempering over the sambar and mix well.",
      ],
    },
    {
      title: "Make the Dosas",
      steps: [
        "Add chopped onions, green chilies, ginger, and curry leaves to the fermented batter.",
        "Heat a non-stick pan or dosa tawa.",
        "Pour a ladleful of batter and spread it in a circular motion.",
        "Drizzle a little oil around the edges.",
        "Cook until the bottom turns golden brown.",
        "Fold and serve hot with sambar.",
      ],
    },
  ],
  nutritionFacts: {
    calories: 320,
    totalFat: 6,
    saturatedFat: 1,
    transFat: 0,
    cholesterol: 0,
    sodium: 320,
    totalCarbs: 48,
    dietaryFiber: 8,
    sugars: 4,
    protein: 12,
    vitaminA: 15,
    vitaminC: 20,
    calcium: 35,
    iron: 25,
  },
  tips: [
    "For a crispier dosa, spread the batter thin.",
    "If you're diabetic, you can reduce the rice flour proportion and increase the ragi flour.",
    "Add finely chopped vegetables like carrots and spinach to increase the nutritional value.",
    "The batter can be stored in the refrigerator for up to 3 days.",
  ],
  variations: [
    {
      name: "Ragi Onion Dosa",
      description: "Add more onions and some cumin seeds for extra flavor.",
    },
    {
      name: "Ragi Vegetable Dosa",
      description: "Add finely chopped vegetables like carrots, bell peppers, and spinach to the batter.",
    },
    {
      name: "Ragi Masala Dosa",
      description: "Stuff with a potato masala filling for a more substantial meal.",
    },
  ],
  category: "breakfast",
  voucherPoints: 50,
}

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const printRecipe = () => {
    window.print()
  }

  const downloadRecipe = () => {
    const recipeText = `
${recipe.name}
${recipe.description}

Preparation Time: ${recipe.prepTime}
Cooking Time: ${recipe.cookTime}
Servings: ${recipe.servings}
Calories: ${recipe.calories}

INGREDIENTS: ${recipe.ingredients
      .map((section) => `\n${section.title}:\n${section.items.map((item) => `- ${item}`).join("\n")}`)
      .join("\n")}

INSTRUCTIONS: ${recipe.instructions
      .map((section) => `\n${section.title}:\n${section.steps.map((step, i) => `${i + 1}. ${step}`).join("\n")}`)
      .join("\n")}

NUTRITION FACTS: 
Calories: ${recipe.nutritionFacts.calories}
Protein: ${recipe.nutritionFacts.protein}g
Carbs: ${recipe.nutritionFacts.totalCarbs}g
Fat: ${recipe.nutritionFacts.totalFat}g
Fiber: ${recipe.nutritionFacts.dietaryFiber}g

HEALTH BENEFITS: ${recipe.healthBenefits.map((benefit) => `- ${benefit.title}: ${benefit.description}`).join("\n")}

Recipe by Aahara Health`

    const element = document.createElement("a")
    const file = new Blob([recipeText], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${recipe.name.replace(/\s+/g, "-").toLowerCase()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const shareRecipe = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: `Check out this healthy ${recipe.name} recipe from Aahara Health!`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Recipe link copied to clipboard!")
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-6">
        <Link href="/recipes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recipes
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden mb-6">
            <img
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.name}
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-md"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-md"
              >
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share recipe</span>
              </Button>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="h-9 rounded-full bg-white/80 hover:bg-white shadow-md"
                onClick={printRecipe}
              >
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-9 rounded-full bg-white/80 hover:bg-white shadow-md"
                onClick={downloadRecipe}
              >
                <Download className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-9 rounded-full bg-white/80 hover:bg-white shadow-md"
                onClick={shareRecipe}
              >
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {recipe.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{recipe.name}</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-emerald-600" />
              <div>
                <div className="text-sm text-muted-foreground">Prep Time</div>
                <div className="font-medium">{recipe.prepTime}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Utensils className="mr-2 h-5 w-5 text-emerald-600" />
              <div>
                <div className="text-sm text-muted-foreground">Cook Time</div>
                <div className="font-medium">{recipe.cookTime}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Flame className="mr-2 h-5 w-5 text-emerald-600" />
              <div>
                <div className="text-sm text-muted-foreground">Calories</div>
                <div className="font-medium">{recipe.calories} kcal</div>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="mr-2 h-5 w-5 text-amber-500" />
              <div>
                <div className="text-sm text-muted-foreground">Voucher Points</div>
                <div className="font-medium text-amber-600">{recipe.voucherPoints} points</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-muted-foreground">{recipe.description}</p>
          </div>

          <Tabs defaultValue="ingredients" className="mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>

            <TabsContent value="ingredients" className="mt-6">
              {recipe.ingredients.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-medium mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-5 w-5 rounded-full border border-emerald-500 flex-shrink-0 mr-3 mt-0.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="instructions" className="mt-6">
              {recipe.instructions.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-medium mb-3">{section.title}</h3>
                  <ol className="space-y-4">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mr-3 font-medium text-sm">
                          {stepIndex + 1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="nutrition" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground">Calories</div>
                    <div className="text-2xl font-bold">{recipe.nutritionFacts.calories}</div>
                    <div className="text-xs text-muted-foreground">kcal</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground">Protein</div>
                    <div className="text-2xl font-bold">{recipe.nutritionFacts.protein}g</div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round(((recipe.nutritionFacts.protein * 4) / recipe.nutritionFacts.calories) * 100)}% of
                      calories
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground">Carbs</div>
                    <div className="text-2xl font-bold">{recipe.nutritionFacts.totalCarbs}g</div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round(((recipe.nutritionFacts.totalCarbs * 4) / recipe.nutritionFacts.calories) * 100)}% of
                      calories
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground">Fat</div>
                    <div className="text-2xl font-bold">{recipe.nutritionFacts.totalFat}g</div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round(((recipe.nutritionFacts.totalFat * 9) / recipe.nutritionFacts.calories) * 100)}% of
                      calories
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Detailed Nutrition Facts</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b">
                    <span>Total Fat</span>
                    <span className="font-medium">{recipe.nutritionFacts.totalFat}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b pl-4">
                    <span>Saturated Fat</span>
                    <span className="font-medium">{recipe.nutritionFacts.saturatedFat}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b pl-4">
                    <span>Trans Fat</span>
                    <span className="font-medium">{recipe.nutritionFacts.transFat}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Cholesterol</span>
                    <span className="font-medium">{recipe.nutritionFacts.cholesterol}mg</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Sodium</span>
                    <span className="font-medium">{recipe.nutritionFacts.sodium}mg</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Total Carbohydrates</span>
                    <span className="font-medium">{recipe.nutritionFacts.totalCarbs}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b pl-4">
                    <span>Dietary Fiber</span>
                    <span className="font-medium">{recipe.nutritionFacts.dietaryFiber}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b pl-4">
                    <span>Sugars</span>
                    <span className="font-medium">{recipe.nutritionFacts.sugars}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Protein</span>
                    <span className="font-medium">{recipe.nutritionFacts.protein}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Vitamin A</span>
                    <span className="font-medium">{recipe.nutritionFacts.vitaminA}%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Vitamin C</span>
                    <span className="font-medium">{recipe.nutritionFacts.vitaminC}%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Calcium</span>
                    <span className="font-medium">{recipe.nutritionFacts.calcium}%</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Iron</span>
                    <span className="font-medium">{recipe.nutritionFacts.iron}%</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Health Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recipe.healthBenefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-emerald-700 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Tips & Variations</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="tips">
                <AccordionTrigger>Cooking Tips</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="variations">
                <AccordionTrigger>Recipe Variations</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {recipe.variations.map((variation, index) => (
                      <div key={index}>
                        <h4 className="font-medium">{variation.name}</h4>
                        <p className="text-sm text-muted-foreground">{variation.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Analyze This Meal</h3>
                  <Camera className="h-5 w-5 text-emerald-600" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload a photo of your prepared dish to get AI feedback on portion size, presentation, and nutritional
                  accuracy.
                </p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Upload Photo</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Ask Nutrition Assistant</h3>
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="rounded-lg bg-muted p-3 mb-4">
                  <p className="text-sm">
                    Have questions about this recipe? Ask our AI nutrition assistant for personalized advice.
                  </p>
                </div>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    className="flex-1 p-2 text-sm border-0 focus:outline-none"
                  />
                  <Button variant="ghost" size="sm" className="h-full rounded-none">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-4">Health Compatibility</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Diabetes-Friendly</span>
                      <span className="font-medium text-emerald-600">Excellent</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Heart Health</span>
                      <span className="font-medium text-emerald-600">Very Good</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Weight Management</span>
                      <span className="font-medium text-emerald-600">Good</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-4">Similar Recipes</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-md overflow-hidden">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Oats Idli"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Oats Idli</h4>
                      <div className="text-xs text-muted-foreground">220 calories</div>
                      <div className="text-xs text-emerald-600">Diabetes-Friendly</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-md overflow-hidden">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Multigrain Uttapam"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Multigrain Uttapam</h4>
                      <div className="text-xs text-muted-foreground">280 calories</div>
                      <div className="text-xs text-emerald-600">High-Fiber</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-md overflow-hidden">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Jowar Dosa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Jowar Dosa</h4>
                      <div className="text-xs text-muted-foreground">240 calories</div>
                      <div className="text-xs text-emerald-600">Gluten-Free</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-6">Traditional Indian Recipes You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=320"
                alt="Sattvic Khichdi"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
              <Badge className="absolute top-2 left-2 bg-emerald-500">Ayurvedic</Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Sattvic Khichdi</CardTitle>
              <CardDescription>
                A balanced one-pot meal that's easy to digest and nourishing for the body and mind.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex justify-between text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>30 mins</span>
                </div>
                <div className="flex items-center">
                  <Flame className="mr-1 h-3 w-3" />
                  <span>280 cal</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-saffron-50">
                  Vegetarian
                </Badge>
                <Badge variant="outline" className="bg-saffron-50">
                  Balanced
                </Badge>
                <Badge variant="outline" className="bg-saffron-50">
                  Traditional
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/recipes/sattvic-khichdi" className="w-full">
                <Button variant="outline" className="w-full border-saffron-200">
                  View Recipe
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=320"
                alt="Ragi Mudde with Soppu Saaru"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
              <Badge className="absolute top-2 left-2 bg-emerald-500">Traditional</Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Ragi Mudde with Soppu Saaru</CardTitle>
              <CardDescription>
                A traditional Karnataka dish made with finger millet and spinach-lentil soup.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex justify-between text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>45 mins</span>
                </div>
                <div className="flex items-center">
                  <Flame className="mr-1 h-3 w-3" />
                  <span>310 cal</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-saffron-50">
                  Vegetarian
                </Badge>
                <Badge variant="outline" className="bg-saffron-50">
                  High-Fiber
                </Badge>
                <Badge variant="outline" className="bg-saffron-50">
                  Calcium-Rich
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/recipes/ragi-mudde" className="w-full">
                <Button variant="outline" className="w-full border-saffron-200">
                  View Recipe
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=320"
                alt="Jowar Roti with Brinjal Curry"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
              <Badge className="absolute top-2 left-2 bg-emerald-500">Diabetic-Friendly</Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Jowar Roti with Brinjal Curry</CardTitle>
              <CardDescription>
                A nutritious North Karnataka staple made with sorghum flour and spiced eggplant.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex justify-between text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>40 mins</span>
                </div>
                <div className="flex items-center">
                  <Flame className="mr-1 h-3 w-3" />
                  <span>290 cal</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-saffron-50">
                  Vegetarian
                </Badge>
                <Badge variant="outline" className="bg-saffron-50">
                  Low-GI
                </Badge>
                <Badge variant="outline" className="bg-saffron-50">
                  Gluten-Free
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/recipes/jowar-roti" className="w-full">
                <Button variant="outline" className="w-full border-saffron-200">
                  View Recipe
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
