"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Brain, Zap, BarChart3, Camera, Utensils, HeadsetIcon as VrHeadset } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AIPoweredFeatures() {
  const [activeTab, setActiveTab] = useState("recommendation")

  const features = [
    {
      id: "recommendation",
      title: "Advanced Health-Aware Meal Recommendation",
      description:
        "Our AI analyzes your health metrics to recommend meals that adapt daily based on your current readings.",
      icon: <Brain className="h-6 w-6 text-primary" />,
      details: [
        "Processes blood sugar, blood pressure, cholesterol, thyroid levels, and more",
        "Alerts if a planned meal might cause sugar spikes or sodium overload",
        'Provides "Smart swap" recommendations for safer ingredients',
        "Continuously learns from your preferences and health patterns",
      ],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "prediction",
      title: "Health Parameter Prediction",
      description: "AI-driven predictions based on your meal history, activity level, and health trends.",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      details: [
        "Predicts risk of sugar spikes before they happen",
        "Warns about potential nutrient deficiencies",
        "Recommends detox meals when needed",
        "Acts as your digital dietician, preventing health issues",
      ],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "sensitivity",
      title: "Personalized Food Sensitivity Scanner",
      description: "AI builds your sensitivity profile by analyzing meals that caused discomfort.",
      icon: <Camera className="h-6 w-6 text-primary" />,
      details: [
        "Log or photograph meals that caused bloating or fatigue",
        "AI identifies patterns in food sensitivities",
        "Automatically avoids problematic ingredients in meal plans",
        "Provides alternatives to foods you're sensitive to",
      ],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "kitchen",
      title: "Virtual Indian Kitchen Tour",
      description: "AR experience showing how traditional Indian meals are prepared authentically.",
      icon: <VrHeadset className="h-6 w-6 text-primary" />,
      details: [
        "Watch traditional techniques like grinding masalas and making rotis",
        "Interactive 3D models of cooking utensils and processes",
        "Learn regional cooking variations across India",
        "Voice-guided instructions in multiple Indian languages",
      ],
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const activeFeature = features.find((f) => f.id === activeTab)

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-6 w-6 text-amber-500" />
          <h2 className="text-3xl font-bold text-gray-900">AI-Powered Features</h2>
        </div>

        <p className="text-lg text-gray-700 mb-10 max-w-3xl">
          Aahara leverages cutting-edge artificial intelligence to provide personalized nutrition guidance that adapts
          to your unique health profile and cultural preferences.
        </p>

        <Tabs defaultValue="recommendation" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-amber-50 p-1 rounded-lg mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
              >
                {feature.icon}
                <span className="hidden md:inline">{feature.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {activeFeature && (
            <TabsContent value={activeFeature.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-2 border-amber-100 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                      <Badge className="w-fit mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200">AI-Powered</Badge>
                      <CardTitle className="flex items-center gap-2">
                        {activeFeature.icon}
                        {activeFeature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-700">{activeFeature.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {activeFeature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="border-t bg-amber-50 flex justify-between">
                      <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-100">
                        Learn More
                      </Button>
                      <Button className="bg-amber-600 hover:bg-amber-700">Try Now</Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={activeFeature.image || "/placeholder.svg"}
                    alt={activeFeature.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 text-white">
                    <div className="flex items-center gap-2">
                      <Utensils className="h-5 w-5" />
                      <h3 className="font-medium">Experience the future of nutrition</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </section>
  )
}
