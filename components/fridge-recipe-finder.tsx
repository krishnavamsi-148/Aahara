"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Flame, Plus, X, Search, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample ingredient categories
const ingredientCategories = [
  {
    name: "Vegetables",
    items: [
      "Tomato",
      "Onion",
      "Potato",
      "Spinach",
      "Carrot",
      "Bell Pepper",
      "Cauliflower",
      "Broccoli",
      "Cabbage",
      "Eggplant",
      "Okra",
      "Peas",
    ],
  },
  {
    name: "Fruits",
    items: [
      "Apple",
      "Banana",
      "Orange",
      "Mango",
      "Papaya",
      "Pineapple",
      "Watermelon",
      "Grapes",
      "Pomegranate",
      "Guava",
      "Lemon",
    ],
  },
  {
    name: "Grains",
    items: ["Rice", "Wheat Flour", "Oats", "Quinoa", "Barley", "Millet", "Ragi", "Jowar", "Bajra", "Semolina", "Corn"],
  },
  {
    name: "Proteins",
    items: [
      "Chicken",
      "Fish",
      "Eggs",
      "Tofu",
      "Paneer",
      "Chickpeas",
      "Lentils",
      "Kidney Beans",
      "Black Beans",
      "Peanuts",
      "Almonds",
    ],
  },
  {
    name: "Dairy",
    items: ["Milk", "Yogurt", "Cheese", "Butter", "Ghee", "Cream", "Cottage Cheese", "Buttermilk"],
  },
  {
    name: "Spices",
    items: [
      "Turmeric",
      "Cumin",
      "Coriander",
      "Garam Masala",
      "Chili Powder",
      "Black Pepper",
      "Cardamom",
      "Cinnamon",
      "Cloves",
      "Mustard Seeds",
    ],
  },
]

