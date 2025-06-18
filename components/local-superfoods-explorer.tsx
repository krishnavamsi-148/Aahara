"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Leaf, MapPin, Search, Star, Clock, Award, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function LocalSuperfoodsExplorer() {
  const [selectedRegion, setSelectedRegion] = useState("south")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const regions = [
    { id: "north", name: "North India", color: "bg-red-500" },
    { id: "south", name: "South India", color: "bg-amber-500" },
    { id: "east", name: "East India", color: "bg-purple-500" },
    { id: "west", name: "West India", color: "bg-green-500" },
    { id: "northeast", name: "North East India", color: "bg-blue-500" },
    { id: "central", name: "Central India", color: "bg-orange-500" },
  ]

  const superfoods = [
    {
      id: 1,
      name: "Moringa (Drumstick)",
      region: "south",
      category: "leafy",
      image: "/placeholder.svg?height=150&width=150",
      description: "Rich in vitamins, minerals, and antioxidants. Supports immune function and energy levels.",
      nutritionalValue: {
        protein: "9g per 100g",
        iron: "4mg per 100g",
        calcium: "185mg per 100g",
        vitaminC: "51mg per 100g",
      },
      healthBenefits: [
        "Anti-inflammatory",
        "Supports immune system",
        "Rich in antioxidants",
        "Promotes healthy digestion",
      ],
      traditionalUses: "Used in sambar, curries, and as a tea. Leaves are dried and powdered for daily consumption.",
      seasonality: "Available year-round, best harvested in summer",
      rating: 4.9,
      ayurvedic: {
        dosha: "Balances Vata and Kapha",
        taste: "Bitter, Pungent",
        potency: "Heating",
      },
    },
    {
      id: 2,
      name: "Ragi (Finger Millet)",
      region: "south",
      category: "grain",
      image: "/placeholder.svg?height=150&width=150",
      description:
        "Gluten-free grain rich in calcium, iron, and fiber. Excellent for bone health and diabetes management.",
      nutritionalValue: {
        protein: "7.3g per 100g",
        iron: "3.9mg per 100g",
        calcium: "344mg per 100g",
        fiber: "11.5g per 100g",
      },
      healthBenefits: ["Supports bone health", "Helps manage diabetes", "Aids weight management", "Improves digestion"],
      traditionalUses:
        "Used to make mudde (balls), dosa, porridge, and roti. Often given to growing children and elderly.",
      seasonality: "Harvested post-monsoon, available year-round as dried grain",
      rating: 4.8,
      ayurvedic: {
        dosha: "Balances Pitta and Kapha",
        taste: "Sweet, Astringent",
        potency: "Cooling",
      },
    },
    {
      id: 3,
      name: "Amla (Indian Gooseberry)",
      region: "north",
      category: "fruit",
      image: "/placeholder.svg?height=150&width=150",
      description: "One of the richest sources of Vitamin C. Supports immunity, skin health, and digestion.",
      nutritionalValue: {
        vitaminC: "600mg per 100g",
        iron: "1.2mg per 100g",
        calcium: "50mg per 100g",
        fiber: "4.3g per 100g",
      },
      healthBenefits: ["Boosts immunity", "Improves skin health", "Supports liver function", "Aids digestion"],
      traditionalUses: "Consumed fresh, as juice, in pickles, or as chyawanprash. Used in Ayurvedic medicines.",
      seasonality: "Winter fruit, available from October to March",
      rating: 4.9,
      ayurvedic: {
        dosha: "Balances all three doshas",
        taste: "Five of six tastes (except Salty)",
        potency: "Cooling",
      },
    },
    {
      id: 4,
      name: "Gond Katira (Tragacanth Gum)",
      region: "north",
      category: "herb",
      image: "/placeholder.svg?height=150&width=150",
      description: "Natural cooling agent that helps with inflammation, joint pain, and digestive issues.",
      nutritionalValue: {
        fiber: "High",
        minerals: "Rich in calcium and magnesium",
        calories: "Low calorie",
      },
      healthBenefits: ["Cooling properties", "Anti-inflammatory", "Supports joint health", "Aids digestion"],
      traditionalUses:
        "Soaked and consumed as a cooling drink in summer. Added to laddoos for pregnant women and growing children.",
      seasonality: "Available year-round as dried gum",
      rating: 4.6,
      ayurvedic: {
        dosha: "Balances Pitta and Vata",
        taste: "Sweet, Astringent",
        potency: "Cooling",
      },
    },
    {
      id: 5,
      name: "Bamboo Shoot",
      region: "northeast",
      category: "vegetable",
      image: "/placeholder.svg?height=150&width=150",
      description: "Low in fat and calories but high in fiber and potassium. Supports heart health and digestion.",
      nutritionalValue: {
        protein: "2.6g per 100g",
        fiber: "2.2g per 100g",
        potassium: "533mg per 100g",
        calories: "27 per 100g",
      },
      healthBenefits: ["Supports heart health", "Aids weight loss", "Improves digestion", "Rich in antioxidants"],
      traditionalUses: "Fermented, pickled, or used in curries and stir-fries. A staple in North Eastern cuisine.",
      seasonality: "Best harvested during monsoon season",
      rating: 4.5,
      ayurvedic: {
        dosha: "Balances Kapha",
        taste: "Bitter, Astringent",
        potency: "Heating",
      },
    },
    {
      id: 6,
      name: "Kokum",
      region: "west",
      category: "fruit",
      image: "/placeholder.svg?height=150&width=150",
      description: "Natural coolant rich in antioxidants. Supports digestion, weight management, and skin health.",
      nutritionalValue: {
        antioxidants: "High in garcinol and hydroxycitric acid",
        vitamins: "Contains B vitamins",
        minerals: "Rich in potassium and manganese",
      },
      healthBenefits: ["Cooling properties", "Aids weight loss", "Improves digestion", "Anti-inflammatory"],
      traditionalUses:
        "Used in sol kadhi, curries, and as a cooling summer drink. Also used for making kokum butter for skin care.",
      seasonality: "Summer fruit, available from April to June",
      rating: 4.7,
      ayurvedic: {
        dosha: "Balances Pitta",
        taste: "Sour, Astringent",
        potency: "Cooling",
      },
    },
    {
      id: 7,
      name: "Sattu (Roasted Gram Flour)",
      region: "east",
      category: "grain",
      image: "/placeholder.svg?height=150&width=150",
      description: "High-protein flour made from roasted chickpeas or barley. Excellent for energy and satiety.",
      nutritionalValue: {
        protein: "20g per 100g",
        fiber: "11g per 100g",
        iron: "5mg per 100g",
        calcium: "202mg per 100g",
      },
      healthBenefits: ["High protein content", "Sustained energy release", "Cooling properties", "Supports digestion"],
      traditionalUses:
        "Mixed with water or milk as a drink. Used to make litti, paratha, and ladoos. Traditional summer coolant.",
      seasonality: "Available year-round as it's a processed food",
      rating: 4.8,
      ayurvedic: {
        dosha: "Balances Vata and Pitta",
        taste: "Sweet, Astringent",
        potency: "Cooling",
      },
    },
    {
      id: 8,
      name: "Kodo Millet",
      region: "central",
      category: "grain",
      image: "/placeholder.svg?height=150&width=150",
      description: "Ancient grain rich in fiber and minerals. Excellent for diabetes management and digestive health.",
      nutritionalValue: {
        protein: "8.3g per 100g",
        fiber: "9g per 100g",
        iron: "2.9mg per 100g",
        magnesium: "146mg per 100g",
      },
      healthBenefits: ["Helps manage diabetes", "Supports heart health", "Aids digestion", "Gluten-free"],
      traditionalUses:
        "Used to make roti, porridge, and as a rice substitute. Traditional staple in tribal communities.",
      seasonality: "Harvested post-monsoon, available year-round as dried grain",
      rating: 4.6,
      ayurvedic: {
        dosha: "Balances Kapha and Pitta",
        taste: "Sweet, Astringent",
        potency: "Cooling",
      },
    },
    {
      id: 9,
      name: "Turmeric (Haldi)",
      region: "central",
      category: "herb",
      image: "/placeholder.svg?height=150&width=150",
      description: "Powerful anti-inflammatory and antioxidant. Used for centuries in Ayurvedic medicine.",
      nutritionalValue: {
        curcumin: "High content",
        iron: "2.1mg per 100g",
        manganese: "1.9mg per 100g",
        vitaminB6: "0.2mg per 100g",
      },
      healthBenefits: [
        "Anti-inflammatory",
        "Antioxidant properties",
        "Supports joint health",
        "Improves brain function",
      ],
      traditionalUses:
        "Used in cooking, as a healing paste for wounds, and in ceremonial rituals. Essential in most Indian kitchens.",
      seasonality: "Harvested in winter, available year-round as dried powder",
      rating: 4.9,
      ayurvedic: {
        dosha: "Balances all three doshas",
        taste: "Bitter, Pungent, Astringent",
        potency: "Heating",
      },
    },
    {
      id: 10,
      name: "Ashwagandha",
      region: "north",
      category: "herb",
      image: "/placeholder.svg?height=150&width=150",
      description: "Adaptogenic herb that helps the body manage stress. Supports immunity and energy levels.",
      nutritionalValue: {
        withanolides: "High content",
        iron: "3.3mg per 100g",
        aminoAcids: "Various essential amino acids",
      },
      healthBenefits: ["Reduces stress", "Boosts immunity", "Improves energy", "Supports cognitive function"],
      traditionalUses:
        "Consumed as powder mixed with milk or water. Used in Ayurvedic formulations for rejuvenation and vitality.",
      seasonality: "Harvested in winter, available year-round as dried powder",
      rating: 4.8,
      ayurvedic: {
        dosha: "Balances Vata and Kapha",
        taste: "Bitter, Astringent",
        potency: "Heating",
      },
    },
    {
      id: 11,
      name: "Jackfruit (Kathal)",
      region: "south",
      category: "fruit",
      image: "/placeholder.svg?height=150&width=150",
      description: "Largest tree-borne fruit rich in fiber, vitamins, and minerals. Often used as a meat substitute.",
      nutritionalValue: {
        protein: "1.7g per 100g",
        fiber: "1.5g per 100g",
        potassium: "303mg per 100g",
        vitaminC: "13.7mg per 100g",
      },
      healthBenefits: ["Good for digestion", "Supports heart health", "Boosts immunity", "Provides sustained energy"],
      traditionalUses:
        "Unripe fruit used in curries and sabzis as a meat substitute. Ripe fruit eaten fresh or made into desserts.",
      seasonality: "Summer fruit, available from March to June",
      rating: 4.7,
      ayurvedic: {
        dosha: "Balances Vata",
        taste: "Sweet, Sour",
        potency: "Heating",
      },
    },
    {
      id: 12,
      name: "Ghee (Clarified Butter)",
      region: "all",
      category: "herb",
      image: "/placeholder.svg?height=150&width=150",
      description: "Traditional clarified butter rich in healthy fats and fat-soluble vitamins.",
      nutritionalValue: {
        fatSoluble: "Rich in vitamins A, D, E, and K",
        butyrate: "Contains butyric acid",
        omega3: "Contains omega-3 fatty acids",
      },
      healthBenefits: [
        "Supports digestion",
        "Nourishes tissues",
        "Improves absorption of nutrients",
        "Anti-inflammatory",
      ],
      traditionalUses:
        "Used in cooking, religious ceremonies, and Ayurvedic treatments. Essential in most Indian kitchens.",
      seasonality: "Available year-round",
      rating: 4.9,
      ayurvedic: {
        dosha: "Balances Vata and Pitta",
        taste: "Sweet",
        potency: "Cooling",
      },
    },
  ]

  // Filter superfoods based on selected region, search query, and active tab
  const filteredSuperfoods = superfoods.filter((food) => {
    const matchesRegion = selectedRegion === "all" || food.region === selectedRegion || food.region === "all"
    const matchesSearch =
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeTab === "all" || food.category === activeTab

    return matchesRegion && matchesSearch && matchesCategory
  })

  return (
    <Card className="w-full overflow-hidden border-none shadow-lg">
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern-kalamkari"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <MapPin className="mr-2 h-6 w-6" />
            <h2 className="text-2xl font-bold">Local Superfoods Explorer</h2>
          </div>
          <p className="text-white/80 max-w-3xl">
            Discover traditional superfoods from different regions of India and their health benefits. These ancient
            ingredients have been used for centuries in Ayurvedic medicine and traditional cooking.
          </p>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center text-white font-bold">
                <Leaf className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="temple-border mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="text-sm font-medium mb-1 block">Select Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="border-emerald-200">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map((region) => (
                    <SelectItem key={region.id} value={region.id}>
                      <div className="flex items-center">
                        <span className={`w-2 h-2 rounded-full ${region.color} mr-2`}></span>
                        {region.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-1 block">Search Superfoods</label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or benefit..."
                  className="pl-8 border-emerald-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="bg-emerald-50 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                All Types
              </TabsTrigger>
              <TabsTrigger value="grain" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Grains
              </TabsTrigger>
              <TabsTrigger value="leafy" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Leafy Greens
              </TabsTrigger>
              <TabsTrigger value="fruit" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Fruits
              </TabsTrigger>
              <TabsTrigger
                value="vegetable"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Vegetables
              </TabsTrigger>
              <TabsTrigger value="herb" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Herbs & Spices
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {filteredSuperfoods.length === 0 ? (
          <div className="text-center py-12">
            <Leaf className="h-12 w-12 mx-auto text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-semibold">No superfoods found</h3>
            <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSuperfoods.map((food) => (
              <motion.div
                key={food.id}
                className="group relative overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={food.image || "/placeholder.svg"}
                    alt={food.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-2 right-2">
                    <Badge className={`${regions.find((r) => r.id === food.region)?.color} text-white`}>
                      {food.region === "all" ? "Pan-Indian" : regions.find((r) => r.id === food.region)?.name}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-bold text-lg text-white">{food.name}</h3>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        {food.category.charAt(0).toUpperCase() + food.category.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm ml-1 font-medium">{food.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{food.description}</p>

                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-1 flex items-center">
                      <Sparkles className="h-3 w-3 text-emerald-500 mr-1" />
                      Key Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {food.healthBenefits.slice(0, 3).map((benefit, i) => (
                        <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-1 flex items-center">
                      <Award className="h-3 w-3 text-amber-500 mr-1" />
                      Ayurvedic Properties:
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Dosha:</span> {food.ayurvedic.dosha}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Taste:</span> {food.ayurvedic.taste}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-1 flex items-center">
                      <Clock className="h-3 w-3 text-blue-500 mr-1" />
                      Seasonality:
                    </h4>
                    <p className="text-xs text-muted-foreground">{food.seasonality}</p>
                  </div>

                  <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                    View Detailed Profile
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-25"></div>
            <Button className="relative bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-6">
              Explore All Indian Superfoods
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
