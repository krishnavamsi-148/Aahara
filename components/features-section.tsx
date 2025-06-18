"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  HeartPulse,
  Scale,
  Leaf,
  Camera,
  MessageSquare,
  Calendar,
  BarChart,
  Trophy,
  CreditCard,
  LineChart,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("ai")

  const features = [
    {
      id: "ai",
      title: "AI-Powered Recommendations",
      description:
        "Our advanced AI analyzes your health data to create personalized meal plans tailored to your specific needs.",
      icon: Brain,
      color: "bg-saffron-100 text-saffron-700",
      items: [
        {
          title: "Personalized Meal Plans",
          description: "Custom meal plans based on BMI, blood sugar, BP, allergies, age, and gender.",
          icon: HeartPulse,
        },
        {
          title: "Health-Specific Meals",
          description: "Specialized meals for diabetes, weight management, heart health, and Ayurvedic principles.",
          icon: Scale,
        },
        {
          title: "Traditional & Modern Fusion",
          description: "Blend of traditional Indian recipes with modern nutritional science.",
          icon: Leaf,
        },
      ],
    },
    {
      id: "analysis",
      title: "Food Analysis & Insights",
      description: "Get detailed nutritional analysis of your meals and personalized insights to improve your diet.",
      icon: Camera,
      color: "bg-spice-100 text-spice-700",
      items: [
        {
          title: "Food Image Recognition",
          description: "Upload photos of your meals for instant nutritional analysis and recommendations.",
          icon: Camera,
        },
        {
          title: "Nutrition Chatbot",
          description: "Get real-time answers to your nutrition questions and meal insights.",
          icon: MessageSquare,
        },
        {
          title: "Weekly Nutrition Reports",
          description: "Detailed analysis of your eating patterns with suggestions for improvement.",
          icon: BarChart,
        },
      ],
    },
    {
      id: "engagement",
      title: "Engaging Health Journey",
      description: "Stay motivated with gamified challenges, rewards, and interactive progress tracking.",
      icon: Trophy,
      color: "bg-turmeric-100 text-turmeric-700",
      items: [
        {
          title: "Festival-Themed Challenges",
          description: "Participate in seasonal and festival-based health challenges with rewards.",
          icon: Calendar,
        },
        {
          title: "Progress Visualization",
          description: "Interactive and animated visualizations of your health improvements.",
          icon: LineChart,
        },
        {
          title: "Easy Payment Options",
          description: "Seamless UPI and digital wallet integration for quick checkout.",
          icon: CreditCard,
        },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-pattern-kalamkari">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-saffron-100 text-saffron-800 hover:bg-saffron-200 px-3 py-1 text-sm">
            Key Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Holistic Approach to{" "}
            <span className="bg-gradient-to-r from-saffron-600 to-spice-600 bg-clip-text text-transparent">
              Nutrition & Wellness
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how Aahara combines traditional wisdom with modern technology to provide a comprehensive health
            solution.
          </p>
        </div>

        <Tabs defaultValue="ai" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-saffron-50"
              >
                <div className={`h-10 w-10 rounded-full ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <span>{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>

                    <div className="space-y-4 mt-8">
                      {feature.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="flex items-start gap-4"
                        >
                          <div
                            className={`h-10 w-10 rounded-full ${feature.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <Button className="mt-6 bg-saffron-500 hover:bg-saffron-600">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-saffron-500/20 to-transparent"></div>
                    <img
                      src={
                        feature.id === "ai"
                          ? "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvdXRoJTIwaW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                          : feature.id === "analysis"
                            ? "https://media.istockphoto.com/id/1277731109/photo/nutrition-science-concept-data-analytics-of-foods.jpg?s=612x612&w=0&k=20&c=YJqYzo4HeDxIq8LZ8nuRqhcwUtQ0txO4S1vt7MB20oA="
                            : feature.id === "engagement"
                              ? "https://media.istockphoto.com/id/1419219075/vector/overweight-man-woman-silhouette-paper-cut-vector.jpg?s=612x612&w=0&k=20&c=Kgb-2y15yOCc6sUea2Ny5_O45FuHvQWo11kjRXEmvIs="
                              : "/images/default.jpg"
                      }
                      alt={feature.title}
                      className="w-full h-[400px] object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  {feature.id === "ai" && (
                    <Card className="absolute -bottom-6 -right-6 max-w-[250px] shadow-lg animate-cooking-boil">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="h-8 w-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-2">
                            <Brain className="h-4 w-4" />
                          </div>
                          <span className="font-medium text-sm">AI Recommendation</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          "Based on your blood sugar levels, we recommend this low-GI meal plan with more fiber and
                          protein."
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {feature.id === "analysis" && (
                    <Card className="absolute -bottom-6 -right-6 max-w-[250px] shadow-lg animate-cooking-stir">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="h-8 w-8 rounded-full bg-spice-100 text-spice-700 flex items-center justify-center mr-2">
                            <Camera className="h-4 w-4" />
                          </div>
                          <span className="font-medium text-sm">Food Analysis</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          "This meal contains approximately 320 calories, 15g protein, and is suitable for your heart
                          health goals."
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {feature.id === "engagement" && (
                    <Card className="absolute -bottom-6 -right-6 max-w-[250px] shadow-lg animate-spice-sprinkle">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="h-8 w-8 rounded-full bg-turmeric-100 text-turmeric-700 flex items-center justify-center mr-2">
                            <Trophy className="h-4 w-4" />
                          </div>
                          <span className="font-medium text-sm">Challenge Completed!</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          "Congratulations! You've completed the Diwali Healthy Eating Challenge and earned 500 points."
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