// Sample recipe suggestions based on ingredients
const sampleRecipes = [
  {
    id: 1,
    name: "Mixed Vegetable Curry",
    ingredients: ["Tomato", "Onion", "Potato", "Peas", "Turmeric", "Garam Masala"],
    prepTime: "30 mins",
    calories: 250,
    image:
      "https://t4.ftcdn.net/jpg/08/00/24/15/240_F_800241554_1gUyeWInRym0GhrvM5EnY8T9ZB0himsR.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Low-Fat", "High-Fiber"],
    suitableFor: ["Diabetes", "Heart Health", "Weight Management"],
  },
  {
    id: 2,
    name: "Spinach and Paneer Wrap",
    ingredients: ["Spinach", "Paneer", "Wheat Flour", "Onion", "Cumin", "Yogurt"],
    prepTime: "20 mins",
    calories: 320,
    image:
      "https://t4.ftcdn.net/jpg/10/84/75/61/240_F_1084756139_Ut1NiWaegkSl2cSlVOSF8GJQPSbeTyNR.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "High-Protein", "Iron-Rich"],
    suitableFor: ["Diabetes", "Pregnancy", "Fitness"],
  },
  {
    id: 3,
    name: "Oats and Fruit Porridge",
    ingredients: ["Oats", "Apple", "Banana", "Milk", "Cinnamon", "Almonds"],
    prepTime: "15 mins",
    calories: 280,
    image:
      "https://images.unsplash.com/photo-1489444444961-d0fda97f0986?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T2F0cyUyMGFuZCUyMEZydWl0JTIwUG9ycmlkZ2V8ZW58MHx8MHx8fDA%3D?height=150&width=250",
    healthTags: ["Vegetarian", "High-Fiber", "Heart-Healthy"],
    suitableFor: ["Heart Health", "Weight Management", "Cholesterol Control"],
  },
  {
    id: 4,
    name: "Lentil and Vegetable Soup",
    ingredients: ["Lentils", "Carrot", "Onion", "Tomato", "Cumin", "Black Pepper"],
    prepTime: "40 mins",
    calories: 220,
    image:
      "https://t4.ftcdn.net/jpg/10/97/09/47/240_F_1097094781_qqXcMIImHCCXNUg8EfuBIvY7XQNjGMWb.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "High-Protein", "Low-Fat"],
    suitableFor: ["Diabetes", "Weight Management", "Immunity"],
  },
  {
    id: 5,
    name: "Chickpea Masala (Chole)",
    ingredients: ["Chickpeas", "Onion", "Tomato", "Cumin", "Coriander", "Chili Powder", "Garam Masala"],
    prepTime: "35 mins",
    calories: 300,
    image:
      "https://t4.ftcdn.net/jpg/08/23/66/11/240_F_823661193_bVxbh3ZhYx7kIwmgi1T0xolgIcHipluq.jpg?height=150&width=250",
    healthTags: ["Vegan", "High-Protein", "Fiber-Rich"],
    suitableFor: ["Diabetes", "Heart Health", "Energy Boost"],
  },
  {
    id: 6,
    name: "Vegetable Pulao",
    ingredients: ["Rice", "Carrot", "Peas", "Cauliflower", "Cumin", "Cloves", "Cinnamon"],
    prepTime: "25 mins",
    calories: 320,
    image:
      "https://t4.ftcdn.net/jpg/09/15/25/59/240_F_915255907_SDGRvZGFHtqJcncMdYZFdISlqzSQKnBN.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Gluten-Free", "Balanced"],
    suitableFor: ["Kids", "Lunchboxes", "Mild Diets"],
  },
  {
    id: 7,
    name: "Masoor Dal",
    ingredients: ["Lentils", "Tomato", "Onion", "Turmeric", "Cumin", "Mustard Seeds"],
    prepTime: "30 mins",
    calories: 210,
    image:
      "https://t3.ftcdn.net/jpg/05/35/00/78/240_F_535007886_NISih1ccDEHzsz9Vuy8EsoCNpVEju8UU.jpg?height=150&width=250",
    healthTags: ["Vegan", "High-Protein", "Low-Calorie"],
    suitableFor: ["Weight Loss", "Detox", "Immunity"],
  },
  {
    id: 8,
    name: "Aloo Gobi",
    ingredients: ["Potato", "Cauliflower", "Onion", "Tomato", "Turmeric", "Cumin", "Coriander"],
    prepTime: "25 mins",
    calories: 260,
    image:
      "https://t3.ftcdn.net/jpg/10/09/42/90/240_F_1009429099_hLUT8VBvF20hYxwqQtlGIgge7gWDC2cp.jpg?height=150&width=250",
    healthTags: ["Vegan", "Gluten-Free", "Fiber-Rich"],
    suitableFor: ["Weight Management", "Heart Health", "Everyday Meals"],
  },
  {
    id: 9,
    name: "Palak Tofu",
    ingredients: ["Spinach", "Tofu", "Onion", "Garlic", "Cumin", "Garam Masala"],
    prepTime: "30 mins",
    calories: 280,
    image:
      "https://t3.ftcdn.net/jpg/13/83/60/14/240_F_1383601405_zVQK1aLRGnYu2ua04KMoXOZNkmSzjapo.jpg?height=150&width=250",
    healthTags: ["Vegan", "Iron-Rich", "High-Protein"],
    suitableFor: ["Fitness", "Pregnancy", "Diabetes"],
  },
  {
    id: 10,
    name: "Rajma Chawal",
    ingredients: ["Kidney Beans", "Onion", "Tomato", "Rice", "Cumin", "Coriander"],
    prepTime: "40 mins",
    calories: 350,
    image:
      "https://t4.ftcdn.net/jpg/10/13/43/19/240_F_1013431972_fWPuctwLIIuus7zvNP5LVXa1taJDgp1r.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "High-Protein", "Comfort Food"],
    suitableFor: ["Diabetes", "Heart Health", "Weight Gain"],
  },
  {
    id: 11,
    name: "Baingan Bharta",
    ingredients: ["Eggplant", "Onion", "Tomato", "Cumin", "Garlic", "Green Chili"],
    prepTime: "35 mins",
    calories: 200,
    image:
      "https://t3.ftcdn.net/jpg/13/03/44/06/240_F_1303440691_vYFQJKTIY0dotY1NgjUdL6Kpb4NWxq3v.jpg?height=150&width=250",
    healthTags: ["Vegan", "Fiber-Rich", "Low-Fat"],
    suitableFor: ["Diabetes", "Weight Loss", "Liver Health"],
  },
  {
    id: 12,
    name: "Fish Curry",
    ingredients: ["Fish", "Onion", "Tomato", "Mustard Seeds", "Turmeric", "Curry Leaves"],
    prepTime: "30 mins",
    calories: 320,
    image:
      "https://t3.ftcdn.net/jpg/02/99/16/54/240_F_299165427_ohNPXktPy0CdgTVgw9Jr5HDdChdKLBI0.jpg?height=150&width=250",
    healthTags: ["Non-Vegetarian", "Omega-3 Rich", "Low-Carb"],
    suitableFor: ["Heart Health", "Brain Health", "Low-Carb Diets"],
  },
  {
    id: 13,
    name: "Paneer Butter Masala",
    ingredients: ["Paneer", "Butter", "Tomato", "Cream", "Garam Masala", "Cumin"],
    prepTime: "35 mins",
    calories: 400,
    image:
      "https://t3.ftcdn.net/jpg/06/51/02/14/240_F_651021421_Vgbfh3e4Kz4b81i6BGExguVZQrMjadfR.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Calcium-Rich", "Indulgent"],
    suitableFor: ["Weight Gain", "Kids", "Cheat Meals"],
  },
  {
    id: 14,
    name: "Chicken Tikka Masala",
    ingredients: ["Chicken", "Yogurt", "Tomato", "Cumin", "Chili Powder", "Cream"],
    prepTime: "45 mins",
    calories: 450,
    image:
      "https://t3.ftcdn.net/jpg/02/29/39/34/240_F_229393457_LGaJHVGBn04k84lX5tuJ9bi1FQhffUxq.jpg?height=150&width=250",
    healthTags: ["Non-Vegetarian", "High-Protein"],
    suitableFor: ["Muscle Building", "Fitness", "Dinner"],
  },
  {
    id: 15,
    name: "Kadhi Pakora",
    ingredients: ["Yogurt", "Gram Flour", "Onion", "Turmeric", "Cumin", "Mustard Seeds"],
    prepTime: "40 mins",
    calories: 320,
    image:
      "https://t3.ftcdn.net/jpg/13/70/67/82/240_F_1370678297_LdQZr8cZlUNjEpY4AIKyuhsP2ILcxriw.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Probiotic", "Comfort Food"],
    suitableFor: ["Digestion", "Lunch", "Monsoon"],
  },
  {
    id: 16,
    name: "Vegetable Daliya",
    ingredients: ["Broken Wheat", "Carrot", "Peas", "Tomato", "Cumin", "Onion"],
    prepTime: "25 mins",
    calories: 220,
    image:
      "https://t3.ftcdn.net/jpg/03/62/09/72/240_F_362097247_Cn3jj27JFugAOwYa1pwi1biZ4UC6wnzy.jpg?height=150&width=250",
    healthTags: ["Vegan", "High-Fiber", "Low-Calorie"],
    suitableFor: ["Weight Loss", "Diabetes", "Digestion"],
  },
  {
    id: 17,
    name: "Idli with Sambar",
    ingredients: ["Rice", "Lentils", "Mustard Seeds", "Carrot", "Onion", "Tamarind"],
    prepTime: "45 mins",
    calories: 290,
    image:
      "https://t4.ftcdn.net/jpg/04/95/58/09/240_F_495580942_c2nOO7qVOOOaiOSo4toGwDSiYkQ7tgeb.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Fermented", "Low-Fat"],
    suitableFor: ["Breakfast", "Kids", "South Indian Diet"],
  },
  {
    id: 18,
    name: "Methi Thepla",
    ingredients: ["Wheat Flour", "Fenugreek Leaves", "Cumin", "Yogurt", "Turmeric"],
    prepTime: "30 mins",
    calories: 270,
    image:
      "https://t3.ftcdn.net/jpg/08/33/36/32/240_F_833363254_qG6I58PU2E98UnOujA4EY1cQmclzihw5.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Iron-Rich", "Digestive"],
    suitableFor: ["Travel Food", "Breakfast", "Kids"],
  },
  {
    id: 19,
    name: "Vegetable Upma",
    ingredients: ["Semolina", "Carrot", "Onion", "Green Chili", "Mustard Seeds"],
    prepTime: "20 mins",
    calories: 240,
    image:
      "https://t4.ftcdn.net/jpg/04/09/19/03/240_F_409190380_O071bxWxaglng2jnHAKvI5hCEPr8snj7.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Low-Calorie", "High-Fiber"],
    suitableFor: ["Breakfast", "Weight Loss", "Light Meals"],
  },
  {
    id: 20,
    name: "Stuffed Paratha (Aloo)",
    ingredients: ["Wheat Flour", "Potato", "Cumin", "Green Chili", "Butter"],
    prepTime: "30 mins",
    calories: 360,
    image:
      "https://t3.ftcdn.net/jpg/09/45/46/72/240_F_945467264_13rCx2nGR9wb9wrVt2g2FEFB4tE4b8sW.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Comfort Food", "High-Energy"],
    suitableFor: ["Breakfast", "Kids", "Weight Gain"],
  },
  {
    id: 21,
    name: "Tamarind Rice (Puliyodarai)",
    ingredients: ["Rice", "Tamarind", "Mustard Seeds", "Curry Leaves", "Peanuts"],
    prepTime: "25 mins",
    calories: 300,
    image:
      "https://images.pexels.com/photos/4595316/pexels-photo-4595316.jpeg?auto=compress&cs=tinysrgb&w=600?height=150&width=250",
    healthTags: ["Vegan", "Spicy", "Balanced"],
    suitableFor: ["Lunch", "Travel", "Festivals"],
  },
  {
    id: 22,
    name: "Coconut Chutney",
    ingredients: ["Coconut", "Green Chili", "Curry Leaves", "Mustard Seeds", "Yogurt"],
    prepTime: "10 mins",
    calories: 180,
    image:
      "https://t4.ftcdn.net/jpg/04/97/06/35/240_F_497063537_dzkxyb9ZBPhqj5DUGtOv7sQLI7XhX3SD.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Healthy Fats", "Side Dish"],
    suitableFor: ["Breakfast", "South Indian", "Dosa"],
  },
  {
    id: 23,
    name: "Moong Dal Chilla",
    ingredients: ["Mungbean", "Onion", "Cumin", "Green Chili", "Coriander"],
    prepTime: "25 mins",
    calories: 230,
    image:
      "https://t3.ftcdn.net/jpg/10/56/76/26/240_F_1056762636_271qTqHXOveWA0xuNIz2YhRCfpOMrCyE.jpg?height=150&width=250",
    healthTags: ["Vegan", "High-Protein", "Low-Fat"],
    suitableFor: ["Breakfast", "Weight Loss", "Diabetes"],
  },
  {
    id: 24,
    name: "Tandoori Chicken",
    ingredients: ["Chicken", "Yogurt", "Chili Powder", "Cumin", "Lemon"],
    prepTime: "50 mins",
    calories: 410,
    image:
      "https://t3.ftcdn.net/jpg/09/12/19/26/240_F_912192621_V04idAMffmzJJ3kyPzKIhNHvExq1g7WU.jpg?height=150&width=250",
    healthTags: ["Non-Vegetarian", "High-Protein", "Grilled"],
    suitableFor: ["Fitness", "Dinner", "Muscle Building"],
  },
  {
    id: 25,
    name: "Khichdi",
    ingredients: ["Rice", "Lentils", "Turmeric", "Cumin", "Ghee"],
    prepTime: "30 mins",
    calories: 270,
    image:
      "https://t4.ftcdn.net/jpg/07/09/58/01/240_F_709580120_nId0bWqboLhWMgC3fHMs6BYHy5u3Zbl8.jpg?height=150&width=250",
    healthTags: ["Vegetarian", "Comfort Food", "Low-Spice"],
    suitableFor: ["Sick Days", "Kids", "Elderly"],
  },
]

