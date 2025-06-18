"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Search, Calendar, Clock, Heart, BookOpen, Bookmark, Share2, ThumbsUp } from "lucide-react"

// Sample health tips data
const healthTips = [
  {
    id: 1,
    title: "5 Ayurvedic Herbs to Manage Diabetes Naturally",
    excerpt:
      "Discover how traditional herbs like Gymnema Sylvestre and Fenugreek can help regulate blood sugar levels.",
    content: `
      <p>Ayurveda, India's ancient system of medicine, offers several herbs that can help manage diabetes naturally. Here are five powerful herbs with scientific backing:</p>
      
      <h3>1. Gymnema Sylvestre (Gurmar)</h3>
      <p>Known as "sugar destroyer" in Hindi, this herb can help reduce sugar cravings and improve insulin function. Studies show it may help lower blood glucose levels and reduce HbA1c.</p>
      
      <h3>2. Fenugreek (Methi)</h3>
      <p>Fenugreek seeds are rich in soluble fiber that slows down digestion and absorption of carbohydrates. This results in a more gradual rise in blood sugar levels. Soak 1 tablespoon of fenugreek seeds overnight and consume in the morning.</p>
      
      <h3>3. Bitter Gourd (Karela)</h3>
      <p>Bitter gourd contains compounds that act like insulin, helping to reduce blood glucose levels. Regular consumption of bitter gourd juice can significantly improve glucose tolerance.</p>
      
      <h3>4. Turmeric (Haldi)</h3>
      <p>Curcumin, the active compound in turmeric, has powerful anti-inflammatory and antioxidant properties. It may help improve insulin sensitivity and reduce blood sugar levels.</p>
      
      <h3>5. Amla (Indian Gooseberry)</h3>
      <p>Rich in vitamin C and antioxidants, amla can help improve pancreatic function and enhance insulin sensitivity. Regular consumption may help reduce fasting and post-meal blood glucose levels.</p>
      
      <p>Remember to consult with your healthcare provider before adding these herbs to your diabetes management plan, especially if you're taking medication.</p>
    `,
    category: "Ayurveda",
    tags: ["Diabetes", "Herbs", "Natural Remedies"],
    author: "Dr. Anjali Sharma",
    authorTitle: "Ayurvedic Practitioner",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    likes: 245,
    comments: 32,
    featured: true,
  },
  {
    id: 2,
    title: "Understanding the Glycemic Index for Better Blood Sugar Control",
    excerpt: "Learn how to choose low-glycemic foods to maintain stable blood sugar levels throughout the day.",
    content: `
      <p>The glycemic index (GI) is a ranking system for carbohydrate-containing foods that indicates how quickly they raise blood glucose levels. Understanding and applying the GI concept can significantly improve blood sugar management.</p>
      
      <h3>What is the Glycemic Index?</h3>
      <p>The GI ranks foods on a scale from 0 to 100 based on how quickly they cause blood sugar levels to rise:</p>
      <ul>
        <li>Low GI (55 or less): Foods that cause a slow, gradual rise in blood sugar</li>
        <li>Medium GI (56-69): Foods that cause a moderate rise</li>
        <li>High GI (70 or more): Foods that cause a rapid spike</li>
      </ul>
      
      <h3>Low GI Indian Foods</h3>
      <p>Many traditional Indian foods have a low glycemic index, making them excellent choices for blood sugar management:</p>
      <ul>
        <li>Whole wheat roti (GI: 45-55)</li>
        <li>Barley (jau) (GI: 25-30)</li>
        <li>Millet (bajra, ragi) (GI: 35-55)</li>
        <li>Legumes (dal) (GI: 25-40)</li>
        <li>Most non-starchy vegetables</li>
      </ul>
      
      <h3>Medium GI Indian Foods</h3>
      <ul>
        <li>Basmati rice (GI: 58-65)</li>
        <li>Idli (GI: 65-70)</li>
        <li>Poha (GI: 65-70)</li>
      </ul>
      
      <h3>High GI Indian Foods</h3>
      <ul>
        <li>White rice (GI: 70-80)</li>
        <li>Potatoes (GI: 70-80)</li>
        <li>White bread (GI: 70-75)</li>
        <li>Most processed foods and sweets</li>
      </ul>
      
      <h3>Tips for a Low-GI Diet</h3>
      <ol>
        <li>Choose whole grains over refined grains</li>
        <li>Combine high GI foods with protein, healthy fats, or fiber to lower the overall GI of your meal</li>
        <li>Include a source of protein with each meal</li>
        <li>Add vinegar or lemon juice to meals, as acidity can lower the GI</li>
        <li>Cook pasta al dente (firm), as overcooking increases its GI</li>
      </ol>
      
      <p>Remember that portion size matters too. Even low-GI foods can raise blood sugar if consumed in large quantities.</p>
    `,
    category: "Nutrition",
    tags: ["Diabetes", "Blood Sugar", "Diet"],
    author: "Priya Desai",
    authorTitle: "Clinical Nutritionist",
    date: "June 2, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    likes: 189,
    comments: 24,
    featured: true,
  },
  {
    id: 3,
    title: "Heart-Healthy Spices in Your Indian Kitchen",
    excerpt: "Discover how common Indian spices can boost heart health and reduce cardiovascular risk factors.",
    content: `
      <p>Your Indian spice cabinet is a treasure trove of heart-healthy compounds. Here's how common spices can benefit your cardiovascular system:</p>
      
      <h3>1. Turmeric (Haldi)</h3>
      <p>Curcumin, the active compound in turmeric, has powerful anti-inflammatory and antioxidant properties. It may help reduce cholesterol levels, prevent blood clots, and improve endothelial function (the health of the blood vessel lining).</p>
      <p><strong>How to use:</strong> Add 1/2 teaspoon to curries, soups, or golden milk (turmeric latte).</p>
      
      <h3>2. Cinnamon (Dalchini)</h3>
      <p>Cinnamon may help reduce blood pressure, improve cholesterol levels, and lower blood sugar—all risk factors for heart disease. It contains compounds that promote better blood flow and prevent inflammation.</p>
      <p><strong>How to use:</strong> Add to oatmeal, coffee, or sprinkle on fruit.</p>
      
      <h3>3. Cardamom (Elaichi)</h3>
      <p>This aromatic spice may help lower blood pressure and has antioxidant properties that protect the heart. Studies suggest it can improve cholesterol profiles and reduce inflammation.</p>
      <p><strong>How to use:</strong> Add to chai, desserts, or rice dishes.</p>
      
      <h3>4. Garlic (Lehsun)</h3>
      <p>Garlic contains allicin, which may help reduce cholesterol, lower blood pressure, and prevent blood clots. Regular consumption is associated with reduced risk of heart disease.</p>
      <p><strong>How to use:</strong> Add to most savory dishes; for maximum benefit, crush or chop and let sit for 10 minutes before cooking.</p>
      
      <h3>5. Ginger (Adrak)</h3>
      <p>Ginger may help reduce blood pressure, lower cholesterol, and prevent blood clots. Its anti-inflammatory properties also benefit heart health.</p>
      <p><strong>How to use:</strong> Add to tea, curries, or make fresh ginger water.</p>
      
      <h3>6. Fenugreek (Methi)</h3>
      <p>Fenugreek seeds can help lower cholesterol and triglyceride levels. They're also beneficial for blood sugar control, which is important for heart health.</p>
      <p><strong>How to use:</strong> Sprout the seeds, add to curries, or soak overnight and consume in the morning.</p>
      
      <p>Incorporate these spices into your daily cooking for cumulative heart health benefits. Remember that spices work best as part of an overall heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins.</p>
    `,
    category: "Nutrition",
    tags: ["Heart Health", "Spices", "Anti-inflammatory"],
    author: "Dr. Rajesh Kumar",
    authorTitle: "Cardiologist & Nutritionist",
    date: "April 10, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    likes: 210,
    comments: 28,
  },
  {
    id: 4,
    title: "Seasonal Eating Guide: Summer Foods for Optimal Health",
    excerpt:
      "Learn which foods to eat during summer months according to Ayurvedic principles for better digestion and energy.",
    content: `
      <p>According to Ayurveda, eating seasonally helps maintain balance in the body. Summer (Grishma Ritu) is characterized by heat, which can increase Pitta dosha. Here's what to eat and avoid during summer months:</p>
      
      <h3>Foods to Favor in Summer</h3>
      
      <h4>Fruits</h4>
      <ul>
        <li>Watermelon - Hydrating and cooling</li>
        <li>Coconut - Replenishes electrolytes</li>
        <li>Mangoes - When ripe, they're cooling (despite common misconception)</li>
        <li>Melons - All varieties are hydrating</li>
        <li>Berries - Rich in antioxidants</li>
        <li>Pomegranate - Cooling and hydrating</li>
      </ul>
      
      <h4>Vegetables</h4>
      <ul>
        <li>Cucumber - Extremely cooling</li>
        <li>Bottle gourd (Lauki) - Reduces body heat</li>
        <li>Ridge gourd (Turai) - Light and easy to digest</li>
        <li>Leafy greens - Especially spinach and mint</li>
        <li>Zucchini - Light and hydrating</li>
      </ul>
      
      <h4>Grains</h4>
      <ul>
        <li>Barley - Light and cooling</li>
        <li>Rice - Easy to digest</li>
      </ul>
      
      <h4>Dairy</h4>
      <ul>
        <li>Buttermilk (Chaas) - Cooling and aids digestion</li>
        <li>Yogurt - Consume at lunch, not dinner</li>
      </ul>
      
      <h4>Spices & Herbs</h4>
      <ul>
        <li>Mint - Cooling and refreshing</li>
        <li>Coriander - Reduces body heat</li>
        <li>Fennel - Aids digestion</li>
        <li>Cumin - Helps digestion without heating the body too much</li>
      </ul>
      
      <h3>Foods to Limit in Summer</h3>
      <ul>
        <li>Hot, spicy foods (chili, garlic, excessive ginger)</li>
        <li>Sour fruits (unripe mangoes, tamarind)</li>
        <li>Excessive salt</li>
        <li>Fermented foods</li>
        <li>Alcohol</li>
        <li>Deep-fried foods</li>
      </ul>
      
      <h3>Summer Eating Tips</h3>
      <ol>
        <li>Stay hydrated with water, coconut water, and herbal teas</li>
        <li>Eat smaller, lighter meals</li>
        <li>Include cooling herbs like mint and coriander in your meals</li>
        <li>Favor steaming, boiling, and sautéing over frying and roasting</li>
        <li>Eat your main meal at lunch when digestion is strongest</li>
        <li>Have an early, light dinner at least 3 hours before bedtime</li>
      </ol>
      
      <p>By following these seasonal eating guidelines, you can maintain balance, prevent summer-related health issues like heat rash, fatigue, and indigestion, and keep your energy levels optimal throughout the hot months.</p>
    `,
    category: "Ayurveda",
    tags: ["Seasonal Eating", "Summer", "Cooling Foods"],
    author: "Meera Joshi",
    authorTitle: "Ayurvedic Nutritionist",
    date: "March 28, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    likes: 178,
    comments: 19,
  },
  {
    id: 5,
    title: "Mindful Eating Practices from Indian Traditions",
    excerpt:
      "Explore ancient Indian eating practices that promote better digestion, satisfaction, and overall wellness.",
    content: `
      <p>Long before "mindful eating" became a modern wellness trend, traditional Indian culture had established mindful eating practices. These time-tested approaches can transform your relationship with food and improve digestion.</p>
      
      <h3>Traditional Indian Mindful Eating Practices</h3>
      
      <h4>1. Eating with Your Hands</h4>
      <p>In Indian tradition, eating with your hands isn't just cultural—it's beneficial. Your fingers have thousands of nerve endings that send signals to the brain about the temperature, texture, and spiciness of food. This prepares the stomach for digestion by triggering the appropriate digestive juices and enzymes.</p>
      <p>Additionally, the touch of food activates the five elements (Pancha-bhoota) in your body, creating a deeper connection with what you're consuming.</p>
      
      <h4>2. Sitting on the Floor</h4>
      <p>Traditionally, meals were eaten while sitting cross-legged on the floor. This posture naturally engages the stomach muscles and improves blood circulation in the digestive organs. It also encourages better posture, which allows food to move more easily through the digestive tract.</p>
      
      <h4>3. Eating in Silence</h4>
      <p>Many Indian traditions, particularly in ashrams and temples, encourage eating in silence or with minimal conversation. This practice helps you focus on the sensory experience of eating and promotes better digestion by reducing stress and distraction.</p>
      
      <h4>4. The Six Tastes (Shad Rasa)</h4>
      <p>Ayurveda recognizes six tastes that should be included in each meal for optimal satisfaction and nutrition: sweet, sour, salty, pungent, bitter, and astringent. A traditional Indian thali naturally incorporates all these tastes, creating a sense of completeness that prevents overeating.</p>
      
      <h4>5. Eating According to Hunger (Agni)</h4>
      <p>Ayurveda emphasizes eating according to your digestive fire (agni). This means eating only when truly hungry and stopping when you're about 75% full. The traditional saying "Leave a quarter of your stomach empty" promotes better digestion and prevents the lethargy that comes from overeating.</p>
      
      <h4>6. Expressing Gratitude</h4>
      <p>Many Indian traditions begin meals with a prayer or moment of gratitude. This practice creates a pause before eating, allowing you to transition from other activities and become present with your food.</p>
      
      <h3>How to Practice Indian Mindful Eating</h3>
      <ol>
        <li>Begin your meal with a moment of gratitude</li>
        <li>Sit in a comfortable, upright position</li>
        <li>Take a few deep breaths before starting</li>
        <li>Try eating with your hands (appropriate foods)</li>
        <li>Chew thoroughly and savor each bite</li>
        <li>Notice the flavors, textures, and aromas</li>
        <li>Eat slowly and pause between bites</li>
        <li>Stop when you feel about 75% full</li>
      </ol>
      
      <p>Incorporating these traditional practices can lead to better digestion, more satisfaction from meals, and a healthier relationship with food.</p>
    `,
    category: "Wellness",
    tags: ["Mindful Eating", "Digestion", "Traditional Practices"],
    author: "Dr. Sunita Patel",
    authorTitle: "Integrative Nutrition Coach",
    date: "February 15, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    likes: 156,
    comments: 22,
  },
]

