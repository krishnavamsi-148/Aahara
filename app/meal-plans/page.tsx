"use client"

import { useState } from "react"
import { ArrowRight, Check, Filter, Leaf, Heart, ShoppingCart, Star, Clock, ChevronDown, Flame } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample meal plan data
const mealPlans = [
  {
    id: 1,
    name: "Diabetes-Friendly Plan",
    description: "Low glycemic index meals designed to maintain stable blood sugar levels",
    price: 1499,
    tags: ["Low GI", "Balanced", "Portion-controlled"],
    rating: 4.8,
    reviews: 124,
    image:
      "https://media.istockphoto.com/id/1207571831/photo/young-diabetic-woman-having-breakfast-at-home.jpg?s=612x612&w=0&k=20&c=IkFpRQBdtWm6_Tq0aemzYZ2A3ywW1dNBGZ1CzpB_qig=?height=300&width=500",
    category: "diabetes",
    popular: true,
    features: [
      "Personalized meal plans based on your blood sugar levels",
      "Low glycemic index ingredients",
      "Balanced macronutrients",
      "Portion-controlled meals",
      "Weekly nutritionist consultation",
    ],
    sampleMeals: [
      {
        name: "Multigrain Roti with Paneer Bhurji",
        time: "Breakfast",
        calories: 320,
        image:
          "https://media.istockphoto.com/id/2065553568/photo/anda-masala-bhurji-or-spicy-indian-scrambled-eggs-with-bread-or-bun-pav-a-popular-street-food.jpg?s=612x612&w=0&k=20&c=LUiMOfdCvhG2KOV4r7G_8c6N2yKcJMJ6dWFHquQWHl0=?height=100&width=100",
      },
      {
        name: "Moong Dal Khichdi with Raita",
        time: "Lunch",
        calories: 380,
        image:
          "https://media.istockphoto.com/id/1421271023/photo/dal-khichadi-or-masala-khichdi-is-a-tasty-indian-recipe-made-of-mixed-lentils-rice-combined.jpg?s=612x612&w=0&k=20&c=S6n1eCR8v7k1ovYf-8WS2bqgSvPMyyu9GU-hcbuQIQ0=?height=100&width=100",
      },
      {
        name: "Grilled Fish with Vegetable Stir-Fry",
        time: "Dinner",
        calories: 340,
        image:
          "https://media.istockphoto.com/id/2024931388/photo/teriyaki-salmon-with-stir-fried-vegetables.jpg?s=612x612&w=0&k=20&c=I8ZZJ0OViq6JuzV5iB-yb_UaxQymbIMEKvKt0TkK_To=?height=100&width=100",
      },
    ],
  },
  {
    id: 2,
    name: "Weight Management Plan",
    description: "Calorie-optimized meals to help you achieve your weight goals",
    price: 1299,
    tags: ["Protein-rich", "Fiber-focused", "Calorie-controlled"],
    rating: 4.7,
    reviews: 98,
    image:
      "https://media.istockphoto.com/id/1356897626/photo/male-on-the-weight-scale-for-check-weight-diet-and-weight-loss-concept.jpg?s=612x612&w=0&k=20&c=mejKOQgDnCwaeVYpjaG1oJMgvQBqBsyqoVLf5aLGhBY=?height=300&width=500",
    category: "weight",
    popular: true,
    features: [
      "Personalized calorie targets based on your BMI",
      "Protein-rich options",
      "Fiber-focused ingredients",
      "Calorie-controlled portions",
      "Weekly progress tracking",
    ],
    sampleMeals: [
      {
        name: "Oats Idli with Sambar",
        time: "Breakfast",
        calories: 280,
        image:
          "https://t4.ftcdn.net/jpg/02/02/01/83/240_F_202018324_VToFG6as09SaiIQF2pWxCmcuWEQfkgC5.jpg?height=100&width=100",
      },
      {
        name: "Quinoa Bowl with Roasted Vegetables",
        time: "Lunch",
        calories: 320,
        image:
          "https://media.istockphoto.com/id/530184316/photo/homemade-southwestern-mexican-quinoa-salad.jpg?s=612x612&w=0&k=20&c=ef_ahI__DRPraB8CJSAVtIoXICrgJjN7uoP_xVzueNc=?height=100&width=100",
      },
      {
        name: "Grilled Chicken with Vegetable Soup",
        time: "Dinner",
        calories: 290,
        image:
          "https://media.istockphoto.com/id/185276875/photo/mulligatawny-soup.jpg?s=612x612&w=0&k=20&c=sIRfRAeAnVWFcZzO2wlcf3kUtsf47zbn--9_YIJb9yE=?height=100&width=100",
      },
    ],
  },
  {
    id: 3,
    name: "Heart Healthy Plan",
    description: "Low sodium, heart-friendly meals with essential nutrients",
    price: 1399,
    tags: ["Low sodium", "Omega-3 rich", "Antioxidant-rich"],
    rating: 4.6,
    reviews: 87,
    image:
      "https://media.istockphoto.com/id/1363588189/photo/healthy-lifestyle-on-ketogenic-diet-eating-clean-keto-food-good-health-dietary-in-heart-dish.jpg?s=612x612&w=0&k=20&c=RVW_a2Bq3eYeUWqkUbTUHkiQbGJaAMa9Q2fyljGymgY=?height=300&width=500",
    category: "heart",
    popular: false,
    features: [
      "Meals designed by cardiologists and nutritionists",
      "Low sodium recipes",
      "Omega-3 rich ingredients",
      "Antioxidant-rich foods",
      "Heart health monitoring tips",
    ],
    sampleMeals: [
      {
        name: "Ragi Porridge with Fresh Fruits",
        time: "Breakfast",
        calories: 260,
        image:
          "https://media.istockphoto.com/id/1199199171/photo/mush-vegan-in-hydrated-vegetable-milk-banana-honey-kiwi-pomegranate-on-plate-isolated-on-blue.jpg?s=612x612&w=0&k=20&c=weju_oPzi7zvMSQePNqNt-cBr4C2FN8FnPjXr5iEXes=?height=100&width=100",
      },
      {
        name: "Brown Rice with Dal and Vegetable Curry",
        time: "Lunch",
        calories: 360,
        image:
          "https://media.istockphoto.com/id/1334466307/photo/close-up-image-of-karahi-balti-dish-containing-vegetarian-meal-punjabi-kadhi-pakora-recipe.jpg?s=612x612&w=0&k=20&c=ZlarKr_fFfdsKYRwRp_AOPyjYKwLnnKjzHyAct8wiyA=?height=100&width=100",
      },
      {
        name: "Baked Fish with Steamed Vegetables",
        time: "Dinner",
        calories: 310,
        image:
          "https://media.istockphoto.com/id/136923053/photo/sea-bass.jpg?s=612x612&w=0&k=20&c=Ut2fuClkBR-45s3Bx3T9Diw_25dXrN5wFGGqDE-raAw=?height=100&width=100",
      },
    ],
  },
  {
    id: 4,
    name: "Ayurvedic Diet Plan",
    description: "Traditional Ayurvedic meals balanced for your dosha type",
    price: 1599,
    tags: ["Dosha-balanced", "Seasonal", "Holistic"],
    rating: 4.9,
    reviews: 156,
    image:
      "https://media.istockphoto.com/id/521262744/photo/spices-and-nuts-at-wooden-table.jpg?s=612x612&w=0&k=20&c=HvhJn_I7S8qwkW0gueDFeCYbSFgLkPUAsgbQsnnpuV4=?height=300&width=500",
    category: "ayurvedic",
    popular: true,
    features: [
      "Personalized according to your dosha type",
      "Seasonal ingredients",
      "Traditional Ayurvedic recipes",
      "Includes herbal supplements",
      "Consultation with Ayurvedic practitioner",
    ],
    sampleMeals: [
      {
        name: "Sattvic Upma with Herbs",
        time: "Breakfast",
        calories: 290,
        image:
          "https://media.istockphoto.com/id/2091628065/photo/famous-south-indian-healthy-breakfast-suji-upma.jpg?s=612x612&w=0&k=20&c=3vaCpgA4Ta5mNE2Of4YI3r_4oYga5E4i40G5rLeDIZw=?height=100&width=100",
      },
      {
        name: "Kitchari with Seasonal Vegetables",
        time: "Lunch",
        calories: 340,
        image:
          "https://media.istockphoto.com/id/1024091388/photo/cooked-rice-with-vegetables-cod-and-lemon-sauce.jpg?s=612x612&w=0&k=20&c=h_bEwo9wxoyK5lM3eUDe5ydEs6A46CR6gZrcuzgEUjs=?height=100&width=100",
      },
      {
        name: "Mung Bean Soup with Turmeric",
        time: "Dinner",
        calories: 280,
        image:
          "https://media.istockphoto.com/id/1277159212/photo/mung-bean-soup-monggo-beans-in-bowl.jpg?s=612x612&w=0&k=20&c=HcSsgfza7PxfWzxwykei98tr56P6rQUt7KZWSnzMKk8=?height=100&width=100",
      },
    ],
  },
  {
    id: 5,
    name: "Pregnancy Nutrition Plan",
    description: "Nutrient-rich meals designed for maternal and fetal health",
    price: 1699,
    tags: ["Folate-rich", "Iron-rich", "Calcium-focused"],
    rating: 4.8,
    reviews: 76,
    image: "/placeholder.svg?height=300&width=500",
    category: "specialty",
    popular: false,
    features: [
      "Trimester-specific meal plans",
      "Rich in essential pregnancy nutrients",
      "Morning sickness friendly options",
      "Consultation with prenatal nutritionist",
      "Includes recipes for lactation support",
    ],
    sampleMeals: [
      {
        name: "Spinach and Feta Paratha with Yogurt",
        time: "Breakfast",
        calories: 310,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Lentil Soup with Whole Grain Bread",
        time: "Lunch",
        calories: 380,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Salmon Curry with Brown Rice",
        time: "Dinner",
        calories: 420,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: 6,
    name: "Senior Nutrition Plan",
    description: "Easy-to-digest, nutrient-dense meals for seniors",
    price: 1399,
    tags: ["Soft foods", "Nutrient-dense", "Digestion-friendly"],
    rating: 4.7,
    reviews: 62,
    image: "/placeholder.svg?height=300&width=500",
    category: "specialty",
    popular: false,
    features: [
      "Soft, easy-to-chew options",
      "Nutrient-dense ingredients",
      "Digestion-friendly recipes",
      "Portion sizes appropriate for seniors",
      "Includes bone and muscle health foods",
    ],
    sampleMeals: [
      {
        name: "Soft Vegetable Poha",
        time: "Breakfast",
        calories: 270,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Moong Dal Soup with Soft Vegetables",
        time: "Lunch",
        calories: 320,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Soft Khichdi with Ghee",
        time: "Dinner",
        calories: 290,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: 7,
    name: "PCOS Management Plan",
    description: "Balanced meals to help manage PCOS symptoms and hormonal balance",
    price: 1599,
    tags: ["Low-GI", "Anti-inflammatory", "Hormone-balancing"],
    rating: 4.8,
    reviews: 84,
    image: "/placeholder.svg?height=300&width=500",
    category: "specialty",
    popular: true,
    features: [
      "Low glycemic index foods to manage insulin resistance",
      "Anti-inflammatory ingredients",
      "Rich in antioxidants and essential nutrients",
      "Balanced for hormonal health",
      "Consultation with women's health specialist",
    ],
    sampleMeals: [
      {
        name: "Cinnamon Oatmeal with Nuts and Seeds",
        time: "Breakfast",
        calories: 310,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Quinoa Salad with Avocado and Chickpeas",
        time: "Lunch",
        calories: 380,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Turmeric Grilled Fish with Broccoli",
        time: "Dinner",
        calories: 340,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: 8,
    name: "Thyroid Support Plan",
    description: "Specially designed meals to support thyroid function and metabolism",
    price: 1499,
    tags: ["Iodine-rich", "Selenium-rich", "Metabolism-boosting"],
    rating: 4.7,
    reviews: 68,
    image: "/placeholder.svg?height=300&width=500",
    category: "specialty",
    popular: false,
    features: [
      "Iodine and selenium-rich ingredients for thyroid health",
      "Balanced protein and complex carbohydrates",
      "Anti-inflammatory foods",
      "Metabolism-supporting meal timing",
      "Consultation with endocrinology nutritionist",
    ],
    sampleMeals: [
      {
        name: "Seaweed and Egg Breakfast Bowl",
        time: "Breakfast",
        calories: 290,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Brazil Nut and Salmon Salad",
        time: "Lunch",
        calories: 360,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Coconut Curry with Seafood and Vegetables",
        time: "Dinner",
        calories: 380,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
]

export default function MealPlansPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [dietType, setDietType] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Add this after the useState declarations
  const [showPersonalizeModal, setShowPersonalizeModal] = useState(false)
  const [userData, setUserData] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    healthConditions: [] as string[],
    dietaryPreferences: "vegetarian",
    activityLevel: "moderate",
    allergies: "",
  })
  const [personalizedPlan, setPersonalizedPlan] = useState<any>(null)

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const handleAddToCart = (planId: number) => {
    setIsAddingToCart(true)
    // Simulate adding to cart
    setTimeout(() => {
      setIsAddingToCart(false)
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    }, 1000)
  }

  // Add this after the handleAddToCart function
  const generatePersonalizedPlan = () => {
    // In a real app, this would call an API to generate a personalized plan
    const weeklyMeals = {
      monday: {
        breakfast: [
          { name: "Ragi Dosa with Sambar", calories: 320, image: "/placeholder.svg?height=100&width=100" },
          { name: "Mixed Fruit Bowl", calories: 150, image: "/placeholder.svg?height=100&width=100" },
          { name: "Herbal Tea", calories: 30, image: "/placeholder.svg?height=100&width=100" },
          { name: "Roasted Chana", calories: 100, image: "/placeholder.svg?height=100&width=100" },
        ],
        lunch: [
          { name: "Brown Rice with Dal Tadka", calories: 380, image: "/placeholder.svg?height=100&width=100" },
          { name: "Palak Paneer", calories: 250, image: "/placeholder.svg?height=100&width=100" },
          { name: "Cucumber Raita", calories: 80, image: "/placeholder.svg?height=100&width=100" },
          { name: "Roasted Papad", calories: 35, image: "/placeholder.svg?height=100&width=100" },
        ],
        dinner: [
          { name: "Multigrain Roti", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Mixed Vegetable Curry", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Grilled Fish", calories: 200, image: "/placeholder.svg?height=100&width=100" },
          { name: "Buttermilk", calories: 70, image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      tuesday: {
        breakfast: [
          { name: "Oats Idli", calories: 280, image: "/placeholder.svg?height=100&width=100" },
          { name: "Coconut Chutney", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Vegetable Upma", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Green Tea", calories: 2, image: "/placeholder.svg?height=100&width=100" },
        ],
        lunch: [
          { name: "Quinoa Pulao", calories: 320, image: "/placeholder.svg?height=100&width=100" },
          { name: "Rajma Curry", calories: 240, image: "/placeholder.svg?height=100&width=100" },
          { name: "Mixed Vegetable Salad", calories: 60, image: "/placeholder.svg?height=100&width=100" },
          { name: "Curd", calories: 80, image: "/placeholder.svg?height=100&width=100" },
        ],
        dinner: [
          { name: "Jowar Roti", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Bhindi Masala", calories: 150, image: "/placeholder.svg?height=100&width=100" },
          { name: "Masoor Dal", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Vegetable Soup", calories: 90, image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      wednesday: {
        breakfast: [
          { name: "Millet Upma", calories: 280, image: "/placeholder.svg?height=100&width=100" },
          { name: "Sprouts Salad", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Buttermilk", calories: 70, image: "/placeholder.svg?height=100&width=100" },
          { name: "Boiled Egg Whites", calories: 70, image: "/placeholder.svg?height=100&width=100" },
        ],
        lunch: [
          { name: "Multigrain Roti", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Lauki Kofta Curry", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Jeera Rice", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Cucumber Tomato Salad", calories: 50, image: "/placeholder.svg?height=100&width=100" },
        ],
        dinner: [
          { name: "Bajra Roti", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Chana Masala", calories: 210, image: "/placeholder.svg?height=100&width=100" },
          { name: "Steamed Fish", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Mint Raita", calories: 60, image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      thursday: {
        breakfast: [
          { name: "Moong Dal Chilla", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Mint Chutney", calories: 40, image: "/placeholder.svg?height=100&width=100" },
          { name: "Vegetable Poha", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Lemon Tea", calories: 30, image: "/placeholder.svg?height=100&width=100" },
        ],
        lunch: [
          { name: "Brown Rice", calories: 150, image: "/placeholder.svg?height=100&width=100" },
          { name: "Sambar", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Avial", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Papad", calories: 35, image: "/placeholder.svg?height=100&width=100" },
        ],
        dinner: [
          { name: "Ragi Roti", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Methi Matar Malai", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Toor Dal", calories: 150, image: "/placeholder.svg?height=100&width=100" },
          { name: "Carrot Raita", calories: 70, image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      friday: {
        breakfast: [
          { name: "Steamed Idli", calories: 170, image: "/placeholder.svg?height=100&width=100" },
          { name: "Tomato Chutney", calories: 60, image: "/placeholder.svg?height=100&width=100" },
          { name: "Sambhar", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Fruit Salad", calories: 100, image: "/placeholder.svg?height=100&width=100" },
        ],
        lunch: [
          { name: "Vegetable Khichdi", calories: 320, image: "/placeholder.svg?height=100&width=100" },
          { name: "Kadhi", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Beetroot Poriyal", calories: 90, image: "/placeholder.svg?height=100&width=100" },
          { name: "Roasted Papad", calories: 35, image: "/placeholder.svg?height=100&width=100" },
        ],
        dinner: [
          { name: "Jowar Bhakri", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Soya Chunks Curry", calories: 210, image: "/placeholder.svg?height=100&width=100" },
          { name: "Steamed Vegetables", calories: 80, image: "/placeholder.svg?height=100&width=100" },
          { name: "Buttermilk", calories: 70, image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      saturday: {
        breakfast: [
          { name: "Multigrain Dosa", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Peanut Chutney", calories: 100, image: "/placeholder.svg?height=100&width=100" },
          { name: "Vegetable Uttapam", calories: 240, image: "/placeholder.svg?height=100&width=100" },
          { name: "Herbal Tea", calories: 30, image: "/placeholder.svg?height=100&width=100" },
        ],
        lunch: [
          { name: "Millet Rice", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Rasam", calories: 80, image: "/placeholder.svg?height=100&width=100" },
          { name: "Cabbage Thoran", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Curd", calories: 80, image: "/placeholder.svg?height=100&width=100" },
        ],
        dinner: [
          { name: "Ragi Roti", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Paneer Bhurji", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Mixed Dal", calories: 150, image: "/placeholder.svg?height=100&width=100" },
          { name: "Cucumber Raita", calories: 60, image: "/placeholder.svg?height=100&width=100" },
        ],
      },
      sunday: {
        breakfast: [
          { name: "Vegetable Daliya", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Sprouts Salad", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Besan Chilla", calories: 180, image: "/placeholder.svg?height=100&width=100" },
          { name: "Green Tea", calories: 2, image: "/placeholder.svg?height=100&width=100" },
        ],
        lunch: [
          { name: "Brown Rice Pulao", calories: 280, image: "/placeholder.svg?height=100&width=100" },
          { name: "Rajma Curry", calories: 240, image: "/placeholder.svg?height=100&width=100" },
          { name: "Cucumber Raita", calories: 60, image: "/placeholder.svg?height=100&width=100" },
          { name: "Roasted Papad", calories: 35, image: "/placeholder.svg?height=100&width=100" },
        ],
        dinner: [
          { name: "Multigrain Roti", calories: 120, image: "/placeholder.svg?height=100&width=100" },
          { name: "Palak Paneer", calories: 220, image: "/placeholder.svg?height=100&width=100" },
          { name: "Yellow Dal Tadka", calories: 150, image: "/placeholder.svg?height=100&width=100" },
          { name: "Vegetable Salad", calories: 50, image: "/placeholder.svg?height=100&width=100" },
        ],
      },
    }

    // Create a personalized plan based on user data
    const healthCondition = userData.healthConditions.length > 0 ? userData.healthConditions[0] : "general"
    let planType = "Balanced Nutrition Plan"
    let planDescription = "A well-balanced meal plan for overall health and wellness."
    let planPrice = 1499
    let planTags = ["Balanced", "Nutritious", "Wholesome"]

    if (healthCondition === "diabetes") {
      planType = "Personalized Diabetes Management Plan"
      planDescription = "Specially crafted low-glycemic meals to help manage blood sugar levels."
      planPrice = 1699
      planTags = ["Low-GI", "Diabetes-Friendly", "Blood Sugar Control"]
    } else if (healthCondition === "heart") {
      planType = "Personalized Heart Health Plan"
      planDescription = "Heart-friendly meals with reduced sodium and healthy fats."
      planPrice = 1599
      planTags = ["Low-Sodium", "Heart-Healthy", "Omega-3 Rich"]
    } else if (healthCondition === "weight") {
      planType = "Personalized Weight Management Plan"
      planDescription = "Calorie-optimized meals to support your weight goals."
      planPrice = 1499
      planTags = ["Calorie-Controlled", "Protein-Rich", "Weight-Optimized"]
    }

    setPersonalizedPlan({
      id: 100,
      name: planType,
      description: planDescription,
      price: planPrice,
      tags: planTags,
      rating: 5.0,
      reviews: 0,
      image: "/placeholder.svg?height=300&width=500",
      category: healthCondition === "general" ? "balanced" : healthCondition,
      popular: false,
      weeklyMeals: weeklyMeals,
      features: [
        "Personalized based on your health profile",
        "Nutritionally balanced meals",
        "Weekly meal rotation",
        "Includes shopping list",
        "Weekly nutritionist consultation",
      ],
    })

    setShowPersonalizeModal(false)
  }

  const filteredPlans = mealPlans.filter((plan) => {
    // Filter by tab
    if (activeTab !== "all" && plan.category !== activeTab) {
      return false
    }

    // Filter by search term
    if (
      searchTerm &&
      !plan.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !plan.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !plan.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    // Filter by price range
    if (priceRange === "under-1000" && plan.price >= 1000) return false
    if (priceRange === "1000-1500" && (plan.price < 1000 || plan.price > 1500)) return false
    if (priceRange === "above-1500" && plan.price <= 1500) return false

    return true
  })

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Personalized Meal Plans</h1>
        <p className="mt-2 text-muted-foreground">
          Discover meal plans tailored to your specific health needs and dietary preferences
        </p>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-emerald-100 text-emerald-800 p-4 rounded-md shadow-md border border-emerald-200 animate-fade-in">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <span>Plan added to cart successfully!</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
        {/* Filters sidebar */}
        <div className="order-2 lg:order-1">
          <div className="sticky top-20">
            <Card className="border-saffron-100">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Filters</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 lg:hidden"
                    onClick={() => setFiltersOpen(!filtersOpen)}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    {filtersOpen ? "Hide" : "Show"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="font-medium">Health Conditions</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="diabetes"
                          onChange={() => setActiveTab(activeTab === "diabetes" ? "all" : "diabetes")}
                          checked={activeTab === "diabetes"}
                        />
                        <Label htmlFor="diabetes">Diabetes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="heart"
                          onChange={() => setActiveTab(activeTab === "heart" ? "all" : "heart")}
                          checked={activeTab === "heart"}
                        />
                        <Label htmlFor="heart">Heart Disease</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="weight"
                          onChange={() => setActiveTab(activeTab === "weight" ? "all" : "weight")}
                          checked={activeTab === "weight"}
                        />
                        <Label htmlFor="weight">Weight Management</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ayurvedic"
                          onChange={() => setActiveTab(activeTab === "ayurvedic" ? "all" : "ayurvedic")}
                          checked={activeTab === "ayurvedic"}
                        />
                        <Label htmlFor="ayurvedic">Ayurvedic</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="specialty"
                          onChange={() => setActiveTab(activeTab === "specialty" ? "all" : "specialty")}
                          checked={activeTab === "specialty"}
                        />
                        <Label htmlFor="specialty">Specialty Plans</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="font-medium">Dietary Preferences</Label>
                    <RadioGroup defaultValue="all" onValueChange={(value) => setDietType(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all-diet" />
                        <Label htmlFor="all-diet">All Types</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vegetarian" id="vegetarian" />
                        <Label htmlFor="vegetarian">Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-vegetarian" id="non-vegetarian" />
                        <Label htmlFor="non-vegetarian">Non-Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vegan" id="vegan" />
                        <Label htmlFor="vegan">Vegan</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="font-medium">Meal Type</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="north-indian" defaultChecked />
                        <Label htmlFor="north-indian">North Indian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="south-indian" defaultChecked />
                        <Label htmlFor="south-indian">South Indian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="continental" />
                        <Label htmlFor="continental">Continental</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="font-medium">Price Range</Label>
                    <RadioGroup defaultValue="all" onValueChange={(value) => setPriceRange(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all-prices" />
                        <Label htmlFor="all-prices">All Prices</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-1000" id="under-1000" />
                        <Label htmlFor="under-1000">Under ₹1000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1000-1500" id="1000-1500" defaultChecked />
                        <Label htmlFor="1000-1500">₹1000 - ₹1500</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="above-1500" id="above-1500" />
                        <Label htmlFor="above-1500">Above ₹1500</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button className="w-full bg-saffron-500 hover:bg-saffron-600">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main content */}
        <div className="order-1 lg:order-2">
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search meal plans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          {/* Personalized Plan Button */}
          <div className="mb-6 bg-gradient-to-r from-saffron-50 to-spice-50 p-6 rounded-xl border border-saffron-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Get Your Personalized Meal Plan</h2>
                <p className="text-muted-foreground">
                  Answer a few questions about your health and preferences to receive a customized meal plan.
                </p>
              </div>
              <Button onClick={() => setShowPersonalizeModal(true)} className="bg-saffron-500 hover:bg-saffron-600">
                Create My Plan
              </Button>
            </div>
          </div>

          {/* Display Personalized Plan if available */}
          {personalizedPlan && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Your Personalized Meal Plan</h2>
              <Card className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all">
                <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                  <div className="relative overflow-hidden">
                    <img
                      src={personalizedPlan.image || "/placeholder.svg"}
                      alt={personalizedPlan.name}
                      className="h-full w-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-emerald-500">Personalized</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{personalizedPlan.name}</h3>
                        <p className="mt-1 text-muted-foreground">{personalizedPlan.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {personalizedPlan.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="bg-saffron-50">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-saffron-700">₹{personalizedPlan.price}</div>
                        <div className="text-sm text-muted-foreground">per month</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {personalizedPlan.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="mr-2 h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-saffron-500 hover:bg-saffron-600">
                            View Weekly Meals
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{personalizedPlan.name}</DialogTitle>
                            <DialogDescription>{personalizedPlan.description}</DialogDescription>
                          </DialogHeader>
                          <Tabs defaultValue="monday">
                            <TabsList className="mb-4 flex flex-wrap">
                              <TabsTrigger value="monday">Monday</TabsTrigger>
                              <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
                              <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
                              <TabsTrigger value="thursday">Thursday</TabsTrigger>
                              <TabsTrigger value="friday">Friday</TabsTrigger>
                              <TabsTrigger value="saturday">Saturday</TabsTrigger>
                              <TabsTrigger value="sunday">Sunday</TabsTrigger>
                            </TabsList>

                            {Object.entries(personalizedPlan.weeklyMeals).map(([day, meals]) => (
                              <TabsContent key={day} value={day}>
                                <div className="space-y-6">
                                  <div>
                                    <h3 className="text-lg font-medium mb-3">Breakfast</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {meals.breakfast.map((meal, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center gap-3 p-2 rounded-md bg-saffron-50"
                                        >
                                          <img
                                            src={meal.image || "/placeholder.svg"}
                                            alt={meal.name}
                                            className="w-12 h-12 rounded-md object-cover"
                                          />
                                          <div className="flex-1">
                                            <div className="font-medium text-sm">{meal.name}</div>
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                              <span className="flex items-center">
                                                <Flame className="mr-1 h-3 w-3" />
                                                {meal.calories} cal
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h3 className="text-lg font-medium mb-3">Lunch</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {meals.lunch.map((meal, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center gap-3 p-2 rounded-md bg-saffron-50"
                                        >
                                          <img
                                            src={meal.image || "/placeholder.svg"}
                                            alt={meal.name}
                                            className="w-12 h-12 rounded-md object-cover"
                                          />
                                          <div className="flex-1">
                                            <div className="font-medium text-sm">{meal.name}</div>
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                              <span className="flex items-center">
                                                <Flame className="mr-1 h-3 w-3" />
                                                {meal.calories} cal
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h3 className="text-lg font-medium mb-3">Dinner</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {meals.dinner.map((meal, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center gap-3 p-2 rounded-md bg-saffron-50"
                                        >
                                          <img
                                            src={meal.image || "/placeholder.svg"}
                                            alt={meal.name}
                                            className="w-12 h-12 rounded-md object-cover"
                                          />
                                          <div className="flex-1">
                                            <div className="font-medium text-sm">{meal.name}</div>
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                              <span className="flex items-center">
                                                <Flame className="mr-1 h-3 w-3" />
                                                {meal.calories} cal
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>
                            ))}
                          </Tabs>
                          <div className="mt-6">
                            <Button
                              className="w-full bg-saffron-500 hover:bg-saffron-600"
                              onClick={() => handleAddToCart(personalizedPlan.id)}
                            >
                              Subscribe to This Plan
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="outline"
                        className="border-saffron-200"
                        onClick={() => handleAddToCart(personalizedPlan.id)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Plans</TabsTrigger>
              <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
              <TabsTrigger value="weight">Weight</TabsTrigger>
              <TabsTrigger value="heart">Heart</TabsTrigger>
              <TabsTrigger value="ayurvedic">Ayurvedic</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
            </TabsList>

            <div className="space-y-6">
              {filteredPlans.length === 0 ? (
                <div className="text-center py-12">
                  <Leaf className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                  <h3 className="mt-4 text-lg font-semibold">No meal plans found</h3>
                  <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term</p>
                </div>
              ) : (
                filteredPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
                  >
                    <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                      <div className="relative overflow-hidden">
                        <img
                          src={plan.image || "/placeholder.svg"}
                          alt={plan.name}
                          className="h-full w-full object-cover"
                        />
                        {plan.popular && <Badge className="absolute top-2 left-2 bg-spice-500">Popular</Badge>}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                          onClick={() => toggleFavorite(plan.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${favorites.includes(plan.id) ? "fill-spice-500 text-spice-500" : ""}`}
                          />
                          <span className="sr-only">Add to favorites</span>
                        </Button>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <p className="mt-1 text-muted-foreground">{plan.description}</p>
                            <div className="mt-2 flex items-center">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(plan.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm text-muted-foreground">
                                {plan.rating} ({plan.reviews} reviews)
                              </span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {plan.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="bg-saffron-50">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-saffron-700">₹{plan.price}</div>
                            <div className="text-sm text-muted-foreground">per month</div>
                          </div>
                        </div>

                        <Collapsible className="mt-4">
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="p-0 h-auto hover:bg-transparent text-saffron-600 hover:text-saffron-700"
                            >
                              {selectedPlan === plan.id ? "Hide sample meals" : "View sample meals"}
                              <ChevronDown
                                className={`ml-1 h-4 w-4 transition-transform ${selectedPlan === plan.id ? "rotate-180" : ""}`}
                              />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4 space-y-3">
                            {plan.sampleMeals.map((meal, index) => (
                              <div key={index} className="flex items-center gap-3 p-2 rounded-md bg-saffron-50">
                                <img
                                  src={meal.image || "/placeholder.svg"}
                                  alt={meal.name}
                                  className="w-12 h-12 rounded-md object-cover"
                                />
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{meal.name}</div>
                                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center">
                                      <Clock className="mr-1 h-3 w-3" />
                                      {meal.time}
                                    </span>
                                    <span className="flex items-center">
                                      <Flame className="mr-1 h-3 w-3" />
                                      {meal.calories} cal
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {plan.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <Check className="mr-2 h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-saffron-500 hover:bg-saffron-600">
                                View Details
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>{plan.name}</DialogTitle>
                                <DialogDescription>{plan.description}</DialogDescription>
                              </DialogHeader>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <img
                                    src={plan.image || "/placeholder.svg"}
                                    alt={plan.name}
                                    className="w-full h-48 object-cover rounded-md"
                                  />
                                  <div className="mt-4">
                                    <h4 className="font-medium mb-2">Plan Features:</h4>
                                    <ul className="space-y-2">
                                      {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                          <Check className="mr-2 h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Sample Meals:</h4>
                                  <div className="space-y-4">
                                    {plan.sampleMeals.map((meal, index) => (
                                      <div key={index} className="flex items-center gap-3">
                                        <img
                                          src={meal.image || "/placeholder.svg"}
                                          alt={meal.name}
                                          className="w-16 h-16 rounded-md object-cover"
                                        />
                                        <div>
                                          <div className="font-medium">{meal.name}</div>
                                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <span className="flex items-center">
                                              <Clock className="mr-1 h-3 w-3" />
                                              {meal.time}
                                            </span>
                                            <span className="flex items-center">
                                              <Flame className="mr-1 h-3 w-3" />
                                              {meal.calories} cal
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-6">
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="font-medium">Price:</span>
                                      <span className="text-xl font-bold text-saffron-700">₹{plan.price}/month</span>
                                    </div>
                                    <Button
                                      className="w-full bg-saffron-500 hover:bg-saffron-600"
                                      onClick={() => handleAddToCart(plan.id)}
                                      disabled={isAddingToCart}
                                    >
                                      {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            className="border-saffron-200"
                            onClick={() => handleAddToCart(plan.id)}
                            disabled={isAddingToCart}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            {isAddingToCart ? "Adding..." : "Subscribe"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </Tabs>
        </div>
      </div>

      {/* Personalization Modal */}
      <Dialog open={showPersonalizeModal} onOpenChange={setShowPersonalizeModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Personalize Your Meal Plan</DialogTitle>
            <DialogDescription>
              Provide your health details to get a customized meal plan tailored to your specific needs.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={userData.age}
                onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                className="mb-3"
              />

              <Label htmlFor="gender">Gender</Label>
              <Select value={userData.gender} onValueChange={(value) => setUserData({ ...userData, gender: value })}>
                <SelectTrigger id="gender" className="mb-3">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={userData.weight}
                onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                className="mb-3"
              />

              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                value={userData.height}
                onChange={(e) => setUserData({ ...userData, height: e.target.value })}
                className="mb-3"
              />
            </div>
            <div>
              <Label className="block mb-2">Health Conditions</Label>
              <div className="space-y-2 mb-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="diabetes"
                    checked={userData.healthConditions.includes("diabetes")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setUserData({
                          ...userData,
                          healthConditions: [...userData.healthConditions, "diabetes"],
                        })
                      } else {
                        setUserData({
                          ...userData,
                          healthConditions: userData.healthConditions.filter((c) => c !== "diabetes"),
                        })
                      }
                    }}
                  />
                  <Label htmlFor="diabetes">Diabetes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="heart"
                    checked={userData.healthConditions.includes("heart")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setUserData({
                          ...userData,
                          healthConditions: [...userData.healthConditions, "heart"],
                        })
                      } else {
                        setUserData({
                          ...userData,
                          healthConditions: userData.healthConditions.filter((c) => c !== "heart"),
                        })
                      }
                    }}
                  />
                  <Label htmlFor="heart">Heart Disease</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="weight"
                    checked={userData.healthConditions.includes("weight")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setUserData({
                          ...userData,
                          healthConditions: [...userData.healthConditions, "weight"],
                        })
                      } else {
                        setUserData({
                          ...userData,
                          healthConditions: userData.healthConditions.filter((c) => c !== "weight"),
                        })
                      }
                    }}
                  />
                  <Label htmlFor="weight">Weight Management</Label>
                </div>
              </div>

              <Label htmlFor="dietary">Dietary Preference</Label>
              <Select
                value={userData.dietaryPreferences}
                onValueChange={(value) => setUserData({ ...userData, dietaryPreferences: value })}
              >
                <SelectTrigger id="dietary" className="mb-3">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="activity">Activity Level</Label>
              <Select
                value={userData.activityLevel}
                onValueChange={(value) => setUserData({ ...userData, activityLevel: value })}
              >
                <SelectTrigger id="activity" className="mb-3">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary</SelectItem>
                  <SelectItem value="light">Light Activity</SelectItem>
                  <SelectItem value="moderate">Moderate Activity</SelectItem>
                  <SelectItem value="active">Very Active</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="allergies">Allergies/Intolerances</Label>
              <Input
                id="allergies"
                value={userData.allergies}
                onChange={(e) => setUserData({ ...userData, allergies: e.target.value })}
                placeholder="e.g., nuts, dairy, gluten"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={generatePersonalizedPlan} className="bg-saffron-500 hover:bg-saffron-600">
              Generate Personalized Plan
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