export function FridgeRecipeFinder() {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [recipes, setRecipes] = useState([])
  const [activeTab, setActiveTab] = useState("select")
  const [healthCondition, setHealthCondition] = useState("all")

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient))
  }

  const findRecipes = () => {
    // In a real app, this would call an API with the selected ingredients
    // For now, we'll filter the sample recipes based on matching ingredients
    if (selectedIngredients.length === 0) {
      setRecipes([])
      return
    }

    const filteredRecipes = sampleRecipes.filter((recipe) => {
      // Check if recipe contains at least 2 of the selected ingredients
      const matchingIngredients = recipe.ingredients.filter((ingredient) => selectedIngredients.includes(ingredient))
      return matchingIngredients.length >= 3
    })

    // Further filter by health condition if selected
    const healthFiltered =
      healthCondition === "all"
        ? filteredRecipes
        : filteredRecipes.filter((recipe) =>
            recipe.suitableFor.some((condition) => condition.toLowerCase().includes(healthCondition.toLowerCase())),
          )

    setRecipes(healthFiltered)
    setActiveTab("recipes")
  }

  const filteredIngredients = (category) => {
    return category.items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <Search className="mr-2 h-5 w-5 text-orange-500" />
          What's in My Fridge?
        </CardTitle>
        <CardDescription>Select ingredients you have and get personalized healthy recipe suggestions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="select">Select Ingredients</TabsTrigger>
            <TabsTrigger value="recipes" disabled={recipes.length === 0}>
              Recipe Suggestions ({recipes.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="select" className="space-y-4">
            <div className="flex flex-wrap gap-2 min-h-[60px] p-3 bg-gray-50 rounded-md">
              {selectedIngredients.length === 0 ? (
                <p className="text-sm text-muted-foreground">Select ingredients below or search for them</p>
              ) : (
                selectedIngredients.map((ingredient) => (
                  <Badge key={ingredient} className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-3 py-1">
                    {ingredient}
                    <button
                      className="ml-1 text-orange-800 hover:text-orange-900"
                      onClick={() => removeIngredient(ingredient)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))
              )}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={findRecipes}
                className="bg-orange-500 hover:bg-orange-600"
                disabled={selectedIngredients.length === 0}
              >
                Find Recipes
              </Button>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "all" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("all")}
                >
                  All Recipes
                </Badge>
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "diabetes" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("diabetes")}
                >
                  Diabetes-Friendly
                </Badge>
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "heart" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("heart")}
                >
                  Heart-Healthy
                </Badge>
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "weight" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("weight")}
                >
                  Weight Management
                </Badge>
              </div>

              {ingredientCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="font-medium mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {filteredIngredients(category).map((ingredient) => (
                      <Badge
                        key={ingredient}
                        variant="outline"
                        className={`cursor-pointer ${
                          selectedIngredients.includes(ingredient) ? "bg-orange-100 text-orange-800" : ""
                        }`}
                        onClick={() =>
                          selectedIngredients.includes(ingredient)
                            ? removeIngredient(ingredient)
                            : addIngredient(ingredient)
                        }
                      >
                        {ingredient}
                        {!selectedIngredients.includes(ingredient) && <Plus className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recipes">
            {recipes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No recipes found with your ingredients.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Try selecting different ingredients or fewer health restrictions.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recipes.map((recipe) => (
                  <Card key={recipe.id} className="overflow-hidden">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                      <div>
                        <img
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{recipe.name}</h3>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {recipe.healthTags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-green-50">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {recipe.prepTime}
                          </div>
                          <div className="flex items-center">
                            <Flame className="mr-1 h-4 w-4" />
                            {recipe.calories} cal
                          </div>
                        </div>

                        <Separator className="my-3" />

                        <div>
                          <h4 className="font-medium text-sm">Ingredients:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {recipe.ingredients.map((ingredient) => (
                              <Badge
                                key={ingredient}
                                className={
                                  selectedIngredients.includes(ingredient)
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-gray-100"
                                }
                              >
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3">
                          <h4 className="font-medium text-sm">Good for:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {recipe.suitableFor.map((condition) => (
                              <Badge key={condition} variant="outline" className="bg-blue-50 text-blue-700">
                                {condition}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="mt-3 bg-orange-500 hover:bg-orange-600" size="sm">
                          View Full Recipe
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