export default function HealthTipsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedTip, setSelectedTip] = useState<number | null>(null)

  const filteredTips = healthTips.filter((tip) => {
    // Filter by category
    if (activeCategory !== "all" && tip.category.toLowerCase() !== activeCategory.toLowerCase()) {
      return false
    }

    // Filter by search term
    if (
      searchTerm &&
      !tip.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !tip.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !tip.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  const featuredTips = healthTips.filter((tip) => tip.featured)
  const currentTip = selectedTip !== null ? healthTips.find((tip) => tip.id === selectedTip) : null

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Health Tips & Articles</h1>
        <p className="mt-2 text-muted-foreground">Evidence-based health information to support your wellness journey</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-2/3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search health tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>
        <div className="md:w-1/3">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="ayurveda">Ayurveda</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {selectedTip === null ? (
        <>
          {featuredTips.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredTips.map((tip) => (
                  <Card
                    key={tip.id}
                    className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={tip.image || "/placeholder.svg"}
                        alt={tip.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-saffron-500">{tip.category}</Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{tip.title}</CardTitle>
                      <CardDescription>{tip.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tip.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-saffron-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{tip.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{tip.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-saffron-500 hover:bg-saffron-600"
                        onClick={() => setSelectedTip(tip.id)}
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-6">All Health Tips</h2>
            {filteredTips.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-semibold">No articles found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredTips.map((tip) => (
                  <Card
                    key={tip.id}
                    className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={tip.image || "/placeholder.svg"}
                        alt={tip.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-saffron-500">{tip.category}</Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="line-clamp-2">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-3">{tip.excerpt}</p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{tip.date}</span>
                        <span>{tip.readTime}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-saffron-200"
                        onClick={() => setSelectedTip(tip.id)}
                      >
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Button variant="outline" className="mb-6" onClick={() => setSelectedTip(null)}>
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Articles
            </Button>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={currentTip?.image || "/placeholder.svg"}
                  alt={currentTip?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-saffron-500">{currentTip?.category}</Badge>
                  {currentTip?.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-white/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{currentTip?.title}</h1>

                <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{currentTip?.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{currentTip?.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    <span>{currentTip?.likes} likes</span>
                  </div>
                </div>

                <div
                  className="prose prose-saffron max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentTip?.content || "" }}
                ></div>

                <Separator className="my-8" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-700 font-bold text-xl mr-3">
                      {currentTip?.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{currentTip?.author}</div>
                      <div className="text-sm text-muted-foreground">{currentTip?.authorTitle}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-4">Comments ({currentTip?.comments})</h3>
                  <div className="flex gap-3">
                    <Input placeholder="Add a comment..." className="flex-1" />
                    <Button>Post</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthTips
                      .filter(
                        (tip) =>
                          tip.id !== currentTip?.id &&
                          (tip.category === currentTip?.category ||
                            tip.tags.some((tag) => currentTip?.tags.includes(tag))),
                      )
                      .slice(0, 3)
                      .map((tip) => (
                        <div key={tip.id} className="flex gap-3">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={tip.image || "/placeholder.svg"}
                              alt={tip.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4
                              className="font-medium text-sm line-clamp-2 cursor-pointer hover:text-saffron-600"
                              onClick={() => setSelectedTip(tip.id)}
                            >
                              {tip.title}
                            </h4>
                            <div className="text-xs text-muted-foreground mt-1">{tip.date}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(healthTips.flatMap((tip) => tip.tags)))
                      .slice(0, 10)
                      .map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-saffron-50 cursor-pointer">
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-saffron-50 to-amber-50 border-saffron-100">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-saffron-500" />
                    Health Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take our comprehensive health assessment to receive personalized health tips and meal
                    recommendations.
                  </p>
                  <Button className="w-full bg-saffron-500 hover:bg-saffron-600">Start Assessment</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
