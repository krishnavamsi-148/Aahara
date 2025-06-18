import Link from "next/link"
import Image from "next/image"
import { Search, Filter, ArrowRight, Tag, Clock, Bookmark, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function RecipesPage() {
  // This would typically come from an API or database
  const recipes = [
    {
      id: 1,
      title: "Masala Dosa with Sambar",
      description:
        "A South Indian breakfast favorite with fermented rice and lentil crepe served with spiced lentil soup.",
      image: "/placeholder.svg?height=300&width=400",
      category: "South Indian",
      region: "Karnataka",
      type: "Breakfast",
      prepTime: "30 mins",
      cookTime: "15 mins",
      calories: 350,
      protein: 12,
      carbs: 45,
      fat: 8,
      fiber: 6,
      tags: ["Breakfast", "Vegetarian", "Gluten-Free"],
      healthConditions: ["Diabetes-Friendly", "Heart-Healthy"],
      difficulty: "Medium",
      servings: 2,
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      title: "Palak Paneer",
      description: "Cottage cheese cubes in a creamy spinach gravy, rich in iron and protein.",
      image: "/placeholder.svg?height=300&width=400",
      category: "North Indian",
      region: "Punjab",
      type: "Main Course",
      prepTime: "20 mins",
      cookTime: "25 mins",
      calories: 320,
      protein: 18,
      carbs: 12,
      fat: 22,
      fiber: 5,
      tags: ["Dinner", "Vegetarian", "High-Protein"],
      healthConditions: ["PCOS-Friendly", "High-Protein"],
      difficulty: "Easy",
      servings: 4,
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 3,
      title: "Ragi Mudde with Soppu Saaru",
      description: "Finger millet balls served with lentil and greens soup, a Karnataka specialty.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Karnataka",
      region: "Karnataka",
      type: "Lunch",
      prepTime: "15 mins",
      cookTime: "30 mins",
      calories: 280,
      protein: 10,
      carbs: 48,
      fat: 4,
      fiber: 12,
      tags: ["Lunch", "Vegetarian", "High-Fiber"],
      healthConditions: ["Diabetes-Friendly", "Weight-Management"],
      difficulty: "Medium",
      servings: 2,
      rating: 4.6,
      reviews: 76,
    },
    {
      id: 4,
      title: "Diabetic-Friendly Methi Thepla",
      description: "Whole wheat flatbreads with fenugreek leaves, perfect for managing blood sugar.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Gujarati",
      region: "Gujarat",
      type: "Breakfast",
      prepTime: "25 mins",
      cookTime: "20 mins",
      calories: 220,
      protein: 8,
      carbs: 30,
      fat: 7,
      fiber: 8,
      tags: ["Breakfast", "Diabetic-Friendly", "Vegetarian"],
      healthConditions: ["Diabetes-Friendly", "Thyroid-Friendly"],
      difficulty: "Easy",
      servings: 4,
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 5,
      title: "Heart-Healthy Oats Idli",
      description: "Steamed savory cakes made with oats and fermented lentils, low in sodium and fat.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Fusion",
      region: "South Indian Fusion",
      type: "Breakfast",
      prepTime: "30 mins (plus fermentation)",
      cookTime: "15 mins",
      calories: 180,
      protein: 9,
      carbs: 28,
      fat: 3,
      fiber: 7,
      tags: ["Breakfast", "Heart-Healthy", "Vegetarian"],
      healthConditions: ["Heart-Healthy", "Weight-Management"],
      difficulty: "Medium",
      servings: 4,
      rating: 4.4,
      reviews: 52,
    },
    {
      id: 6,
      title: "Protein-Rich Moong Dal Chilla",
      description: "Savory pancakes made from split yellow mung beans, packed with protein.",
      image: "/placeholder.svg?height=300&width=400",
      category: "North Indian",
      region: "Rajasthan",
      type: "Breakfast",
      prepTime: "15 mins",
      cookTime: "15 mins",
      calories: 210,
      protein: 14,
      carbs: 25,
      fat: 6,
      fiber: 5,
      tags: ["Breakfast", "High-Protein", "Vegetarian"],
      healthConditions: ["PCOS-Friendly", "Thyroid-Friendly"],
      difficulty: "Easy",
      servings: 2,
      rating: 4.6,
      reviews: 87,
    },
    {
      id: 7,
      title: "Bengali Cholar Dal",
      description: "A traditional Bengali dish made with split chickpeas, coconut, and aromatic spices.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Bengali",
      region: "West Bengal",
      type: "Main Course",
      prepTime: "20 mins",
      cookTime: "30 mins",
      calories: 250,
      protein: 12,
      carbs: 35,
      fat: 8,
      fiber: 9,
      tags: ["Lunch", "Vegetarian", "Festival"],
      healthConditions: ["Heart-Healthy", "Diabetes-Friendly"],
      difficulty: "Medium",
      servings: 4,
      rating: 4.7,
      reviews: 92,
    },
    {
      id: 8,
      title: "Maharashtrian Puran Poli",
      description: "Sweet flatbread stuffed with a mixture of jaggery and chana dal, a festive delicacy.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Maharashtrian",
      region: "Maharashtra",
      type: "Dessert",
      prepTime: "40 mins",
      cookTime: "20 mins",
      calories: 320,
      protein: 7,
      carbs: 58,
      fat: 9,
      fiber: 4,
      tags: ["Dessert", "Vegetarian", "Festival"],
      healthConditions: ["Occasional Treat"],
      difficulty: "Hard",
      servings: 6,
      rating: 4.9,
      reviews: 108,
    },
  ]

  const regions = [
    "All Regions",
    "South Indian",
    "North Indian",
    "Gujarati",
    "Bengali",
    "Maharashtrian",
    "Punjabi",
    "Rajasthani",
    "Kerala",
    "Karnataka",
    "Andhra",
    "Tamil Nadu",
    "Fusion",
  ]

  const types = [
    "All Types",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Dessert",
    "Main Course",
    "Side Dish",
    "Festival",
    "Fasting",
    "Beverage",
  ]

  const healthConditions = [
    "All Health Conditions",
    "Diabetes-Friendly",
    "Heart-Healthy",
    "Weight-Management",
    "PCOS-Friendly",
    "Thyroid-Friendly",
    "High-Protein",
    "Low-Carb",
    "High-Fiber",
    "Low-Sodium",
    "Gluten-Free",
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover 200+ Healthy Indian Recipes</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our collection of nutritionally balanced traditional and modern Indian recipes tailored to your health
          goals and cultural preferences.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Input
            type="search"
            placeholder="Search recipes by name, ingredient, or health condition..."
            className="pl-10 pr-4 py-3 rounded-lg border-gray-300 focus:ring-saffron-500 focus:border-saffron-500"
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="flex justify-center mb-6 border-b border-gray-200 overflow-x-auto pb-px">
          <TabsTrigger value="all" className="px-4 py-2">
            All Recipes
          </TabsTrigger>
          <TabsTrigger value="popular" className="px-4 py-2">
            Popular
          </TabsTrigger>
          <TabsTrigger value="recent" className="px-4 py-2">
            Recently Added
          </TabsTrigger>
          <TabsTrigger value="seasonal" className="px-4 py-2">
            Seasonal
          </TabsTrigger>
          <TabsTrigger value="festival" className="px-4 py-2">
            Festival
          </TabsTrigger>
          <TabsTrigger value="ayurvedic" className="px-4 py-2">
            Ayurvedic
          </TabsTrigger>
        </TabsList>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-1/4 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-saffron-500" />
                    Filters
                  </h3>
                  <Button variant="ghost" size="sm" className="text-sm text-saffron-600">
                    Reset
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Region</h4>
                  <Select defaultValue="All Regions">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Type</h4>
                  <Select defaultValue="All Types">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {types.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Health Condition</h4>
                  <Select defaultValue="All Health Conditions">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select health condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {healthConditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="dietary">
                    <AccordionTrigger className="text-sm font-medium">Dietary Preferences</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="vegetarian" />
                          <Label htmlFor="vegetarian">Vegetarian</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="vegan" />
                          <Label htmlFor="vegan">Vegan</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="gluten-free" />
                          <Label htmlFor="gluten-free">Gluten Free</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dairy-free" />
                          <Label htmlFor="dairy-free">Dairy Free</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="difficulty">
                    <AccordionTrigger className="text-sm font-medium">Difficulty Level</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="easy" />
                          <Label htmlFor="easy">Easy</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="medium" />
                          <Label htmlFor="medium">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hard" />
                          <Label htmlFor="hard">Hard</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time">
                    <AccordionTrigger className="text-sm font-medium">Cooking Time</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="under15" />
                          <Label htmlFor="under15">Under 15 minutes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="under30" />
                          <Label htmlFor="under30">Under 30 minutes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="under60" />
                          <Label htmlFor="under60">Under 60 minutes</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nutrition">
                    <AccordionTrigger className="text-sm font-medium">Nutritional Focus</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="high-protein" />
                          <Label htmlFor="high-protein">High Protein</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="low-carb" />
                          <Label htmlFor="low-carb">Low Carb</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="high-fiber" />
                          <Label htmlFor="high-fiber">High Fiber</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="low-fat" />
                          <Label htmlFor="low-fat">Low Fat</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button className="w-full bg-saffron-500 hover:bg-saffron-600">Apply Filters</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h3 className="font-semibold text-lg">Popular Collections</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link
                  href="/recipes/collection/breakfast"
                  className="block text-saffron-600 hover:text-saffron-700 py-1"
                >
                  Quick Breakfast Ideas
                </Link>
                <Link
                  href="/recipes/collection/diabetic"
                  className="block text-saffron-600 hover:text-saffron-700 py-1"
                >
                  Diabetic-Friendly Meals
                </Link>
                <Link
                  href="/recipes/collection/festival"
                  className="block text-saffron-600 hover:text-saffron-700 py-1"
                >
                  Healthy Festival Sweets
                </Link>
                <Link
                  href="/recipes/collection/weight-loss"
                  className="block text-saffron-600 hover:text-saffron-700 py-1"
                >
                  Weight Loss Recipes
                </Link>
                <Link href="/recipes/collection/protein" className="block text-saffron-600 hover:text-saffron-700 py-1">
                  High Protein Vegetarian
                </Link>
                <Link
                  href="/recipes/collection/all"
                  className="block text-saffron-600 hover:text-saffron-700 py-1 font-medium"
                >
                  View All Collections <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Recipe Grid */}
          <div className="md:w-3/4">
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                  <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="group">
                    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-saffron-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {recipe.region}
                        </div>
                        <div className="absolute bottom-2 left-2 flex space-x-1">
                          {recipe.healthConditions.slice(0, 2).map((condition) => (
                            <Badge key={condition} className="bg-green-100 text-green-800 border-green-200">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardContent className="flex-grow p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-saffron-600 transition-colors line-clamp-2">
                            {recipe.title}
                          </h3>
                          <div className="flex items-center bg-amber-50 px-2 py-1 rounded text-amber-700">
                            <span className="text-sm font-medium">{recipe.rating}</span>
                            <span className="text-xs ml-1">({recipe.reviews})</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {recipe.tags.map((tag) => (
                            <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{recipe.prepTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            <span>{recipe.difficulty}</span>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <h4 className="text-xs font-medium text-gray-700 mb-2">Nutritional Information</h4>
                          <div className="grid grid-cols-4 gap-1 text-xs">
                            <div className="text-center">
                              <span className="block font-semibold text-saffron-600">{recipe.calories}</span>
                              <span className="text-gray-500">Cal</span>
                            </div>
                            <div className="text-center">
                              <span className="block font-semibold text-saffron-600">{recipe.protein}g</span>
                              <span className="text-gray-500">Protein</span>
                            </div>
                            <div className="text-center">
                              <span className="block font-semibold text-saffron-600">{recipe.carbs}g</span>
                              <span className="text-gray-500">Carbs</span>
                            </div>
                            <div className="text-center">
                              <span className="block font-semibold text-saffron-600">{recipe.fat}g</span>
                              <span className="text-gray-500">Fat</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0 pb-4 px-4">
                        <div className="w-full flex justify-between items-center">
                          <div className="text-saffron-600 text-sm font-medium flex items-center">
                            View Recipe
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <Bookmark className="h-4 w-4 text-gray-500" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <Share2 className="h-4 w-4 text-gray-500" />
                            </Button>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-500">Popular recipes content will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="recent" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-500">Recently added recipes content will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="seasonal" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-500">Seasonal recipes content will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="festival" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-500">Festival recipes content will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="ayurvedic" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-500">Ayurvedic recipes content will appear here.</p>
              </div>
            </TabsContent>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mr-2">
                Previous
              </Button>
              <Button variant="outline" className="mx-1 bg-saffron-50">
                1
              </Button>
              <Button variant="outline" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="ml-2">
                Next
              </Button>
            </div>
          </div>
        </div>
      </Tabs>
    </main>
  )
}
